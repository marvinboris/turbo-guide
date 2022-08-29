import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { init } from 'aos';

import ErrorBoundary from './hoc/ErrorBoundary';

import Loading from './components/UI/Preloaders/Loading';

import AuthUser from './containers/Auth/User/Layout';
import AuthAdmin from './containers/Auth/Admin/Layout';
import AuthRestaurant from './containers/Auth/Restaurant/Layout';
import Frontend from './containers/Frontend/Layout';
import FrontendRestaurants from './containers/Frontend/Restaurants/Layout';
import FrontendRestaurantsOrder from './containers/Frontend/Restaurants/Pages/Order/Layout';
import Backend from './containers/Backend/Layout';
import BackendRestaurant from './containers/Backend/Restaurant/Layout';
import BackendUserRestaurantsEdit from './containers/Backend/User/Restaurants/Edit/Layout';

import Spinner from './components/UI/Spinner';

import * as actions from './store/actions';

import 'aos/dist/aos.css';

// Restaurant routes
const asyncRestaurantCategories = lazy(() => import('./containers/Backend/Restaurant/Categories'));
const asyncRestaurantCategoriesAdd = lazy(() => import('./containers/Backend/Restaurant/Categories/Add'));
const asyncRestaurantCategoriesEdit = lazy(() => import('./containers/Backend/Restaurant/Categories/Edit'));

const asyncRestaurantMeals = lazy(() => import('./containers/Backend/Restaurant/Meals'));
const asyncRestaurantMealsAdd = lazy(() => import('./containers/Backend/Restaurant/Meals/Add'));
const asyncRestaurantMealsEdit = lazy(() => import('./containers/Backend/Restaurant/Meals/Edit'));

const asyncRestaurantAddons = lazy(() => import('./containers/Backend/Restaurant/Addons'));
const asyncRestaurantAddonsAdd = lazy(() => import('./containers/Backend/Restaurant/Addons/Add'));
const asyncRestaurantAddonsEdit = lazy(() => import('./containers/Backend/Restaurant/Addons/Edit'));

const asyncRestaurantComments = lazy(() => import('./containers/Backend/Restaurant/Comments'));

const asyncRestaurantPlans = lazy(() => import('./containers/Backend/Restaurant/Plans'));
const asyncRestaurantPlansPurchase = lazy(() => import('./containers/Backend/Restaurant/Plans/Purchase'));

const asyncRestaurantRecharges = lazy(() => import('./containers/Backend/Restaurant/Recharges'));

const asyncRestaurantSettings = lazy(() => import('./containers/Backend/Restaurant/Settings'));

const asyncRestaurantNotificationsShow = lazy(() => import('./containers/Backend/Restaurant/Notifications/Show'));
const asyncRestaurantNotifications = lazy(() => import('./containers/Backend/Restaurant/Notifications'));

const asyncRestaurantDashboard = lazy(() => import('./containers/Backend/Restaurant/Dashboard/Dashboard'));

// User routes
const asyncUserCmsGlobal = lazy(() => import('./containers/Backend/User/Cms/Global'));
const asyncUserCmsGeneral = lazy(() => import('./containers/Backend/User/Cms/General'));
const asyncUserCmsMessages = lazy(() => import('./containers/Backend/User/Cms/Messages'));
const asyncUserCmsComponents = lazy(() => import('./containers/Backend/User/Cms/Components'));
const asyncUserCmsAuth = lazy(() => import('./containers/Backend/User/Cms/Auth'));
const asyncUserCmsBackend = lazy(() => import('./containers/Backend/User/Cms/Backend'));
const asyncUserCmsFrontend = lazy(() => import('./containers/Backend/User/Cms/Frontend'));


const asyncUserDashboard = lazy(() => import('./containers/Backend/User/Dashboard/Dashboard'));


const asyncUserFeatures = lazy(() => import('./containers/Backend/User/Features'));
const asyncUserFeaturesAdd = lazy(() => import('./containers/Backend/User/Features/Add'));
const asyncUserFeaturesEdit = lazy(() => import('./containers/Backend/User/Features/Edit'));


