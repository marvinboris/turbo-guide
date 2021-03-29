import * as actionTypes from '../actionTypes';

const prefix = '/api/';

export const resetRestaurants = () => ({ type: actionTypes.RESTAURANTS_RESET });
const restaurantsStart = () => ({ type: actionTypes.RESTAURANTS_START });
const restaurantsSuccess = data => ({ type: actionTypes.RESTAURANTS_SUCCESS, ...data });
const restaurantsFail = error => ({ type: actionTypes.RESTAURANTS_FAIL, error });
export const getRestaurant = md5 => async dispatch => {
    dispatch(restaurantsStart());

    try {
        const res = await fetch(`${prefix}restaurants/${md5}`);
        const resData = await res.json();

        dispatch(restaurantsSuccess(resData));
    } catch (error) {

    }
}

export const getRestaurantsMeal = (md5, id) => async dispatch => {
    dispatch(restaurantsStart());

    try {
        const res = await fetch(`${prefix}restaurants/${md5}/meals/${id}`);
        const resData = await res.json();

        resData.addons = resData.addons.map(a => ({ ...a, qty: 0 }))
        resData.qty = 1;
        resData.total = resData.meal.price;

        dispatch(restaurantsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(restaurantsFail(error));
    }
}

export const postComment = (md5, id, data) => async dispatch => {
    dispatch(restaurantsStart());

    try {
        const form = new FormData(data);
        const res = await fetch(`${prefix}restaurants/${md5}/meals/${id}/comment`, {
            method: 'POST',
            body: form,
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(restaurantsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(restaurantsFail(error));
    }
}

export const addMeal = () => async (dispatch, getState) => {
    let { restaurants: { meal, qty, total } } = getState().frontend;
    qty++;
    total += meal.price;

    dispatch(restaurantsSuccess({ qty, total }));
}

export const subMeal = () => async (dispatch, getState) => {
    let { restaurants: { meal, qty, total } } = getState().frontend;
    if (qty > 1) {
        qty--;
        total -= meal.price;
    }

    dispatch(restaurantsSuccess({ qty, total }));
}

export const addAddon = id => async (dispatch, getState) => {
    let { restaurants: { addons, total } } = getState().frontend;
    const addonIndex = addons.findIndex(a => +a.id === +id);
    const newAddons = [...addons];

    if (addonIndex >= 0) {
        const addon = newAddons[addonIndex];
        newAddons[addonIndex].qty = addon.qty + 1;
        total += addon.price;
    }

    dispatch(restaurantsSuccess({ addons: newAddons, total }));
}

export const subAddon = id => async (dispatch, getState) => {
    let { restaurants: { addons, total } } = getState().frontend;
    const addonIndex = addons.findIndex(a => +a.id === +id);
    const newAddons = [...addons];

    if (addonIndex >= 0) {
        const addon = newAddons[addonIndex];

        if (addon.qty > 0) {
            newAddons[addonIndex].qty = addon.qty - 1;
            total -= addon.price;
        }
    }

    dispatch(restaurantsSuccess({ addons: newAddons, total }));
}