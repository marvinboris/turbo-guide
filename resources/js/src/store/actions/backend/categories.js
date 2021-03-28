import * as actionTypes from '../actionTypes';

const prefix = '/api/';

export const resetCategories = () => ({ type: actionTypes.CATEGORIES_RESET });
const categoriesStart = () => ({ type: actionTypes.CATEGORIES_START });
const categoriesSuccess = data => ({ type: actionTypes.CATEGORIES_SUCCESS, ...data });
const categoriesFail = error => ({ type: actionTypes.CATEGORIES_FAIL, error });
export const getCategories = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(categoriesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        let url;
        if (role === 'restaurant') url = `${prefix + role}/categories?search=${page !== 1 ? page : ""}`;
        else url = `${prefix + role}/categories?page=${page}&show=${show}&search=${search}`;
        const res = await fetch(url, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(categoriesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(categoriesFail(error));
    }
};

export const getCategoriesInfo = () => async (dispatch, getState) => {
    dispatch(categoriesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/categories/info`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(categoriesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(categoriesFail(error));
    }
};

export const getCategory = id => async (dispatch, getState) => {
    dispatch(categoriesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/categories/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(categoriesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(categoriesFail(error));
    }
};

export const postCategories = data => async (dispatch, getState) => {
    dispatch(categoriesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/categories`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(categoriesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(categoriesFail(error));
    }
};

export const patchCategories = (id, data) => async (dispatch, getState) => {
    dispatch(categoriesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/categories/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(categoriesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(categoriesFail(error));
    }
};

export const deleteCategories = id => async (dispatch, getState) => {
    dispatch(categoriesStart());
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
        const res = await fetch(`${prefix + role}/categories/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(categoriesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(categoriesFail(error));
    }
};