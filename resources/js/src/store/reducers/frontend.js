import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    meals: {
        loading: false,
        error: null,
    }
};

const mealsReset = (state, action) => updateObject(state, { meals: initialState.meals });
const mealsStart = (state, action) => updateObject(state, { meals: updateObject(state.meals, { loading: true, message: null }) });
const mealsSuccess = (state, action) => updateObject(state, { meals: updateObject(state.meals, { loading: false, error: null, ...action }) });
const mealsFail = (state, action) => updateObject(state, { meals: updateObject(state.meals, { loading: false, ...action }) });

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MEALS_RESET: return mealsReset(state, action);
        case actionTypes.MEALS_START: return mealsStart(state, action);
        case actionTypes.MEALS_SUCCESS: return mealsSuccess(state, action);
        case actionTypes.MEALS_FAIL: return mealsFail(state, action);

        default: return state;
    }
};