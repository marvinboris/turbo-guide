import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    restaurants: {
        loading: false,
        error: null,
    }
};

const restaurantsReset = (state, action) => !action.meal ? updateObject(state, { restaurants: initialState.restaurants }) : updateObject(state, { restaurants: updateObject(state.restaurants, { meal: {}, total: 0, qty: 1, addons: [], comments: [] }) });
const restaurantsStart = (state, action) => updateObject(state, { restaurants: updateObject(state.restaurants, { loading: true, message: null }) });
const restaurantsSuccess = (state, action) => updateObject(state, { restaurants: updateObject(state.restaurants, { loading: false, error: null, ...action }) });
const restaurantsFail = (state, action) => updateObject(state, { restaurants: updateObject(state.restaurants, { loading: false, ...action }) });

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RESTAURANTS_RESET: return restaurantsReset(state, action);
        case actionTypes.RESTAURANTS_START: return restaurantsStart(state, action);
        case actionTypes.RESTAURANTS_SUCCESS: return restaurantsSuccess(state, action);
        case actionTypes.RESTAURANTS_FAIL: return restaurantsFail(state, action);

        default: return state;
    }
};