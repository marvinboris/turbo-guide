import * as actionTypes from '../actionTypes';

const prefix = '/api/';

export const resetDrinks = () => ({ type: actionTypes.DRINKS_RESET });
const drinksStart = () => ({ type: actionTypes.DRINKS_START });
const drinksSuccess = data => ({ type: actionTypes.DRINKS_SUCCESS, ...data });
const drinksFail = error => ({ type: actionTypes.DRINKS_FAIL, error });
export const getDrinks = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(drinksStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        let url;
        if (role === 'restaurant') url = `${prefix + role}/drinks?search=${page !== 1 ? page : ""}`;
        else url = `${prefix + role}/drinks?page=${page}&show=${show}&search=${search}`;
        const res = await fetch(url, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(drinksSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(drinksFail(error));
    }
};

export const getDrinksInfo = () => async (dispatch, getState) => {
    dispatch(drinksStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/drinks/info`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(drinksSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(drinksFail(error));
    }
};

export const getDrink = id => async (dispatch, getState) => {
    dispatch(drinksStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/drinks/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(drinksSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(drinksFail(error));
    }
};

export const postDrinks = data => async (dispatch, getState) => {
    dispatch(drinksStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/drinks`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(drinksSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(drinksFail(error));
    }
};

export const patchDrinks = (id, data) => async (dispatch, getState) => {
    dispatch(drinksStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/drinks/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(drinksSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(drinksFail(error));
    }
};

export const deleteDrinks = id => async (dispatch, getState) => {
    dispatch(drinksStart());
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
        const res = await fetch(`${prefix + role}/drinks/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(drinksSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(drinksFail(error));
    }
};