const asyncUserLanguages = lazy(() => import('./containers/Backend/User/Languages'));
const asyncUserLanguagesAdd = lazy(() => import('./containers/Backend/User/Languages/Add'));
const asyncUserLanguagesEdit = lazy(() => import('./containers/Backend/User/Languages/Edit'));


const asyncUserRoles = lazy(() => import('./containers/Backend/User/Roles'));
const asyncUserRolesAdd = lazy(() => import('./containers/Backend/User/Roles/Add'));
const asyncUserRolesEdit = lazy(() => import('./containers/Backend/User/Roles/Edit'));


const asyncUserSettingsLanguage = lazy(() => import('./containers/Backend/User/Settings/Language'));


const asyncUserUsers = lazy(() => import('./containers/Backend/User/Users'));
const asyncUserUsersAdd = lazy(() => import('./containers/Backend/User/Users/Add'));
const asyncUserUsersEdit = lazy(() => import('./containers/Backend/User/Users/Edit'));


const asyncUserMethods = lazy(() => import('./containers/Backend/User/Methods'));
const asyncUserMethodsAdd = lazy(() => import('./containers/Backend/User/Methods/Add'));
const asyncUserMethodsEdit = lazy(() => import('./containers/Backend/User/Methods/Edit'));


const asyncUserRecharges = lazy(() => import('./containers/Backend/User/Recharges'));
const asyncUserRechargesAdd = lazy(() => import('./containers/Backend/User/Recharges/Add'));


const asyncUserPlans = lazy(() => import('./containers/Backend/User/Plans'));
const asyncUserPlansAdd = lazy(() => import('./containers/Backend/User/Plans/Add'));
const asyncUserPlansBought = lazy(() => import('./containers/Backend/User/Plans/Bought'));


const asyncUserRestaurants = lazy(() => import('./containers/Backend/User/Restaurants'));
const asyncUserRestaurantsAdd = lazy(() => import('./containers/Backend/User/Restaurants/Add'));
const asyncUserRestaurantsEditCategories = lazy(() => import('./containers/Backend/User/Restaurants/Edit/Categories'));
const asyncUserRestaurantsEditCategoriesAdd = lazy(() => import('./containers/Backend/User/Restaurants/Edit/Categories/Add'));
const asyncUserRestaurantsEditCategoriesEdit = lazy(() => import('./containers/Backend/User/Restaurants/Edit/Categories/Edit'));

const asyncUserRestaurantsEditMeals = lazy(() => import('./containers/Backend/User/Restaurants/Edit/Meals'));
const asyncUserRestaurantsEditMealsAdd = lazy(() => import('./containers/Backend/User/Restaurants/Edit/Meals/Add'));
const asyncUserRestaurantsEditMealsEdit = lazy(() => import('./containers/Backend/User/Restaurants/Edit/Meals/Edit'));

const asyncUserRestaurantsEditAddons = lazy(() => import('./containers/Backend/User/Restaurants/Edit/Addons'));
const asyncUserRestaurantsEditAddonsAdd = lazy(() => import('./containers/Backend/User/Restaurants/Edit/Addons/Add'));
const asyncUserRestaurantsEditAddonsEdit = lazy(() => import('./containers/Backend/User/Restaurants/Edit/Addons/Edit'));

const asyncUserRestaurantsEditComments = lazy(() => import('./containers/Backend/User/Restaurants/Edit/Comments'));

const asyncUserRestaurantsEditPlans = lazy(() => import('./containers/Backend/User/Restaurants/Edit/Plans'));
const asyncUserRestaurantsEditPlansPurchase = lazy(() => import('./containers/Backend/User/Restaurants/Edit/Plans/Purchase'));

const asyncUserRestaurantsEditRecharges = lazy(() => import('./containers/Backend/User/Restaurants/Edit/Recharges'));

const asyncUserRestaurantsEditSettings = lazy(() => import('./containers/Backend/User/Restaurants/Edit/Settings'));

const asyncUserRestaurantsEditDashboard = lazy(() => import('./containers/Backend/User/Restaurants/Edit/Dashboard/Dashboard'));

