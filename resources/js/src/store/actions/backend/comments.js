import * as actionTypes from '../actionTypes';

const prefix = '/api/';

export const resetComments = () => ({ type: actionTypes.COMMENTS_RESET });
const commentsStart = () => ({ type: actionTypes.COMMENTS_START });
const commentsSuccess = data => ({ type: actionTypes.COMMENTS_SUCCESS, ...data });
const commentsFail = error => ({ type: actionTypes.COMMENTS_FAIL, error });
export const getComments = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(commentsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/comments?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(commentsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(commentsFail(error));
    }
};

export const getCommentsInfo = () => async (dispatch, getState) => {
    dispatch(commentsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/comments/info`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(commentsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(commentsFail(error));
    }
};

export const getComment = id => async (dispatch, getState) => {
    dispatch(commentsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/comments/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(commentsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(commentsFail(error));
    }
};

export const postComments = data => async (dispatch, getState) => {
    dispatch(commentsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/comments`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(commentsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(commentsFail(error));
    }
};

export const patchComments = (id, data) => async (dispatch, getState) => {
    dispatch(commentsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/comments/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(commentsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(commentsFail(error));
    }
};

export const deleteComments = id => async (dispatch, getState) => {
    dispatch(commentsStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/comments/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(commentsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(commentsFail(error));
    }
};