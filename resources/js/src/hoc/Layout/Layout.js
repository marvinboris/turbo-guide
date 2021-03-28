import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import Backend from '../../containers/Backend/Layout';
import BackendRestaurant from '../../containers/Backend/Restaurant/Layout';
import Frontend from '../../containers/Frontend/Layout';
import AuthRestaurant from '../../containers/Auth/Restaurant/Layout';
import AuthUser from '../../containers/Auth/User/Layout';
import AuthAdmin from '../../containers/Auth/Admin/Layout';

import * as actions from '../../store/actions';

import './Layout.css';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState(prevState => ({
            showSideDrawer: !prevState.showSideDrawer
        }));
    }

    logoutHandler = () => {
        const { onAuthLogout } = this.props;
        onAuthLogout();
    }

    render() {
        const storedToken = localStorage.getItem('token');
        const { children, auth: { data } } = this.props;

        if ((data && storedToken) || !storedToken) {
            $('#guard').fadeOut(3000);
            setTimeout(() => {
                $('#guard').remove();
            }, 2800);
        }

        const url = location.pathname;

        let content = null;
        if (url.includes('auth/user')) content = <AuthUser>{children}</AuthUser>;
        else if (url.includes('auth/admin')) content = <AuthAdmin>{children}</AuthAdmin>;
        else if (url.includes('/auth')) content = <AuthRestaurant>{children}</AuthRestaurant>;
        else if (url.includes('/restaurant/')) content = <BackendRestaurant>{children}</BackendRestaurant>;
        else if (url.includes('/user/') || url.includes('/admin/')) content = <Backend>{children}</Backend>;
        else if (url.includes('/restaurants/')) content = <Frontend sideDrawerToggleHandler={this.sideDrawerToggleHandler}>{children}</Frontend>;
        else content = children;

        return content;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuthLogout: () => dispatch(actions.authLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);