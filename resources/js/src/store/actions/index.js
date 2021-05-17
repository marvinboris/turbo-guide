export {
    authUserLogin,
    authRestaurantLogin,
    authSignup,
    forgotPassword,
    resetPassword,
    clearSignup,
    authAdminLogin,
    authAdminVerify,
    resendCode,
    authLogout,
    setAuthRedirectPath,
    setHash,
    authCheckState,
} from './auth';

export {
    getContent,
    setLanguage,
} from './content';

export {
    addAddon,
    addMeal,
    getRestaurant as getRestaurantData,
    getRestaurantsMeal,
    resetRestaurants as resetFrontendRestaurants,
    subAddon,
    subMeal,
} from './frontend';

export {
    resetAdmins,
    getAdmins,
    getAdmin,
    postAdmins,
    patchAdmins,
    deleteAdmins,

    resetCms,
    getCms,
    postCms,
    patchCms,
    deleteCms,

    resetDashboard,
    getDashboard,

    resetFeatures,
    getFeatures,
    getFeature,
    postFeatures,
    patchFeatures,
    deleteFeatures,



    resetLanguages,
    getLanguages,
    getLanguage,
    postLanguages,
    patchLanguages,
    deleteLanguages,

    resetRoles,
    getRoles,
    getRole,
    getRolesInfo,
    postRoles,
    patchRoles,
    deleteRoles,

    resetUsers,
    getUsers,
    getUser,
    getUsersInfo,
    postUsers,
    patchUsers,
    deleteUsers,



    resetRestaurants,
    getRestaurants,
    getRestaurant,
    postRestaurants,
    patchRestaurants,
    deleteRestaurants,

    resetCategories,
    getCategories,
    getCategoriesInfo,
    getCategory,
    postCategories,
    patchCategories,
    deleteCategories,
    
    resetMeals,
    getMeals,
    getMealsInfo,
    getMeal,
    postMeals,
    patchMeals,
    deleteMeals,
    
    resetAddons,
    getAddons,
    getAddonsInfo,
    getAddon,
    postAddons,
    patchAddons,
    deleteAddons,

    resetComments,
    getComments,
    getCommentsInfo,
    getComment,
    postComments,
    patchComments,
    deleteComments,

    resetSettings,
    accountSettings,
    translatableSettings,
    cmsSettings,
    languageSettings,
    getSettings,
    restaurantSettings,
} from './backend';