import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import SideDrawer from '../../../../components/Backend/Navigation/SideDrawer/Restaurant/SideDrawer';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';

import { authLogout } from '../../../../store/actions';
import { updateObject } from '../../../../shared/utility';

import './Layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

class Layout extends Component {
    state = {
        isOpen: false,

        selectedItem: '',

        notifications: [],
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.auth.data.notifications && !prevState.notifications) {
            const { notifications } = nextProps.auth.data;
            return updateObject(prevState, { notifications });
        }
        return prevState;
    }

    logoutHandler = () => {
        const { onAuthLogout } = this.props;
        onAuthLogout();
    }

    toggle = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }

    selectItem = item => this.setState({ selectedItem: item });

    render() {
        const { isOpen, selectedItem } = this.state;
        const {
            auth: { loading, data, role },
            content: { cms },
            children,
            dark = false
        } = this.props;
        let redirect, footerContent;

        if (!data.name) redirect = <Redirect to="/restaurant/settings" />;

        const {
            global: { app_name, company_logo },
            pages: { backend: { footer: { copyright, all_rights } }, components: { list: { search } } }
        } = cms;

        footerContent = <>
            {copyright} {new Date().getFullYear()} <span className={`text-500 text-${dark ? "orange" : "orange"}`}>{app_name}</span>. {all_rights} <img src={company_logo} style={{ height: 47 }} />.
        </>;

        const isAuthenticated = role !== undefined;

        return <div className="Layout text-left text-secondary">
            {redirect}
            {isAuthenticated && <SideDrawer data={data} isOpen={isOpen} toggle={this.toggle} selectItem={this.selectItem} logoutHandler={this.logoutHandler} selectedItem={selectedItem} cms={cms} />}

            <main className={`bg-${dark ? 'darkblue' : 'white'} position-relative min-vh-100 pb-5`}>
                <div style={{ height: 90 }} className="d-flex align-items-center px-5 border-bottom border-light sticky-top bg-white">
                    <div className="text-orange text-24 d-md-none mr-3">
                        <FontAwesomeIcon icon={faBars} onClick={this.toggle} style={{ cursor: 'pointer' }} />
                    </div>

                    <div className="mr-3 text-24 text-light"><FontAwesomeIcon icon={faSearch} /></div>

                    <div className="flex-fill">
                        <input type="search" name="search" className="border-0 text-poppins border-transparent p-0 m-0 d-block text-18 w-100" style={{ outline: 'none' }} placeholder={search} />
                    </div>
                </div>

                <div className="mb-5 pb-5 mt-4 pt-3 px-5">
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
    onAuthLogout: () => dispatch(authLogout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));