import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { init } from 'aos';

import Layout from './hoc/Layout/Layout';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import FrontendMeals from './containers/Frontend/Restaurants/Meals/Layout';

import * as actions from './store/actions';

import 'aos/dist/aos.css';

// Restaurant routes
const asyncRestaurantCategories = asyncComponent(() => import('./containers/Backend/Restaurant/Categories'));
const asyncRestaurantCategoriesAdd = asyncComponent(() => import('./containers/Backend/Restaurant/Categories/Add'));
const asyncRestaurantCategoriesEdit = asyncComponent(() => import('./containers/Backend/Restaurant/Categories/Edit'));

const asyncRestaurantMeals = asyncComponent(() => import('./containers/Backend/Restaurant/Meals'));
const asyncRestaurantMealsAdd = asyncComponent(() => import('./containers/Backend/Restaurant/Meals/Add'));
const asyncRestaurantMealsEdit = asyncComponent(() => import('./containers/Backend/Restaurant/Meals/Edit'));

const asyncRestaurantAddons = asyncComponent(() => import('./containers/Backend/Restaurant/Addons'));
const asyncRestaurantAddonsAdd = asyncComponent(() => import('./containers/Backend/Restaurant/Addons/Add'));
const asyncRestaurantAddonsEdit = asyncComponent(() => import('./containers/Backend/Restaurant/Addons/Edit'));

const asyncRestaurantSettings = asyncComponent(() => import('./containers/Backend/Restaurant/Settings'));

const asyncRestaurantDashboard = asyncComponent(() => import('./containers/Backend/Restaurant/Dashboard/Dashboard'));

// User routes
const asyncUserCmsGlobal = asyncComponent(() => import('./containers/Backend/User/Cms/Global'));
const asyncUserCmsGeneral = asyncComponent(() => import('./containers/Backend/User/Cms/General'));
const asyncUserCmsMessages = asyncComponent(() => import('./containers/Backend/User/Cms/Messages'));
const asyncUserCmsComponents = asyncComponent(() => import('./containers/Backend/User/Cms/Components'));
const asyncUserCmsAuth = asyncComponent(() => import('./containers/Backend/User/Cms/Auth'));
const asyncUserCmsBackend = asyncComponent(() => import('./containers/Backend/User/Cms/Backend'));

const asyncUserDashboard = asyncComponent(() => import('./containers/Backend/User/Dashboard/Dashboard'));

const asyncUserFeatures = asyncComponent(() => import('./containers/Backend/User/Features'));
const asyncUserFeaturesAdd = asyncComponent(() => import('./containers/Backend/User/Features/Add'));
const asyncUserFeaturesEdit = asyncComponent(() => import('./containers/Backend/User/Features/Edit'));

const asyncUserLanguages = asyncComponent(() => import('./containers/Backend/User/Languages'));
const asyncUserLanguagesAdd = asyncComponent(() => import('./containers/Backend/User/Languages/Add'));
const asyncUserLanguagesEdit = asyncComponent(() => import('./containers/Backend/User/Languages/Edit'));

const asyncUserRoles = asyncComponent(() => import('./containers/Backend/User/Roles'));
const asyncUserRolesAdd = asyncComponent(() => import('./containers/Backend/User/Roles/Add'));
const asyncUserRolesEdit = asyncComponent(() => import('./containers/Backend/User/Roles/Edit'));

const asyncUserSettingsLanguage = asyncComponent(() => import('./containers/Backend/User/Settings/Language'));

const asyncUserUsers = asyncComponent(() => import('./containers/Backend/User/Users'));
const asyncUserUsersAdd = asyncComponent(() => import('./containers/Backend/User/Users/Add'));
const asyncUserUsersEdit = asyncComponent(() => import('./containers/Backend/User/Users/Edit'));

// Admin routes
const asyncAdminAdmins = asyncComponent(() => import('./containers/Backend/Admin/Admins'));
const asyncAdminAdminsAdd = asyncComponent(() => import('./containers/Backend/Admin/Admins/Add'));
const asyncAdminAdminsEdit = asyncComponent(() => import('./containers/Backend/Admin/Admins/Edit'));

const asyncAdminCmsGlobal = asyncComponent(() => import('./containers/Backend/Admin/Cms/Global'));
const asyncAdminCmsGeneral = asyncComponent(() => import('./containers/Backend/Admin/Cms/General'));
const asyncAdminCmsMessages = asyncComponent(() => import('./containers/Backend/Admin/Cms/Messages'));
const asyncAdminCmsComponents = asyncComponent(() => import('./containers/Backend/Admin/Cms/Components'));
const asyncAdminCmsAuth = asyncComponent(() => import('./containers/Backend/Admin/Cms/Auth'));
const asyncAdminCmsBackend = asyncComponent(() => import('./containers/Backend/Admin/Cms/Backend'));

const asyncAdminDashboard = asyncComponent(() => import('./containers/Backend/Admin/Dashboard/Dashboard'));

const asyncAdminFeatures = asyncComponent(() => import('./containers/Backend/Admin/Features'));
const asyncAdminFeaturesAdd = asyncComponent(() => import('./containers/Backend/Admin/Features/Add'));
const asyncAdminFeaturesEdit = asyncComponent(() => import('./containers/Backend/Admin/Features/Edit'));

const asyncAdminLanguages = asyncComponent(() => import('./containers/Backend/Admin/Languages'));
const asyncAdminLanguagesAdd = asyncComponent(() => import('./containers/Backend/Admin/Languages/Add'));
const asyncAdminLanguagesEdit = asyncComponent(() => import('./containers/Backend/Admin/Languages/Edit'));

