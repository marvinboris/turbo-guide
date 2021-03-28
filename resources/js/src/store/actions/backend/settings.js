import * as actionTypes from '../actionTypes';

const prefix = '/api/';

export const resetSettings = () => ({ type: actionTypes.SETTINGS_RESET });
const settingsStart = () => ({ type: actionTypes.SETTINGS_START });
const settingsSuccess = data => ({ type: actionTypes.SETTINGS_SUCCESS, ...data });
const settingsFail = error => ({ type: actionTypes.SETTINGS_FAIL, error });
export const getSettings = () => async (dispatch, getState) => {
    dispatch(settingsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const url = `${prefix + role}/settings`;
        const res = await fetch(url, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(settingsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(settingsFail(error));
    }
};

export const restaurantSettings = data => async (dispatch, getState) => {
    dispatch(settingsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/settings/restaurant`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(settingsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(settingsFail(error));
    }
};

export const accountSettings = data => async (dispatch, getState) => {
    dispatch(settingsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/settings/account`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(settingsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(settingsFail(error));
    }
};

export const cmsSettings = data => async (dispatch, getState) => {
    dispatch(settingsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/settings/cms`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(settingsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(settingsFail(error));
    }
};

export const calendarSettings = data => async (dispatch, getState) => {
    dispatch(settingsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/settings/calendar`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(settingsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(settingsFail(error));
    }
};