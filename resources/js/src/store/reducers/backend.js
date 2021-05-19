import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    admins: {
        loading: false,
        error: null
    },
    cms: {
        loading: false,
        error: null
    },
    notifications: {
        loading: false,
        error: null
    },
    dashboard: {
        loading: false,
        error: null
    },
    features: {
        loading: false,
        error: null
    },
    languages: {
        loading: false,
        error: null
    },
    roles: {
        loading: false,
        error: null
    },
    users: {
        loading: false,
        error: null
    },
    methods: {
        loading: false,
        error: null
    },

    
    restaurants: {
        loading: false,
        error: null
    },
    categories: {
        loading: false,
        error: null
    },
    meals: {
        loading: false,
        error: null
    },
    addons: {
        loading: false,
        error: null
    },
    drinks: {
        loading: false,
        error: null
    },
    comments: {
        loading: false,
        error: null
    },
    plans: {
        loading: false,
        error: null
    },
    recharges: {
        loading: false,
        error: null
    },
    settings: {
        loading: false,
        error: null
    },
};

const adminsReset = (state) => updateObject(state, { admins: initialState.admins });
const adminsStart = (state) => updateObject(state, { admins: updateObject(state.admins, { loading: true, message: null }) });
const adminsSuccess = (state, action) => updateObject(state, { admins: updateObject(state.admins, { loading: false, error: null, ...action }) });
const adminsFail = (state, action) => updateObject(state, { admins: updateObject(state.admins, { loading: false, ...action }) });

const cmsReset = (state) => updateObject(state, { cms: initialState.cms });
const cmsStart = (state) => updateObject(state, { cms: updateObject(state.cms, { loading: true, message: null }) });
const cmsSuccess = (state, action) => updateObject(state, { cms: updateObject(state.cms, { loading: false, error: null, ...action }) });
const cmsFail = (state, action) => updateObject(state, { cms: updateObject(state.cms, { loading: false, ...action }) });

const notificationsReset = (state) => updateObject(state, { notifications: initialState.notifications });
const notificationsStart = (state) => updateObject(state, { notifications: updateObject(state.notifications, { loading: true, message: null }) });
const notificationsSuccess = (state, action) => updateObject(state, { notifications: updateObject(state.notifications, { loading: false, error: null, ...action }) });
const notificationsFail = (state, action) => updateObject(state, { notifications: updateObject(state.notifications, { loading: false, ...action }) });

const dashboardReset = (state) => updateObject(state, { dashboard: initialState.dashboard });
const dashboardStart = (state) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: true, message: null }) });
const dashboardSuccess = (state, action) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: false, error: null, ...action }) });
const dashboardFail = (state, action) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: false, ...action }) });

const featuresReset = (state) => updateObject(state, { features: initialState.features });
const featuresStart = (state) => updateObject(state, { features: updateObject(state.features, { loading: true, message: null }) });
const featuresSuccess = (state, action) => updateObject(state, { features: updateObject(state.features, { loading: false, error: null, ...action }) });
const featuresFail = (state, action) => updateObject(state, { features: updateObject(state.features, { loading: false, ...action }) });

const languagesReset = (state) => updateObject(state, { languages: initialState.languages });
const languagesStart = (state) => updateObject(state, { languages: updateObject(state.languages, { loading: true, message: null }) });
const languagesSuccess = (state, action) => updateObject(state, { languages: updateObject(state.languages, { loading: false, error: null, ...action }) });
const languagesFail = (state, action) => updateObject(state, { languages: updateObject(state.languages, { loading: false, ...action }) });

const rolesReset = (state) => updateObject(state, { roles: initialState.roles });
const rolesStart = (state) => updateObject(state, { roles: updateObject(state.roles, { loading: true, message: null }) });
const rolesSuccess = (state, action) => updateObject(state, { roles: updateObject(state.roles, { loading: false, error: null, ...action }) });
const rolesFail = (state, action) => updateObject(state, { roles: updateObject(state.roles, { loading: false, ...action }) });

const usersReset = (state) => updateObject(state, { users: initialState.users });
const usersStart = (state) => updateObject(state, { users: updateObject(state.users, { loading: true, message: null }) });
const usersSuccess = (state, action) => updateObject(state, { users: updateObject(state.users, { loading: false, error: null, ...action }) });
const usersFail = (state, action) => updateObject(state, { users: updateObject(state.users, { loading: false, ...action }) });

const methodsReset = (state) => updateObject(state, { methods: initialState.methods });
const methodsStart = (state) => updateObject(state, { methods: updateObject(state.methods, { loading: true, message: null }) });
const methodsSuccess = (state, action) => updateObject(state, { methods: updateObject(state.methods, { loading: false, error: null, ...action }) });
const methodsFail = (state, action) => updateObject(state, { methods: updateObject(state.methods, { loading: false, ...action }) });



