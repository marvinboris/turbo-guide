import * as actionTypes from '../actionTypes';
import { authDataUpdateSuccess } from '../auth';

const prefix = '/api/';

export const resetPlans = () => ({ type: actionTypes.PLANS_RESET });
const plansStart = () => ({ type: actionTypes.PLANS_START });
const plansSuccess = data => ({ type: actionTypes.PLANS_SUCCESS, ...data });
const plansFail = error => ({ type: actionTypes.PLANS_FAIL, error });
export const getPlans = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(plansStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/plans?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(plansSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(plansFail(error));
    }
};

export const getPlansBought = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(plansStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/plans/bought?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(plansSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(plansFail(error));
    }
};

export const getPlansInfo = () => async (dispatch, getState) => {
    dispatch(plansStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/plans/info`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(plansSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(plansFail(error));
    }
};

export const postPlans = data => async (dispatch, getState) => {
    dispatch(plansStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/plans`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(plansSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(plansFail(error));
    }
};

export const purchasePlan = data => async (dispatch, getState) => {
    dispatch(plansStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/plans`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(plansSuccess(resData));
        if (resData.data) dispatch(authDataUpdateSuccess(resData.data));
    } catch (error) {
        console.log(error);
        dispatch(plansFail(error));
    }
};

export const deletePlans = id => async (dispatch, getState) => {
    dispatch(plansStart());
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
        const res = await fetch(`${prefix + role}/plans/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(plansSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(plansFail(error));
    }
};