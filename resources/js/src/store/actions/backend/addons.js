import * as actionTypes from '../actionTypes';

const prefix = '/api/';

export const resetAddons = () => ({ type: actionTypes.ADDONS_RESET });
const addonsStart = () => ({ type: actionTypes.ADDONS_START });
const addonsSuccess = data => ({ type: actionTypes.ADDONS_SUCCESS, ...data });
const addonsFail = error => ({ type: actionTypes.ADDONS_FAIL, error });
export const getAddons = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(addonsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        let url;
        if (role === 'restaurant') url = `${prefix + role}/addons?search=${page !== 1 ? page : ""}`;
        else url = `${prefix + role}/addons?page=${page}&show=${show}&search=${search}`;
        const res = await fetch(url, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(addonsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(addonsFail(error));
    }
};

export const getAddonsInfo = () => async (dispatch, getState) => {
    dispatch(addonsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/addons/info`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(addonsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(addonsFail(error));
    }
};

export const getAddon = id => async (dispatch, getState) => {
    dispatch(addonsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/addons/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(addonsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(addonsFail(error));
    }
};

export const postAddons = data => async (dispatch, getState) => {
    dispatch(addonsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/addons`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(addonsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(addonsFail(error));
    }
};

export const patchAddons = (id, data) => async (dispatch, getState) => {
    dispatch(addonsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/addons/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(addonsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(addonsFail(error));
    }
};

export const deleteAddons = id => async (dispatch, getState) => {
    dispatch(addonsStart());
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
        const res = await fetch(`${prefix + role}/addons/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(addonsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(addonsFail(error));
    }
};