// Admin routes
const asyncAdminAdmins = lazy(() => import('./containers/Backend/Admin/Admins'));
const asyncAdminAdminsAdd = lazy(() => import('./containers/Backend/Admin/Admins/Add'));
const asyncAdminAdminsEdit = lazy(() => import('./containers/Backend/Admin/Admins/Edit'));


const asyncAdminCmsGlobal = lazy(() => import('./containers/Backend/Admin/Cms/Global'));
const asyncAdminCmsGeneral = lazy(() => import('./containers/Backend/Admin/Cms/General'));
const asyncAdminCmsMessages = lazy(() => import('./containers/Backend/Admin/Cms/Messages'));
const asyncAdminCmsComponents = lazy(() => import('./containers/Backend/Admin/Cms/Components'));
const asyncAdminCmsAuth = lazy(() => import('./containers/Backend/Admin/Cms/Auth'));
const asyncAdminCmsBackend = lazy(() => import('./containers/Backend/Admin/Cms/Backend'));


const asyncAdminDashboard = lazy(() => import('./containers/Backend/Admin/Dashboard/Dashboard'));


const asyncAdminFeatures = lazy(() => import('./containers/Backend/Admin/Features'));
const asyncAdminFeaturesAdd = lazy(() => import('./containers/Backend/Admin/Features/Add'));
const asyncAdminFeaturesEdit = lazy(() => import('./containers/Backend/Admin/Features/Edit'));


const asyncAdminLanguages = lazy(() => import('./containers/Backend/Admin/Languages'));
const asyncAdminLanguagesAdd = lazy(() => import('./containers/Backend/Admin/Languages/Add'));
const asyncAdminLanguagesEdit = lazy(() => import('./containers/Backend/Admin/Languages/Edit'));


const asyncAdminRoles = lazy(() => import('./containers/Backend/Admin/Roles'));
const asyncAdminRolesAdd = lazy(() => import('./containers/Backend/Admin/Roles/Add'));
const asyncAdminRolesEdit = lazy(() => import('./containers/Backend/Admin/Roles/Edit'));


const asyncAdminSettingsLanguage = lazy(() => import('./containers/Backend/Admin/Settings/Language'));


const asyncAdminUsers = lazy(() => import('./containers/Backend/Admin/Users'));
const asyncAdminUsersAdd = lazy(() => import('./containers/Backend/Admin/Users/Add'));
const asyncAdminUsersEdit = lazy(() => import('./containers/Backend/Admin/Users/Edit'));


// Auth routes
const asyncRestaurantLogin = lazy(() => import('./containers/Auth/Restaurant/Login/Login'));
const asyncRestaurantRegister = lazy(() => import('./containers/Auth/Restaurant/Register/Register'));
const asyncRestaurantSuccess = lazy(() => import('./containers/Auth/Restaurant/Success'));


const asyncUserLogin = lazy(() => import('./containers/Auth/User/Login/Login'));


const asyncAdminLogin = lazy(() => import('./containers/Auth/Admin/Login/Login'));
const asyncAdminVerify = lazy(() => import('./containers/Auth/Admin/Verify/Verify'));


// Frontend routes
const asyncRestaurantsOrderTracking = lazy(() => import('./containers/Frontend/Restaurants/Pages/Order/Tracking'));
const asyncRestaurantsOrderSuccess = lazy(() => import('./containers/Frontend/Restaurants/Pages/Order/Success'));

const asyncRestaurantsPayment = lazy(() => import('./containers/Frontend/Restaurants/Pages/Payment'));
const asyncRestaurantsCart = lazy(() => import('./containers/Frontend/Restaurants/Pages/Cart'));
const asyncRestaurantsMeal = lazy(() => import('./containers/Frontend/Restaurants/Pages/Meal'));
const asyncRestaurantsHome = lazy(() => import('./containers/Frontend/Restaurants/Home'));

const asyncHome = lazy(() => import('./containers/Frontend/Home'));