const restaurantsReset = (state) => updateObject(state, { restaurants: initialState.restaurants });
const restaurantsStart = (state) => updateObject(state, { restaurants: updateObject(state.restaurants, { loading: true, message: null }) });
const restaurantsSuccess = (state, action) => updateObject(state, { restaurants: updateObject(state.restaurants, { loading: false, error: null, ...action }) });
const restaurantsFail = (state, action) => updateObject(state, { restaurants: updateObject(state.restaurants, { loading: false, ...action }) });

const categoriesReset = (state) => updateObject(state, { categories: initialState.categories });
const categoriesStart = (state) => updateObject(state, { categories: updateObject(state.categories, { loading: true, message: null }) });
const categoriesSuccess = (state, action) => updateObject(state, { categories: updateObject(state.categories, { loading: false, error: null, ...action }) });
const categoriesFail = (state, action) => updateObject(state, { categories: updateObject(state.categories, { loading: false, ...action }) });

const mealsReset = (state) => updateObject(state, { meals: initialState.meals });
const mealsStart = (state) => updateObject(state, { meals: updateObject(state.meals, { loading: true, message: null }) });
const mealsSuccess = (state, action) => updateObject(state, { meals: updateObject(state.meals, { loading: false, error: null, ...action }) });
const mealsFail = (state, action) => updateObject(state, { meals: updateObject(state.meals, { loading: false, ...action }) });

const addonsReset = (state) => updateObject(state, { addons: initialState.addons });
const addonsStart = (state) => updateObject(state, { addons: updateObject(state.addons, { loading: true, message: null }) });
const addonsSuccess = (state, action) => updateObject(state, { addons: updateObject(state.addons, { loading: false, error: null, ...action }) });
const addonsFail = (state, action) => updateObject(state, { addons: updateObject(state.addons, { loading: false, ...action }) });

const commentsReset = (state) => updateObject(state, { comments: initialState.comments });
const commentsStart = (state) => updateObject(state, { comments: updateObject(state.comments, { loading: true, message: null }) });
const commentsSuccess = (state, action) => updateObject(state, { comments: updateObject(state.comments, { loading: false, error: null, ...action }) });
const commentsFail = (state, action) => updateObject(state, { comments: updateObject(state.comments, { loading: false, ...action }) });

const plansReset = (state) => updateObject(state, { plans: initialState.plans });
const plansStart = (state) => updateObject(state, { plans: updateObject(state.plans, { loading: true, message: null }) });
const plansSuccess = (state, action) => updateObject(state, { plans: updateObject(state.plans, { loading: false, error: null, ...action }) });
const plansFail = (state, action) => updateObject(state, { plans: updateObject(state.plans, { loading: false, ...action }) });

const rechargesReset = (state) => updateObject(state, { recharges: initialState.recharges });
const rechargesStart = (state) => updateObject(state, { recharges: updateObject(state.recharges, { loading: true, message: null }) });
const rechargesSuccess = (state, action) => updateObject(state, { recharges: updateObject(state.recharges, { loading: false, error: null, ...action }) });
const rechargesFail = (state, action) => updateObject(state, { recharges: updateObject(state.recharges, { loading: false, ...action }) });

const settingsReset = (state) => updateObject(state, { settings: initialState.settings });
const settingsStart = (state) => updateObject(state, { settings: updateObject(state.settings, { loading: true, message: null }) });
const settingsSuccess = (state, action) => updateObject(state, { settings: updateObject(state.settings, { loading: false, error: null, ...action }) });
const settingsFail = (state, action) => updateObject(state, { settings: updateObject(state.settings, { loading: false, ...action }) });






