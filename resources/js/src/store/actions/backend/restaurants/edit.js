import { restaurantsStart, restaurantsSuccess, restaurantsFail } from './';

const prefix = '/api/';

export const getRestaurantsEdit = (resource, page = 1, show = 10, search) => async (dispatch, getState) => {
    dispatch(restaurantsStart());
    const { auth: { role }, backend: { restaurants: { data: restaurant } } } = getState();

    try {
        const token = localStorage.getItem('token');
        let url;
        if (['addons', 'categories', 'meals'].includes(resource)) url = `${prefix + role}/restaurants/${restaurant.id}/edit/${resource}?search=${page !== 1 ? page : ""}`;
        else if (resource === 'meals') url = `${prefix + role}/restaurants/${restaurant.id}/edit/${resource}?category_id=${page !== 1 ? page : ""}`;
        else url = `${prefix + role}/restaurants/${restaurant.id}/edit/${resource}?page=${page}&show=${show}&search=${search}`;
        const res = await fetch(url, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(restaurantsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(restaurantsFail(error));
    }
}

export const infoRestaurantsEdit = resource => async (dispatch, getState) => {
    dispatch(restaurantsStart());
    const { auth: { role }, backend: { restaurants: { data: restaurant } } } = getState();

    try {
        const token = localStorage.getItem('token');
        let url = `${prefix + role}/restaurants/${restaurant.id}/edit/${resource}/info`;
        const res = await fetch(url, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(restaurantsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(restaurantsFail(error));
    }
}

export const showRestaurantsEdit = (resource, id) => async (dispatch, getState) => {
    dispatch(restaurantsStart());
    const { auth: { role }, backend: { restaurants: { data: restaurant } } } = getState();

    try {
        const token = localStorage.getItem('token');
        let url = `${prefix + role}/restaurants/${restaurant.id}/edit/${resource}/${id}`;
        const res = await fetch(url, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(restaurantsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(restaurantsFail(error));
    }
}

export const postRestaurantsEdit = (resource, data) => async (dispatch, getState) => {
    dispatch(restaurantsStart());
    const { auth: { role }, backend: { restaurants: { data: restaurant } } } = getState();

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/restaurants/${restaurant.id}/edit/${resource}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(restaurantsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(restaurantsFail(error));
    }
};

export const patchRestaurantsEdit = (resource, id, data) => async (dispatch, getState) => {
    dispatch(restaurantsStart());
    const { auth: { role }, backend: { restaurants: { data: restaurant } } } = getState();

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/restaurants/${restaurant.id}/edit/${resource}/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(restaurantsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(restaurantsFail(error));
    }
};

export const deleteRestaurantsEdit = (resource, id) => async (dispatch, getState) => {
    dispatch(restaurantsStart());
    const { auth: { role }, backend: { restaurants: { data: restaurant } } } = getState();

    try {
        let page, show, search;
        const pageElt = document.getElementById('table-page');
        const showElt = document.getElementById('table-show');
        const searchElt = document.getElementById('table-search');
        if (pageElt) page = pageElt.value;
        if (showElt) show = showElt.value;
        if (searchElt) search = searchElt.value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/restaurants/${restaurant.id}/edit/${resource}/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(restaurantsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(restaurantsFail(error));
    }
};