class App extends Component {
    componentDidMount() {
        const { onTryAuthSignup, onGetContent } = this.props;
        onTryAuthSignup();
        onGetContent();
        init();
    }

    render() {
        const { content: { cms, currencies, countries }, auth: { role }, location: { pathname } } = this.props;
        const isAuthenticated = localStorage.getItem('token') !== null;

        const frontendRoutes = <Switch>
            <Route path="/restaurants/:slug">
                <FrontendRestaurants>
                    <Route path="/restaurants/:slug/order">
                        <FrontendRestaurantsOrder>
                            <Route path="/restaurants/:slug/order/tracking/:md5" component={asyncRestaurantsOrderTracking} />
                            <Route path="/restaurants/:slug/order/success" component={asyncRestaurantsOrderSuccess} />
                        </FrontendRestaurantsOrder>
                    </Route>
                    <Route path="/restaurants/:slug/payment" component={asyncRestaurantsPayment} />
                    <Route path="/restaurants/:slug/cart" component={asyncRestaurantsCart} />
                    <Route path="/restaurants/:slug/meals/:id" component={asyncRestaurantsMeal} />
                    <Route path="/restaurants/:slug" exact component={asyncRestaurantsHome} />
                </FrontendRestaurants>
            </Route>

            <Route path="/">
                <Frontend>
                    <Switch>
                        <Route path="/" component={asyncHome} />
                    </Switch>
                </Frontend>
            </Route>
        </Switch>;

        let routes = <Switch>
            <Route path="/auth/admin">
                <AuthAdmin>
                    <Switch>
                        <Route path="/auth/admin/verify" component={asyncAdminVerify} />
                        <Route path="/auth/admin/login" component={asyncAdminLogin} />
                    </Switch>
                </AuthAdmin>
            </Route>
            <Redirect path="/admin" to="/auth/admin/login" />

            <Route path="/auth/user">
                <AuthUser>
                    <Switch>
                        <Route path="/auth/user/login" component={asyncUserLogin} />
                    </Switch>
                </AuthUser>
            </Route>
            <Redirect path="/user" to="/auth/user/login" />

            <Route path="/auth">
                <AuthRestaurant>
                    <Switch>
                        <Route path="/auth/register/success" component={asyncRestaurantSuccess} />
                        {/* <Route path="/auth/reset/:id/:code" component={Reset} /> */}
                        <Route path="/auth/register" component={asyncRestaurantRegister} />
                        <Route path="/auth/login" component={asyncRestaurantLogin} />
                    </Switch>
                </AuthRestaurant>
            </Route>
            <Redirect path="/restaurant" to="/auth/login" />
            <Redirect path="/auth" to="/auth/login" />

            {frontendRoutes}
        </Switch>;

        if (isAuthenticated) {
            routes = <Switch>
                <Route path="/restaurant">
                    <BackendRestaurant>
                        <Switch>
                            <Route path="/restaurant/categories/:id/edit" component={asyncRestaurantCategoriesEdit} />
                            <Route path="/restaurant/categories/add" component={asyncRestaurantCategoriesAdd} />
                            <Route path="/restaurant/categories" component={asyncRestaurantCategories} />

                            <Route path="/restaurant/meals/:id/edit" component={asyncRestaurantMealsEdit} />
                            <Route path="/restaurant/meals/add" component={asyncRestaurantMealsAdd} />
                            <Route path="/restaurant/meals" component={asyncRestaurantMeals} />

                            <Route path="/restaurant/addons/:id/edit" component={asyncRestaurantAddonsEdit} />
                            <Route path="/restaurant/addons/add" component={asyncRestaurantAddonsAdd} />
                            <Route path="/restaurant/addons" component={asyncRestaurantAddons} />

                            <Route path="/restaurant/settings" component={asyncRestaurantSettings} />

                            <Route path="/restaurant/comments" component={asyncRestaurantComments} />

                            <Route path="/restaurant/plans/purchase" component={asyncRestaurantPlansPurchase} />
                            <Route path="/restaurant/plans" component={asyncRestaurantPlans} />

                            <Route path="/restaurant/recharges" component={asyncRestaurantRecharges} />

                            <Route path="/restaurant/notifications/:id" component={asyncRestaurantNotificationsShow} />
                            <Route path="/restaurant/notifications" component={asyncRestaurantNotifications} />

                            <Route path="/restaurant/dashboard" component={asyncRestaurantDashboard} />
                        </Switch>
                    </BackendRestaurant>
                </Route>

                <Route path="/user">
                    <Switch>
                        <Route path="/user/restaurants/:restaurant/edit">
                            <BackendUserRestaurantsEdit>
                                <Switch>
                                    <Route path="/user/restaurants/:restaurant/edit/categories/:id/edit" component={asyncUserRestaurantsEditCategoriesEdit} />
                                    <Route path="/user/restaurants/:restaurant/edit/categories/add" component={asyncUserRestaurantsEditCategoriesAdd} />
                                    <Route path="/user/restaurants/:restaurant/edit/categories" component={asyncUserRestaurantsEditCategories} />

                                    <Route path="/user/restaurants/:restaurant/edit/meals/:id/edit" component={asyncUserRestaurantsEditMealsEdit} />
                                    <Route path="/user/restaurants/:restaurant/edit/meals/add" component={asyncUserRestaurantsEditMealsAdd} />
                                    <Route path="/user/restaurants/:restaurant/edit/meals" component={asyncUserRestaurantsEditMeals} />

                                    <Route path="/user/restaurants/:restaurant/edit/addons/:id/edit" component={asyncUserRestaurantsEditAddonsEdit} />
                                    <Route path="/user/restaurants/:restaurant/edit/addons/add" component={asyncUserRestaurantsEditAddonsAdd} />
                                    <Route path="/user/restaurants/:restaurant/edit/addons" component={asyncUserRestaurantsEditAddons} />

                                    <Route path="/user/restaurants/:restaurant/edit/settings" component={asyncUserRestaurantsEditSettings} />

                                    <Route path="/user/restaurants/:restaurant/edit/comments" component={asyncUserRestaurantsEditComments} />

                                    <Route path="/user/restaurants/:restaurant/edit/plans/purchase" component={asyncUserRestaurantsEditPlansPurchase} />
                                    <Route path="/user/restaurants/:restaurant/edit/plans" component={asyncUserRestaurantsEditPlans} />

                                    <Route path="/user/restaurants/:restaurant/edit/recharges" component={asyncUserRestaurantsEditRecharges} />

                                    <Route path="/user/restaurants/:restaurant/edit/dashboard" component={asyncUserRestaurantsEditDashboard} />
                                </Switch>
                            </BackendUserRestaurantsEdit>
                        </Route>

                        <Route path="/user">
                            <Backend>
                                <Switch>
                                    <Route path="/user/cms/global" component={asyncUserCmsGlobal} />
                                    <Route path="/user/cms/general" component={asyncUserCmsGeneral} />
                                    <Route path="/user/cms/messages" component={asyncUserCmsMessages} />
                                    <Route path="/user/cms/components" component={asyncUserCmsComponents} />
                                    <Route path="/user/cms/auth" component={asyncUserCmsAuth} />
                                    <Route path="/user/cms/backend" component={asyncUserCmsBackend} />
                                    <Route path="/user/cms/frontend" component={asyncUserCmsFrontend} />

                                    <Route path="/user/dashboard" component={asyncUserDashboard} />

                                    <Route path="/user/features/:id/edit" component={asyncUserFeaturesEdit} />
                                    <Route path="/user/features/add" component={asyncUserFeaturesAdd} />
                                    <Route path="/user/features" component={asyncUserFeatures} />

                                    <Route path="/user/languages/:id/edit" component={asyncUserLanguagesEdit} />
                                    <Route path="/user/languages/add" component={asyncUserLanguagesAdd} />
                                    <Route path="/user/languages" component={asyncUserLanguages} />

                                    <Route path="/user/roles/:id/edit" component={asyncUserRolesEdit} />
                                    <Route path="/user/roles/add" component={asyncUserRolesAdd} />
                                    <Route path="/user/roles" component={asyncUserRoles} />

                                    <Route path="/user/settings/language" component={asyncUserSettingsLanguage} />

                                    <Route path="/user/users/:id/edit" component={asyncUserUsersEdit} />
                                    <Route path="/user/users/add" component={asyncUserUsersAdd} />
                                    <Route path="/user/users" component={asyncUserUsers} />

                                    <Route path="/user/methods/:id/edit" component={asyncUserMethodsEdit} />
                                    <Route path="/user/methods/add" component={asyncUserMethodsAdd} />
                                    <Route path="/user/methods" component={asyncUserMethods} />

                                    <Route path="/user/recharges/add" component={asyncUserRechargesAdd} />
                                    <Route path="/user/recharges" component={asyncUserRecharges} />

                                    <Route path="/user/plans/bought" component={asyncUserPlansBought} />
                                    <Route path="/user/plans/add" component={asyncUserPlansAdd} />
                                    <Route path="/user/plans" component={asyncUserPlans} />


                                    <Route path="/user/restaurants/add" component={asyncUserRestaurantsAdd} />
                                    <Route path="/user/restaurants" exact component={asyncUserRestaurants} />
                                </Switch>
                            </Backend>
                        </Route>
                    </Switch>
                </Route>



                <Route path="/admin">
                    <Backend>
                        <Switch>
                            <Route path="/admin/admins/:id/edit" component={asyncAdminAdminsEdit} />
                            <Route path="/admin/admins/add" component={asyncAdminAdminsAdd} />
                            <Route path="/admin/admins" component={asyncAdminAdmins} />

                            <Route path="/admin/cms/global" component={asyncAdminCmsGlobal} />
                            <Route path="/admin/cms/general" component={asyncAdminCmsGeneral} />
                            <Route path="/admin/cms/messages" component={asyncAdminCmsMessages} />
                            <Route path="/admin/cms/components" component={asyncAdminCmsComponents} />
                            <Route path="/admin/cms/auth" component={asyncAdminCmsAuth} />
                            <Route path="/admin/cms/backend" component={asyncAdminCmsBackend} />

                            <Route path="/admin/dashboard" component={asyncAdminDashboard} />

                            <Route path="/admin/features/:id/edit" component={asyncAdminFeaturesEdit} />
                            <Route path="/admin/features/add" component={asyncAdminFeaturesAdd} />
                            <Route path="/admin/features" component={asyncAdminFeatures} />

                            <Route path="/admin/languages/:id/edit" component={asyncAdminLanguagesEdit} />
                            <Route path="/admin/languages/add" component={asyncAdminLanguagesAdd} />
                            <Route path="/admin/languages" component={asyncAdminLanguages} />

                            <Route path="/admin/roles/:id/edit" component={asyncAdminRolesEdit} />
                            <Route path="/admin/roles/add" component={asyncAdminRolesAdd} />
                            <Route path="/admin/roles" component={asyncAdminRoles} />

                            <Route path="/admin/settings/language" component={asyncAdminSettingsLanguage} />

                            <Route path="/admin/users/:id/edit" component={asyncAdminUsersEdit} />
                            <Route path="/admin/users/add" component={asyncAdminUsersAdd} />
                            <Route path="/admin/users" component={asyncAdminUsers} />
                        </Switch>
                    </Backend>
                </Route>

                <Redirect path="/dashboard" to={`/${role}/dashboard`} />
                <Redirect path="/auth" to={`/${role}/dashboard`} />

                {frontendRoutes}
            </Switch>;
        }

        routes = <ErrorBoundary>
            <Suspense fallback={<Loading waiting isAuthenticated={isAuthenticated && (pathname.includes('/user/') || pathname.includes('/admin/'))} />}>
                {routes}
            </Suspense>
        </ErrorBoundary>;

        const dataReady = cms !== undefined && currencies !== undefined && countries !== undefined && ((isAuthenticated && role !== undefined) || !isAuthenticated);

        return dataReady ? routes : <Spinner />;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onTryAuthSignup: () => dispatch(actions.authCheckState()),
    onGetContent: () => dispatch(actions.getContent()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
