import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

import Settings from './Settings';
import Notifications from './Notifications';
import Languages from './Languages';

import SideDrawer from '../../../../components/Backend/Navigation/SideDrawer/Restaurant/SideDrawer';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';

import { authLogout, setLanguage } from '../../../../store/actions';
import { updateObject } from '../../../../shared/utility';

import './Layout.css';

class Layout extends Component {
    state = {
        selectedItem: '',
        language: null,

        notifications: [],
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.auth.data.notifications && !prevState.notifications) {
            const { notifications } = nextProps.auth.data;
            return updateObject(prevState, { notifications });
        }
        return null;
    }

    componentDidMount() {
        this.setState({ language: this.props.content.languages.find(l => l.abbr === localStorage.getItem('lang')) });
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.content.cms) !== JSON.stringify(this.props.content.cms)) this.setState({ language: this.props.content.languages.find(l => l.abbr === localStorage.getItem('lang')) });
    }

    logoutHandler = () => {
        const { logout } = this.props;
        logout();
    }

    toggle = () => {
        const left = $('.Restaurant.SideDrawer').css('left');
        if (left === "0px") {
            $('.Restaurant.SideDrawer').animate({ left: '-100%' });
            $('.Restaurant.SideDrawer .backdrop').hide();
        }
        else {
            $('.Restaurant.SideDrawer').animate({ left: 0 });
            $('.Restaurant.SideDrawer .backdrop').show();
        }
    }

    setLanguage = id => {
        this.props.set(id);
    }

    selectItem = item => this.setState({ selectedItem: item });

    render() {
        const { selectedItem, language } = this.state;
        const {
            auth: { loading, data, role },
            content: { cms, languages },
            children,
            dark = false
        } = this.props;
        let redirect, footerContent;

        if (!data.name || data.languages.length === 0) redirect = <Redirect to="/restaurant/settings" />;

        const {
            global: { app_name, company_logo },
            pages: { backend: { header, sidebar: { menu }, footer: { copyright, all_rights } }, components: { list: { search } } }
        } = cms;

        footerContent = <>
            {copyright} {new Date().getFullYear()} <span className={`text-500 text-${dark ? "orange" : "orange"}`}>{app_name}</span>. {all_rights} <img src={company_logo} style={{ height: 47 }} />.
        </>;

        const isAuthenticated = role !== undefined;

        return <div className="Layout text-left text-secondary">
            {redirect}
            {isAuthenticated && <SideDrawer data={data} toggle={this.toggle} selectItem={this.selectItem} logoutHandler={this.logoutHandler} selectedItem={selectedItem} cms={cms} />}

            <main className={`bg-${dark ? 'darkblue' : 'white'} position-relative min-vh-100 pb-4 pb-sm-5`}>
                <div style={{ height: 90 }} className="d-flex align-items-center px-3 px-lg-5 border-bottom border-light sticky-top bg-white">
                    <div className="text-orange text-30 d-md-none mr-3">
                        <FontAwesomeIcon icon={faBars} onClick={this.toggle} cursor="pointer" />
                    </div>

                    <div className="mr-3 text-24 text-light"><FontAwesomeIcon icon={faSearch} /></div>

                    <div className="flex-fill mr-3">
                        <input type="search" name="search" className="border-0 text-poppins border-transparent p-0 m-0 d-block text-18 w-100" style={{ outline: 'none' }} placeholder={search} />
                    </div>

                    <div className="mr-3 text-24 text-orange">
                        <Languages languages={languages} set={this.setLanguage} language={language} />
                    </div>

                    <div className="mr-3 text-24 text-orange">
                        <Notifications cms={{ header }} notifications={data.notifications} />
                    </div>

                    <div className="text-24 text-secondary">
                        <Settings cms={{ header, menu }} logoutHandler={this.logoutHandler} />
                    </div>
                </div>

                <div className="main mb-4 mb-sm-5 pb-4 pb-sm-5 mt-3 mt-sm-4 pt-3 px-3 px-lg-5">
                    {loading ? <div className="h-100 d-flex justify-content-center align-items-center"><CustomSpinner /></div> : children}
                </div>

                <footer className={`position-absolute d-none d-sm-block w-100 py-3 px-4 bg-${dark ? "grayblue" : "soft"}`} style={{ bottom: 0 }}>
                    {footerContent}
                </footer>
            </main>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(authLogout()),
    set: id => dispatch(setLanguage(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));