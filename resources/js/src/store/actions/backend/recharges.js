import * as actionTypes from '../actionTypes';

const prefix = '/api/';

export const resetRecharges = () => ({ type: actionTypes.RECHARGES_RESET });
const rechargesStart = () => ({ type: actionTypes.RECHARGES_START });
const rechargesSuccess = data => ({ type: actionTypes.RECHARGES_SUCCESS, ...data });
const rechargesFail = error => ({ type: actionTypes.RECHARGES_FAIL, error });
export const getRecharges = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(rechargesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/recharges?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(rechargesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(rechargesFail(error));
    }
};

export const getRechargesInfo = () => async (dispatch, getState) => {
    dispatch(rechargesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/recharges/info`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(rechargesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(rechargesFail(error));
    }
};

export const postRecharges = data => async (dispatch, getState) => {
    dispatch(rechargesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/recharges`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(rechargesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(rechargesFail(error));
    }
};

export const deleteRecharges = id => async (dispatch, getState) => {
    dispatch(rechargesStart());
    const { role } = getState().auth;

    try {
        let page, show, search;
        const pageElt = document.getElementById('table-page');
        const showElt = document.getElementById('table-show');
        const searchElt = document.getElementById('table-search');
        if (pageElt) page = pageElt.value;
        if (showElt) show = showElt.value;
        if (searchElt) search = searchElt.value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/recharges/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(rechargesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(rechargesFail(error));
    }
};