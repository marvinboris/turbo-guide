import * as actionTypes from '../actionTypes';

const prefix = '/api/';

export const resetMeals = () => ({ type: actionTypes.MEALS_RESET });
const mealsStart = () => ({ type: actionTypes.MEALS_START });
const mealsSuccess = data => ({ type: actionTypes.MEALS_SUCCESS, ...data });
const mealsFail = error => ({ type: actionTypes.MEALS_FAIL, error });
export const getMeals = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(mealsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        let url;
        if (role === 'restaurant') url = `${prefix + role}/meals?category_id=${page !== 1 ? page : ""}`;
        else url = `${prefix + role}/meals?page=${page}&show=${show}&search=${search}`;
        const res = await fetch(url, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(mealsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(mealsFail(error));
    }
};

export const getMealsInfo = () => async (dispatch, getState) => {
    dispatch(mealsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/meals/info`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(mealsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(mealsFail(error));
    }
};

export const getMeal = id => async (dispatch, getState) => {
    dispatch(mealsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/meals/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(mealsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(mealsFail(error));
    }
};

export const postMeals = data => async (dispatch, getState) => {
    dispatch(mealsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/meals`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(mealsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(mealsFail(error));
    }
};

export const patchMeals = (id, data) => async (dispatch, getState) => {
    dispatch(mealsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/meals/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(mealsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(mealsFail(error));
    }
};

export const deleteMeals = id => async (dispatch, getState) => {
    dispatch(mealsStart());
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
        const res = await fetch(`${prefix + role}/meals/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(mealsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(mealsFail(error));
    }
};