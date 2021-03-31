import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Col, FormGroup, Row } from 'reactstrap';
import { faArrowsAlt, faArrowsAltH, faCalendar, faCheckCircle, faClock, faCog, faEdit, faEnvelope, faHome, faLocationArrow, faLock, faPhone, faSearchLocation, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import Form from '../../../../components/Backend/UI/Food/Form';
import FormInput from '../../../../components/UI/Input/Input';
import Feedback from '../../../../components/Feedback/Feedback';

import * as actions from '../../../../store/actions';
import { updateObject } from '../../../../shared/utility';

const Block = ({ children, icon, title, save, onSubmit }) => children ? <form className="col-xl-4 col-md-6 pb-4" onSubmit={onSubmit}>
    <input type="hidden" name="_method" defaultValue="PATCH" />

    <div className="h-100 bg-white rounded-8 shadow py-4 px-5">
        <div className="py-2">
            <div className="mb-4 pb-4 border-bottom border-orange-50 d-flex align-items-center justify-content-between">
                <div className="text-14">
                    <FontAwesomeIcon icon={icon} className="mr-3 text-orange text-21" />

                    {title}
                </div>

                <div className="text-27 text-orange">
                    <FontAwesomeIcon icon={faEdit} />
                </div>
            </div>

            <div className="mb-3 pb-1">
                {children}
            </div>

            <div>
                <Button color="orange" className="text-20 rounded-4 py-3 px-4">
                    <div className="mx-3">{save}<FontAwesomeIcon icon={faSave} className="ml-4" /></div>
                </Button>
            </div>
        </div>
    </div>
</form> : null;

class Settings extends Component {
    state = {
        name: '',
        owner: '',
        phone: '',
        whatsapp: '',
        location: '',
        address: '',
        currency: 'XAF',
        position: '1',

        email: '',
        country: '',
        token: '',
        password: '',
        new_password: '',
        new_password_confirmation: '',
        photo: '',

        banner_1: '',
        banner_2: '',
        banner_3: '',

        days: '',
        hours: '',

        countries: [],
        currencies: [],
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.backend.settings.restaurant && prevState.name === '') {
            const { backend: { settings: { restaurant } } } = nextProps;
            return updateObject(prevState, { ...restaurant });
        }
        return prevState;
    }

    async componentDidMount() {
        this.props.reset();
        this.props.get();

        const phoneRes = await fetch(CORS + 'http://country.io/phone.json', { method: 'GET', mode: 'cors' });
        const namesRes = await fetch(CORS + 'http://country.io/names.json', { method: 'GET', mode: 'cors' });

        const phone = await phoneRes.json();
        const names = await namesRes.json();

        const countries = Object.keys(phone).map(key => ({ country: key, code: phone[key], name: names[key] })).sort((a, b) => a.country > b.country);

        const currenciesRes = await fetch(CORS + 'https://raw.githubusercontent.com/mhs/world-currencies/master/currencies.json', { method: 'GET', mode: 'cors' });

        const currencies = await currenciesRes.json();

        this.setState({ countries, currencies });
    }

    componentWillUnmount() {
        if (!this.props.backend.settings.restaurant.name) return this.props.history.push('/restaurant/settings');
        this.props.reset();
    }

    submitHandler = e => {
        e.preventDefault();
    }

    restaurantSettingsSubmitHandler = e => {
        e.preventDefault();
        this.props.restaurant(e.target);
    }

    accountSettingsSubmitHandler = e => {
        e.preventDefault();
        this.props.account(e.target);
    }

    cmsSettingsSubmitHandler = e => {
        e.preventDefault();
        this.props.cms(e.target);
    }

    calendarSettingsSubmitHandler = e => {
        e.preventDefault();
        this.props.calendar(e.target);
    }

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        this.setState({ [name]: files ? files[0] : value });
    }

    fileUpload = id => document.getElementById(id).click()

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { form: { save, selected_file, active, inactive } }, backend: { pages: { settings: { title, subtitle, form } } } }
                }
            },
            backend: { settings: { loading, error, message, restaurant } },
        } = this.props;
        let {
            name, owner, phone, whatsapp, location, address, currency, position,
            email, country, token, password, new_password, new_password_confirmation, photo,
            banner_1, banner_2, banner_3,
            days, hours,
            countries, currencies
        } = this.state;
        let restaurantContent, accountContent, cmsContent, calendarContent;
        let errors = null;

        const countriesOptions = countries.map(({ country, code, name }) => <option key={country} value={country} code={code}>{name}</option>);
        const currenciesOptions = currencies.map(({ cc, symbol, name }) => <option key={cc} value={cc} symbol={symbol}>{name}</option>);

        if (countries.length === 0 || currencies.length === 0 || loading) restaurantContent = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            let symbol;
            const selectedCurrency = currencies.find(c => c.cc === currency);
            if (selectedCurrency) symbol = selectedCurrency.symbol;

            restaurantContent = <>
                <FormInput type="text" icon={faHome} onChange={this.inputChangeHandler} value={name} name="name" required placeholder={form.name} />
                <FormInput type="text" icon={faUserTie} onChange={this.inputChangeHandler} value={owner} name="owner" required placeholder={form.owner} />
                <FormInput type="tel" icon={faPhone} onChange={this.inputChangeHandler} value={phone} name="phone" required placeholder={form.phone} />
                <FormInput type="tel" icon={faWhatsapp} onChange={this.inputChangeHandler} value={whatsapp} name="whatsapp" placeholder={form.whatsapp} />
                <FormInput type="text" icon={faLocationArrow} onChange={this.inputChangeHandler} value={location} name="location" placeholder={form.location} />
                <FormInput type="text" icon={faSearchLocation} onChange={this.inputChangeHandler} value={address} name="address" placeholder={form.address} />
                <FormInput type="select" addon={<div className="text-center text-light" style={{ margin: '0 -10px' }}>{symbol}</div>} onChange={this.inputChangeHandler} value={currency} name="currency" required>
                    <option>{form.select_currency}</option>
                    {currenciesOptions}
                </FormInput>
                <FormInput type="select" icon={faArrowsAltH} onChange={this.inputChangeHandler} value={position} name="position" required>
                    <option>{form.select_position}</option>
                    <option value={0}>{form.left}</option>
                    <option value={1}>{form.right}</option>
                </FormInput>
            </>;

            accountContent = <>
                <FormInput type="email" icon={faEnvelope} onChange={this.inputChangeHandler} value={email} name="email" required placeholder={form.email} />
                <FormInput type="select" addon={<div>
                    <div className="rounded-circle mx-auto overflow-hidden position-relative d-flex justify-content-center align-items-center" style={{ width: 18, height: 18 }}>
                        <span className={`flag-icon text-large position-absolute flag-icon-${country.toLowerCase()}`} />
                    </div>
                </div>} onChange={this.inputChangeHandler} value={country} name="country" required>
                    <option>{form.select_country}</option>
                    {countriesOptions}
                </FormInput>
                <FormInput type="text" icon={faEdit} onChange={this.inputChangeHandler} value={token} name="token" readonly placeholder={form.token} />
                <FormInput type="password" icon={faLock} onChange={this.inputChangeHandler} value={password} name="password" placeholder={form.password} />
                <FormInput type="password" icon={faLock} onChange={this.inputChangeHandler} value={new_password} name="new_password" placeholder={form.new_password} />
                <FormInput type="password" icon={faLock} onChange={this.inputChangeHandler} value={new_password_confirmation} name="new_password_confirmation" placeholder={form.new_password_confirmation} />
                <FormGroup>
                    <div className="embed-responsive embed-responsive-16by9 bg-soft rounded-8 d-flex justify-content-center align-items-center" style={{ cursor: 'pointer', background: photo && `url("${photo}") no-repeat center`, backgroundSize: 'cover' }} onClick={() => this.fileUpload("photo")}>
                        {photo && (photo !== restaurant.photo) && <div className="text-center text-green">
                            <div><FontAwesomeIcon icon={faCheckCircle} fixedWidth size="5x" /></div>

                            <div className="mt-3">{selected_file}</div>
                        </div>}
                    </div>
                </FormGroup>
            </>;

            cmsContent = <>
                <FormGroup>
                    <div className="embed-responsive embed-responsive-16by9 bg-soft rounded-8 d-flex justify-content-center align-items-center" style={{ cursor: 'pointer', background: photo && `url("${banner_1}") no-repeat center`, backgroundSize: 'cover' }} onClick={() => this.fileUpload("banner-1")}>
                        {banner_1 && (banner_1 !== restaurant.banner_1) && <div className="text-center text-green">
                            <div><FontAwesomeIcon icon={faCheckCircle} fixedWidth size="5x" /></div>

                            <div className="mt-3">{selected_file}</div>
                        </div>}
                    </div>
                </FormGroup>
                <FormGroup>
                    <div className="embed-responsive embed-responsive-16by9 bg-soft rounded-8 d-flex justify-content-center align-items-center" style={{ cursor: 'pointer', background: banner_2 && `url("${banner_2}") no-repeat center`, backgroundSize: 'cover' }} onClick={() => this.fileUpload("banner-2")}>
                        {banner_2 && (banner_2 !== restaurant.banner_2) && <div className="text-center text-green">
                            <div><FontAwesomeIcon icon={faCheckCircle} fixedWidth size="5x" /></div>

                            <div className="mt-3">{selected_file}</div>
                        </div>}
                    </div>
                </FormGroup>
                <FormGroup>
                    <div className="embed-responsive embed-responsive-16by9 bg-soft rounded-8 d-flex justify-content-center align-items-center" style={{ cursor: 'pointer', background: banner_3 && `url("${banner_3}") no-repeat center`, backgroundSize: 'cover' }} onClick={() => this.fileUpload("banner-3")}>
                        {banner_3 && (banner_3 !== restaurant.banner_3) && <div className="text-center text-green">
                            <div><FontAwesomeIcon icon={faCheckCircle} fixedWidth size="5x" /></div>

                            <div className="mt-3">{selected_file}</div>
                        </div>}
                    </div>
                </FormGroup>
            </>;

            calendarContent = <>
                <FormInput type="text" icon={faCalendar} onChange={this.inputChangeHandler} value={days} name="days" required placeholder={form.days} />
                <FormInput type="text" icon={faClock} onChange={this.inputChangeHandler} value={hours} name="hours" required placeholder={form.hours} />
            </>;
        }

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb main={title} icon={faCog} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{title}</Subtitle>
                </TitleWrapper>
                <div>
                    {errors}
                    <Row>
                        <Form disabled icon={faCog} title={title} subtitle={subtitle} innerClassName="row">
                            <div className="col-12">
                                <Feedback message={message} />
                            </div>

                            <Block icon={faHome} save={save} onSubmit={this.restaurantSettingsSubmitHandler} title={form.restaurant_settings}>
                                {restaurantContent}
                            </Block>

                            <Block icon={faUser} save={save} onSubmit={this.accountSettingsSubmitHandler} title={form.account_settings}>
                                <input type="file" id="photo" name="photo" className="d-none" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg" />
                                {accountContent}
                            </Block>

                            <Block icon={faCog} save={save} onSubmit={this.cmsSettingsSubmitHandler} title={form.cms_settings}>
                                <input type="file" id="banner-1" name="banner_1" className="d-none" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg" />
                                <input type="file" id="banner-2" name="banner_2" className="d-none" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg" />
                                <input type="file" id="banner-3" name="banner_3" className="d-none" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg" />
                                {cmsContent}
                            </Block>

                            <Block icon={faCalendar} save={save} onSubmit={this.calendarSettingsSubmitHandler} title={form.calendar_settings}>
                                {calendarContent}
                            </Block>
                        </Form>
                    </Row>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(actions.getSettings()),
    restaurant: data => dispatch(actions.restaurantSettings(data)),
    account: data => dispatch(actions.accountSettings(data)),
    cms: data => dispatch(actions.cmsSettings(data)),
    calendar: data => dispatch(actions.calendarSettings(data)),
    reset: () => dispatch(actions.resetSettings()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Settings));