export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADMINS_RESET: return adminsReset(state, action);
        case actionTypes.ADMINS_START: return adminsStart(state, action);
        case actionTypes.ADMINS_SUCCESS: return adminsSuccess(state, action);
        case actionTypes.ADMINS_FAIL: return adminsFail(state, action);

        case actionTypes.CMS_RESET: return cmsReset(state, action);
        case actionTypes.CMS_START: return cmsStart(state, action);
        case actionTypes.CMS_SUCCESS: return cmsSuccess(state, action);
        case actionTypes.CMS_FAIL: return cmsFail(state, action);

        case actionTypes.NOTIFICATIONS_RESET: return notificationsReset(state, action);
        case actionTypes.NOTIFICATIONS_START: return notificationsStart(state, action);
        case actionTypes.NOTIFICATIONS_SUCCESS: return notificationsSuccess(state, action);
        case actionTypes.NOTIFICATIONS_FAIL: return notificationsFail(state, action);

        case actionTypes.DASHBOARD_RESET: return dashboardReset(state, action);
        case actionTypes.DASHBOARD_START: return dashboardStart(state, action);
        case actionTypes.DASHBOARD_SUCCESS: return dashboardSuccess(state, action);
        case actionTypes.DASHBOARD_FAIL: return dashboardFail(state, action);

        case actionTypes.FEATURES_RESET: return featuresReset(state, action);
        case actionTypes.FEATURES_START: return featuresStart(state, action);
        case actionTypes.FEATURES_SUCCESS: return featuresSuccess(state, action);
        case actionTypes.FEATURES_FAIL: return featuresFail(state, action);

        case actionTypes.LANGUAGES_RESET: return languagesReset(state, action);
        case actionTypes.LANGUAGES_START: return languagesStart(state, action);
        case actionTypes.LANGUAGES_SUCCESS: return languagesSuccess(state, action);
        case actionTypes.LANGUAGES_FAIL: return languagesFail(state, action);

        case actionTypes.ROLES_RESET: return rolesReset(state, action);
        case actionTypes.ROLES_START: return rolesStart(state, action);
        case actionTypes.ROLES_SUCCESS: return rolesSuccess(state, action);
        case actionTypes.ROLES_FAIL: return rolesFail(state, action);

        case actionTypes.USERS_RESET: return usersReset(state, action);
        case actionTypes.USERS_START: return usersStart(state, action);
        case actionTypes.USERS_SUCCESS: return usersSuccess(state, action);
        case actionTypes.USERS_FAIL: return usersFail(state, action);

        case actionTypes.METHODS_RESET: return methodsReset(state, action);
        case actionTypes.METHODS_START: return methodsStart(state, action);
        case actionTypes.METHODS_SUCCESS: return methodsSuccess(state, action);
        case actionTypes.METHODS_FAIL: return methodsFail(state, action);

        

        case actionTypes.RESTAURANTS_RESET: return restaurantsReset(state, action);
        case actionTypes.RESTAURANTS_START: return restaurantsStart(state, action);
        case actionTypes.RESTAURANTS_SUCCESS: return restaurantsSuccess(state, action);
        case actionTypes.RESTAURANTS_FAIL: return restaurantsFail(state, action);

        case actionTypes.CATEGORIES_RESET: return categoriesReset(state, action);
        case actionTypes.CATEGORIES_START: return categoriesStart(state, action);
        case actionTypes.CATEGORIES_SUCCESS: return categoriesSuccess(state, action);
        case actionTypes.CATEGORIES_FAIL: return categoriesFail(state, action);

        case actionTypes.MEALS_RESET: return mealsReset(state, action);
        case actionTypes.MEALS_START: return mealsStart(state, action);
        case actionTypes.MEALS_SUCCESS: return mealsSuccess(state, action);
        case actionTypes.MEALS_FAIL: return mealsFail(state, action);

        case actionTypes.ADDONS_RESET: return addonsReset(state, action);
        case actionTypes.ADDONS_START: return addonsStart(state, action);
        case actionTypes.ADDONS_SUCCESS: return addonsSuccess(state, action);
        case actionTypes.ADDONS_FAIL: return addonsFail(state, action);

        case actionTypes.COMMENTS_RESET: return commentsReset(state, action);
        case actionTypes.COMMENTS_START: return commentsStart(state, action);
        case actionTypes.COMMENTS_SUCCESS: return commentsSuccess(state, action);
        case actionTypes.COMMENTS_FAIL: return commentsFail(state, action);

        case actionTypes.PLANS_RESET: return plansReset(state, action);
        case actionTypes.PLANS_START: return plansStart(state, action);
        case actionTypes.PLANS_SUCCESS: return plansSuccess(state, action);
        case actionTypes.PLANS_FAIL: return plansFail(state, action);

        case actionTypes.RECHARGES_RESET: return rechargesReset(state, action);
        case actionTypes.RECHARGES_START: return rechargesStart(state, action);
        case actionTypes.RECHARGES_SUCCESS: return rechargesSuccess(state, action);
        case actionTypes.RECHARGES_FAIL: return rechargesFail(state, action);

        case actionTypes.SETTINGS_RESET: return settingsReset(state, action);
        case actionTypes.SETTINGS_START: return settingsStart(state, action);
        case actionTypes.SETTINGS_SUCCESS: return settingsSuccess(state, action);
        case actionTypes.SETTINGS_FAIL: return settingsFail(state, action);

        default: return state;
    }
};