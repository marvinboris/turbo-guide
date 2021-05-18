import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClock, faSearch } from '@fortawesome/free-solid-svg-icons';

import Settings from './Settings';
import Notifications from './Notifications';
import Languages from './Languages';

import SideDrawer from '../../../components/Backend/Navigation/SideDrawer/SideDrawer';
import CustomSpinner from '../../../components/UI/CustomSpinner/CustomSpinner';

import { authLogout, setLanguage } from '../../../store/actions';

import './Layout.css';

const DateTime = ({ cms = {}, date: { weekDay, day, month, year }, clock: { hours, minutes, seconds } }) => <div className="d-none d-lg-flex align-items-center">
    <div style={{ width: 200 }}>
        <FontAwesomeIcon icon={faClock} className={`text-orange mr-2`} />
        <strong className={`text-orange`}>{(cms.time || '').toUpperCase()} : {hours} : {minutes} : {seconds}</strong>
    </div>
    <div>
        <strong className={`text-orange-50`}>{(cms.date || '').toUpperCase()} : {weekDay} {day} {month} {year}</strong>
    </div>
</div>;

class Layout extends Component {
    state = {
        date: { weekDay: null, day: null, month: null, year: null },
        clock: { hours: null, minutes: null, seconds: null },

        selectedItem: '',

        interval: null,

        language: null,
    }

    componentDidMount() {
        const {
            content: {
                cms: {
                    pages: { general: { days, months } }
                },
            }
        } = this.props;

        const interval = setInterval(() => {
            const date = new Date();
            const twoDigits = number => number < 10 ? '0' + number : number;

            const weekDay = days[date.getDay()];
            const day = date.getDate();
            const month = months[date.getMonth()];
            const year = date.getFullYear();

            const hours = twoDigits(date.getHours());
            const minutes = twoDigits(date.getMinutes());
            const seconds = twoDigits(date.getSeconds());

            this.setState({ date: { weekDay, day, month, year }, clock: { hours, minutes, seconds } });
        }, 1000);
        this.setState({ interval, language: this.props.content.languages.find(l => l.abbr === localStorage.getItem('lang')) });
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.content.cms) !== JSON.stringify(this.props.content.cms)) this.setState({ language: this.props.content.languages.find(l => l.abbr === localStorage.getItem('lang')) });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    logoutHandler = () => {
        const { logout } = this.props;
        logout();
    }

    toggle = () => {
        const left = $('.App.SideDrawer').css('left');
        if (left === "0px") {
            $('.App.SideDrawer').animate({ left: '-100%' });
            $('.App.SideDrawer .backdrop').hide();
        }
        else {
            $('.App.SideDrawer').animate({ left: 0 });
            $('.App.SideDrawer .backdrop').show();
        }
    }

    setLanguage = id => {
        this.props.set(id);
    }

    selectItem = item => this.setState({ selectedItem: item });

    render() {
        const { date, clock, selectedItem, language } = this.state;
        const {
            auth: { loading, data, role },
            content: { cms, languages },
            children,
            dark = false
        } = this.props;
        let footerContent;

        const {
            global: { app_name, company_logo },
            pages: { general, backend: { header, sidebar: { menu }, footer: { copyright, all_rights } } }
        } = cms;

        footerContent = <>
            {copyright} {new Date().getFullYear()} <span className={`text-500 text-${dark ? "orange" : "orange"}`}>{app_name}</span>. {all_rights} <img src={company_logo} style={{ height: 47 }} />.
        </>;

        const isAuthenticated = role !== undefined;

        return <div className="Backend Layout text-left text-secondary">
            {isAuthenticated && <SideDrawer data={data} toggle={this.toggle} selectItem={this.selectItem} logoutHandler={this.logoutHandler} selectedItem={selectedItem} cms={cms} />}

            <main className={`bg-${dark ? 'darkblue' : 'white'} position-relative min-vh-100 pb-4 pb-sm-5`}>
                <div style={{ height: 90 }} className="d-flex align-items-center px-3 px-lg-5 border-bottom border-light sticky-top bg-white">
                    <div className="text-orange text-30 d-md-none mr-3">
                        <FontAwesomeIcon icon={faBars} onClick={this.toggle} cursor="pointer" />
                    </div>

                    <div className="flex-fill text-18 mr-3">
                        <DateTime cms={general} date={date} clock={clock} />
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