const asyncAdminRoles = asyncComponent(() => import('./containers/Backend/Admin/Roles'));
const asyncAdminRolesAdd = asyncComponent(() => import('./containers/Backend/Admin/Roles/Add'));
const asyncAdminRolesEdit = asyncComponent(() => import('./containers/Backend/Admin/Roles/Edit'));

const asyncAdminSettingsLanguage = asyncComponent(() => import('./containers/Backend/Admin/Settings/Language'));

const asyncAdminUsers = asyncComponent(() => import('./containers/Backend/Admin/Users'));
const asyncAdminUsersAdd = asyncComponent(() => import('./containers/Backend/Admin/Users/Add'));
const asyncAdminUsersEdit = asyncComponent(() => import('./containers/Backend/Admin/Users/Edit'));

// Auth routes
const asyncRestaurantLogin = asyncComponent(() => import('./containers/Auth/Restaurant/Login/Login'));
const asyncRestaurantRegister = asyncComponent(() => import('./containers/Auth/Restaurant/Register/Register'));
const asyncRestaurantSuccess = asyncComponent(() => import('./containers/Auth/Restaurant/Success'));

const asyncUserLogin = asyncComponent(() => import('./containers/Auth/User/Login/Login'));

const asyncAdminLogin = asyncComponent(() => import('./containers/Auth/Admin/Login/Login'));
const asyncAdminVerify = asyncComponent(() => import('./containers/Auth/Admin/Verify/Verify'));

// Frontend routes
const asyncRestaurantsMealsAddons = asyncComponent(() => import('./containers/Frontend/Restaurants/Meals/Addons'));
const asyncRestaurantsMealsDescription = asyncComponent(() => import('./containers/Frontend/Restaurants/Meals/Description'));
const asyncRestaurantsMealsComments = asyncComponent(() => import('./containers/Frontend/Restaurants/Meals/Comments'));

const asyncRestaurantsHome = asyncComponent(() => import('./containers/Frontend/Restaurants/Home'));

class App extends Component {
    componentDidMount() {
        const { onTryAuthSignup, onGetContent } = this.props;
        onTryAuthSignup();
        onGetContent();
        init();
    }

    render() {
        const { content: { cms }, auth: { role } } = this.props;
        const isAuthenticated = localStorage.getItem('token') !== null;

        let routes = (
            <Switch>
                <Route path="/auth/admin/verify" component={asyncAdminVerify} />
                <Route path="/auth/admin/login" component={asyncAdminLogin} />
                <Redirect path="/admin" to="/auth/admin/login" />

                <Route path="/auth/user/login" component={asyncUserLogin} />
                <Redirect path="/user" to="/auth/user/login" />

                <Route path="/auth/register/success" component={asyncRestaurantSuccess} />
                {/* <Route path="/auth/reset/:id/:code" component={Reset} /> */}
                <Route path="/auth/register" component={asyncRestaurantRegister} />
                <Route path="/auth/login" component={asyncRestaurantLogin} />
                <Redirect path="/restaurant" to="/auth/login" />
                <Redirect path="/auth" to="/auth/login" />

                <Route path="/restaurants/:md5/meals/:id">
                    <FrontendMeals>
                        <Switch>
                            <Route path="/restaurants/:md5/meals/:id/addons" component={asyncRestaurantsMealsAddons} />
                            <Route path="/restaurants/:md5/meals/:id/description" component={asyncRestaurantsMealsDescription} />
                            <Route path="/restaurants/:md5/meals/:id/comments" component={asyncRestaurantsMealsComments} />
                        </Switch>
                    </FrontendMeals>
                </Route>
                <Route path="/restaurants/:md5" component={asyncRestaurantsHome} />

                <Redirect path="/" to="/auth" />
            </Switch>
        );

        if (isAuthenticated) {
            routes = (
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

                    <Route path="/restaurant/dashboard" component={asyncRestaurantDashboard} />



                    <Route path="/user/cms/global" component={asyncUserCmsGlobal} />
                    <Route path="/user/cms/general" component={asyncUserCmsGeneral} />
                    <Route path="/user/cms/messages" component={asyncUserCmsMessages} />
                    <Route path="/user/cms/components" component={asyncUserCmsComponents} />
                    <Route path="/user/cms/auth" component={asyncUserCmsAuth} />
                    <Route path="/user/cms/backend" component={asyncUserCmsBackend} />

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

                    <Redirect path="/dashboard" to={`/${role}/dashboard`} />
                    <Redirect path="/auth" to={`/${role}/dashboard`} />

                    <Route path="/restaurants/:md5/meals/:id">
                        <FrontendMeals>
                            <Switch>
                                <Route path="/restaurants/:md5/meals/:id/addons" component={asyncRestaurantsMealsAddons} />
                                <Route path="/restaurants/:md5/meals/:id/description" component={asyncRestaurantsMealsDescription} />
                                <Route path="/restaurants/:md5/meals/:id/comments" component={asyncRestaurantsMealsComments} />
                            </Switch>
                        </FrontendMeals>
                    </Route>
                    <Route path="/restaurants/:md5" component={asyncRestaurantsHome} />

                    <Redirect path="/" to="/auth" />
                </Switch>
            );
        }

        const dataReady = cms !== undefined && ((isAuthenticated && role !== undefined) || !isAuthenticated);

        return dataReady && <Layout>
            {routes}
        </Layout>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onTryAuthSignup: () => dispatch(actions.authCheckState()),
    onGetContent: () => dispatch(actions.getContent()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
