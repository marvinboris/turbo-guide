import * as actionTypes from '../actionTypes';

import meals from '../../../components/Data/Meals';
import addons from '../../../components/Data/Addons';
import comments from '../../../components/Data/Comments';

const prefix = '/api/';

export const resetMeals = () => ({ type: actionTypes.MEALS_RESET });
const mealsStart = () => ({ type: actionTypes.MEALS_START });
const mealsSuccess = data => ({ type: actionTypes.MEALS_SUCCESS, ...data });
const mealsFail = error => ({ type: actionTypes.MEALS_FAIL, error });
export const getMeal = id => async dispatch => {
    dispatch(mealsStart());

    try {
        // const res = await fetch(`${prefix}meals/${id}`);
        // const resData = await res.json();

        const meal = meals.find(({ id: mealId }) => +id === +mealId);
        const resData = {
            meal,
            addons: addons.map(a => ({ ...a, qty: 0 })),
            qty: 1,
            total: meal.price,
            comments
        };
        dispatch(mealsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(mealsFail(error));
    }
}

export const addMeal = () => async (dispatch, getState) => {
    let { meals: { meal, qty, total } } = getState().frontend;
    qty++;
    total += meal.price;

    dispatch(mealsSuccess({ qty, total }));
}

export const subMeal = () => async (dispatch, getState) => {
    let { meals: { meal, qty, total } } = getState().frontend;
    if (qty > 1) {
        qty--;
        total -= meal.price;
    }

    dispatch(mealsSuccess({ qty, total }));
}

export const addAddon = id => async (dispatch, getState) => {
    let { meals: { addons, total } } = getState().frontend;
    const addonIndex = addons.findIndex(a => +a.id === +id);
    const newAddons = [...addons];

    if (addonIndex >= 0) {
        const addon = newAddons[addonIndex];
        newAddons[addonIndex].qty = addon.qty + 1;
        total += addon.price;
    }

    dispatch(mealsSuccess({ addons: newAddons, total }));
}

export const subAddon = id => async (dispatch, getState) => {
    let { meals: { addons, total } } = getState().frontend;
    const addonIndex = addons.findIndex(a => +a.id === +id);
    const newAddons = [...addons];

    if (addonIndex >= 0) {
        const addon = newAddons[addonIndex];

        if (addon.qty > 0) {
            newAddons[addonIndex].qty = addon.qty - 1;
            total -= addon.price;
        }
    }

    dispatch(mealsSuccess({ addons: newAddons, total }));
}