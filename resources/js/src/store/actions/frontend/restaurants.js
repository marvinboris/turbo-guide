import * as actionTypes from '../actionTypes';

const prefix = '/api/';

export const resetRestaurants = (meal = false) => ({ type: actionTypes.RESTAURANTS_RESET, meal });
const restaurantsStart = () => ({ type: actionTypes.RESTAURANTS_START });
const restaurantsSuccess = data => ({ type: actionTypes.RESTAURANTS_SUCCESS, ...data });
const restaurantsFail = error => ({ type: actionTypes.RESTAURANTS_FAIL, error });
export const getRestaurant = slug => async dispatch => {
    dispatch(restaurantsStart());

    try {
        const res = await fetch(`${prefix}restaurants/${slug}`);
        const resData = await res.json();

        let cart = localStorage.getItem(`cart_${slug}`);
        if (!cart) {
            cart = { items: [], total: 0 };
            localStorage.setItem(`cart_${slug}`, JSON.stringify(cart));
        } else cart = JSON.parse(cart);
        resData.restaurant.cart = cart;

        dispatch(restaurantsSuccess(resData));
    } catch (error) {
        dispatch(restaurantsFail(error));
    }
}

export const addItem = (slug, type, item) => async (dispatch, getState) => {
    const { restaurants: { restaurant } } = getState().frontend;

    const newRestaurant = { ...restaurant };
    const existingItem = newRestaurant.cart.items.find(exItem => exItem.type === type && exItem.id === item.id);
    if (existingItem) existingItem.qty++;
    else newRestaurant.cart.items.push({ type, id: item.id, qty: 1, price: item.price, name: item.name, photo: item.photo });
    newRestaurant.cart.total += existingItem ? existingItem.price : item.price;
    localStorage.setItem(`cart_${slug}`, JSON.stringify(newRestaurant.cart));

    dispatch(restaurantsSuccess({ restaurant: newRestaurant }));
}

export const subItem = (slug, type, item) => async (dispatch, getState) => {
    const { restaurants: { restaurant } } = getState().frontend;

    const newRestaurant = { ...restaurant };
    const existingItem = newRestaurant.cart.items.find(exItem => exItem.type === type && exItem.id === item.id);
    if (existingItem && existingItem.qty >= 1) {
        existingItem.qty--;
        newRestaurant.cart.total -= existingItem.price;
    }
    if (existingItem.qty === 0) newRestaurant.cart.items = newRestaurant.cart.items.filter(exItem => !(exItem.type === item.type && exItem.id === item.id));
    localStorage.setItem(`cart_${slug}`, JSON.stringify(newRestaurant.cart));

    dispatch(restaurantsSuccess({ restaurant: newRestaurant }));
}

export const postPayment = (slug, data) => async (dispatch, getState) => {
    dispatch(restaurantsStart());

    try {
        const res = await fetch(`${prefix}restaurants/${slug}/orders`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);

        if (resData.message.type === 'success') {
            const cart = { items: [], total: 0 };
            localStorage.setItem(`cart_${slug}`, JSON.stringify(cart));
            const restaurant = { ...getState().frontend.restaurants.restaurant, cart };

            resData.restaurant = restaurant;
        }

        dispatch(restaurantsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(restaurantsFail(error));
    }
}