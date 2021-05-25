import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { faArrowsAltH, faBook, faCalendar, faCheckCircle, faClock, faCog, faEdit, faEnvelope, faExclamationCircle, faFileImage, faFlag, faHome, faInfoCircle, faLocationArrow, faLock, faLockOpen, faMapMarkerAlt, faMinusSquare, faPhone, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Swal from 'sweetalert2';

// Components
import Breadcrumb from '../../../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import TitleWrapper from '../../../../../../components/Backend/UI/TitleWrapper';
import SpecialTitle from '../../../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../../../components/UI/Titles/Subtitle/Subtitle';
import Error from '../../../../../../components/Error/Error';
import CustomSpinner from '../../../../../../components/UI/CustomSpinner/CustomSpinner';
import Form from '../../../../../../components/Backend/UI/Food/Form';
import FormInput from '../../../../../../components/UI/Input/Input';
import Feedback from '../../../../../../components/Feedback/Feedback';

import * as actions from '../../../../../../store/actions/backend/restaurants';

const Block = ({ children, icon, title, save, hidden, onSubmit, updatable, toggle }) => children ? <form className="col-xxl-3 col-xl-4 col-lg-6 pb-4" style={hidden ? { visibility: 'hidden' } : { visibility: 'visible' }} onSubmit={onSubmit}>
    <input type="hidden" name="_method" defaultValue="PATCH" />

    <div className="h-100 bg-white rounded-8 shadow py-3 py-sm-4 px-4 px-sm-5">
        <div className="py-2 d-flex flex-column h-100">
            <div className="mb-3 mb-sm-4 pb-3 pb-sm-4 border-bottom border-orange-50 d-flex align-items-center justify-content-between">
                <div className="text-14">
                    <FontAwesomeIcon icon={icon} className="mr-3 text-orange text-21" />

                    {title}
                </div>

                <div className="text-27 text-orange">
                    <FontAwesomeIcon icon={updatable ? faLockOpen : faLock} onClick={toggle} style={{ cursor: 'pointer' }} />
                </div>
            </div>

            <div className="mb-2 mb-sm-3 pb-1">
                {children}
            </div>

            <div className="mt-auto">
                <Button color="orange" className="text-20 rounded-4 py-3 px-4">
                    <div className="mx-3">{save}<FontAwesomeIcon icon={faSave} className="ml-4" /></div>
                </Button>
            </div>
        </div>
    </div>
</form> : null;

const CmsItem = ({ condition, banner, attr, locked, disabled, restaurant, fileUpload }) => condition ? <FormGroup>
    <div id={`embed-${attr}`} className="embed-responsive embed-responsive-16by9 bg-soft rounded-8 d-flex justify-content-center align-items-center" style={{
        cursor: disabled ? 'not-allowed' : 'pointer',
        backgroundImage: banner && `url("${banner}")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        overflow: 'visible',
    }} onClick={() => fileUpload(attr)}>
        {banner && (banner !== restaurant[attr]) && <div className="text-center text-green w-100 px-3">
            <div className="position-absolute" style={{ top: 0, right: 0, transform: 'translate(50%,-50%)' }}><FontAwesomeIcon icon={faCheckCircle} fixedWidth size="2x" /></div>

            <div className="position-absolute file-selected text-truncate w-100 pt-3" style={{ top: '100%', left: 0 }} />
        </div>}
    </div>
</FormGroup>
    : <FormGroup>
        <div style={{ cursor: 'not-allowed' }} className="embed-responsive embed-responsive-16by9 bg-soft rounded-8 d-flex justify-content-center align-items-center">
            <div className="text-center text-light w-100 px-3">
                <div><FontAwesomeIcon icon={faLock} fixedWidth size="5x" /></div>

                <div className="mt-3 text-12 text-center text-truncate">{locked}</div>
            </div>
        </div>
    </FormGroup>;

const Conditional = ({ condition = false, children }) => condition ? children : null;

class Settings extends Component {
    state = {
        name: '',
        owner: '',
        phone: '',
        logo: '',
        whatsapp: '',
        location: '',
        currency: 'XAF',
        position: '1',
        restaurantUpdatable: false,

        address: {},
        caution: {},
        must_read: {},
        disclaimer: {},
        days: {},
        hours: {},
        translate: '',
        translatableUpdatable: false,

        email: '',
        country: '',
        token: '',
        password: '',
        new_password: '',
        new_password_confirmation: '',
        photo: '',
        accountUpdatable: false,

        banner1: '',
        banner2: '',
        banner3: '',
        cmsUpdatable: false,

        languages: [],
        language: '',
        languageUpdatable: false,
    }



    // Component methods
    submitHandler = e => {
        e.preventDefault();
    }

    restaurantSettingsSubmitHandler = e => {
        e.preventDefault();
        this.props.restaurant(e.target);
    }

    restaurantToggle = () => this.setState(prevState => ({ restaurantUpdatable: !prevState.restaurantUpdatable }))

    accountSettingsSubmitHandler = e => {
        e.preventDefault();
        this.props.account(e.target);
    }

    accountToggle = () => this.setState(prevState => ({ accountUpdatable: !prevState.accountUpdatable }))

    cmsSettingsSubmitHandler = e => {
        e.preventDefault();
        this.props.cms(e.target);
    }

    cmsToggle = () => this.setState(prevState => ({ cmsUpdatable: !prevState.cmsUpdatable }))

    translatableSettingsSubmitHandler = e => {
        e.preventDefault();
        this.props.translatable(e.target);
    }

    translatableToggle = () => this.setState(prevState => ({ translatableUpdatable: !prevState.translatableUpdatable }))

    languageSettingsSubmitHandler = e => {
        e.preventDefault();
        this.props.language(e.target);
    }

    languageToggle = () => this.setState(prevState => ({ languageUpdatable: !prevState.languageUpdatable }))

    removeLanguage = id => this.setState(prevState => ({ languages: prevState.languages.filter(language => language.id !== id) }))

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        if (files) this.readURL(e.target);
        if (name === 'select_language') {
            const languages = [...this.state.languages];
            const language = this.props.backend.restaurants.allLanguages.find(a => +a.id === +value);
            languages.push(language);
            return this.setState({ languages });
        }
        if (name.includes('[')) {
            const { translate } = this.state;
            const stateName = name.split('[')[0];
            const element = this.state[stateName];
            element[translate] = value;
            return this.setState({ [stateName]: element });
        }
        this.setState({ [name]: files ? files[0] : value });
    }

    readURL = input => {
        if (input.files && input.files[0]) {
            const file = input.files[0];
            const reader = new FileReader();

            reader.onload = function (e) {
                document.getElementById(`embed-${input.name}`).style.backgroundImage = `url('${e.target.result}')`;
                document.getElementById(`embed-${input.name}`).style.backgroundSize = "cover";
                document.getElementById(`embed-${input.name}`).querySelector(".file-selected").innerHTML = file.name;
            }

            reader.readAsDataURL(file); // convert to base64 string
        }
    }

    fileUpload = id => document.getElementById(id) && document.getElementById(id).click()



    // Lifecycle methods
    componentDidMount() {
        this.props.get();
        this.setState({ translate: this.props.backend.restaurants.data.main_language });
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.backend.restaurants.message && this.props.backend.restaurants.message && this.props.backend.restaurants.message.type === 'success') {
            const { logo, photo, banner1, banner2, banner3 } = this.props.backend.restaurants.restaurant;
            this.setState({ logo, photo, banner1, banner2, banner3 });
        }
        if (!prevProps.backend.restaurants.restaurant && this.props.backend.restaurants.restaurant) {
            const { backend: { restaurants: { restaurant } } } = this.props;
            if (!restaurant.name || restaurant.languages.length === 0) Swal.fire({
                title: 'Missing restaurant\'s name or languages',
                text: "Please set your restaurant\'s name and languages",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#D14529',
                confirmButtonText: 'Yes'
            });
            this.setState({ ...restaurant });
        }
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { form: { save } }, backend: { pages: { settings: { title, subtitle, form } } } }
                },
                currencies, countries,
            },
            backend: { restaurants: { data: { plan, languages: restaurantLanguages }, loading, error, message, restaurant, allLanguages = [] } },
        } = this.props;
        let {
            name, owner, phone, logo, whatsapp, location, currency, position,
            restaurantUpdatable,

            address, caution, must_read, disclaimer, days, hours,
            translate,
            translatableUpdatable,

            email, country, token, password, new_password, new_password_confirmation, photo,
            accountUpdatable,

            banner1, banner2, banner3,
            cmsUpdatable,

            languages, language,
            languageUpdatable,
        } = this.state;
        let spinnerContent, restaurantContent, accountContent, cmsContent, translatableContent, languageContent;
        let errors = null;

        const restaurantLanguagesOptions = restaurantLanguages.sort((a, b) => a.name.localeCompare(b.name)).map(language => <option key={JSON.stringify(language)} value={language.abbr}>{language.name}</option>);

        const basic = plan;
        const standard = plan && plan.slug.includes('standard');
        const premium = plan && plan.slug.includes('premium');

        const countriesOptions = countries.map(({ country, code, name }) => <option key={country} value={country} code={code}>{name}</option>);
        const currenciesOptions = currencies.map(({ cc, symbol, name }) => <option key={cc} value={cc} symbol={symbol}>{name}</option>);
        const languagesOptions = allLanguages.filter(({ id }) => !languages.map(l => l.id).includes(id)).sort((a, b) => a.name.localeCompare(b.name)).map(({ id, name }) => <option key={id} value={id}>{name}</option>);

        if (loading) spinnerContent = <Col xs={12}>
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
                <FormInput type="text" icon={faHome} onChange={this.inputChangeHandler} value={name} disabled={!restaurantUpdatable} name="name" required placeholder={form.name} />
                <FormInput type="text" icon={faUserTie} onChange={this.inputChangeHandler} value={owner} disabled={!restaurantUpdatable} name="owner" required placeholder={form.owner} />
                <Conditional condition={basic}>
                    <FormInput type="tel" icon={faPhone} onChange={this.inputChangeHandler} value={phone} disabled={!restaurantUpdatable} name="phone" required placeholder={form.phone} />
                </Conditional>
                <Conditional condition={standard || premium}>
                    <FormInput type="tel" icon={faWhatsapp} onChange={this.inputChangeHandler} value={whatsapp} disabled={!restaurantUpdatable} name="whatsapp" placeholder={form.whatsapp} />
                </Conditional>
                <Conditional condition={premium}>
                    <FormInput type="text" icon={faLocationArrow} onChange={this.inputChangeHandler} value={location} disabled={!restaurantUpdatable} name="location" placeholder={form.location} />
                </Conditional>
                <FormInput type="select" addon={<div className="text-center text-light" style={{ margin: '0 -10px' }}>{symbol}</div>} onChange={this.inputChangeHandler} value={currency} disabled={!restaurantUpdatable} name="currency" placeholder={form.select_currency} required>
                    <option>{form.select_currency}</option>
                    {currenciesOptions}
                </FormInput>
                <FormInput type="select" icon={faArrowsAltH} onChange={this.inputChangeHandler} value={position} disabled={!restaurantUpdatable} name="position" placeholder={form.select_position} required>
                    <option>{form.select_position}</option>
                    <option value={0}>{form.left}</option>
                    <option value={1}>{form.right}</option>
                </FormInput>
                <FormGroup row className="justify-content-center">
                    <div className="col-12 col-sm-10">
                        <div id="embed-logo" className="embed-responsive embed-responsive-1by1 bg-soft rounded-8 d-flex justify-content-center align-items-center" style={{
                            cursor: restaurantUpdatable ? 'pointer' : 'not-allowed',
                            backgroundImage: logo && `url("${logo}")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            overflow: 'visible',
                        }} onClick={!restaurantUpdatable ? null : (() => this.fileUpload("logo"))}>
                            {!logo ? <div className="text-center text-light w-100 overflow-hidden px-3">
                                <div><FontAwesomeIcon icon={faFileImage} fixedWidth size="5x" /></div>

                                <div className="mt-3 mb-1 text-center text-12 text-truncate">{form.upload}</div>

                                <div className="text-center text-12 text-truncate">{form.size}</div>
                            </div> : logo && (logo !== restaurant.logo) && <div className="text-center text-green w-100 px-3">
                                <div className="position-absolute" style={{ top: 0, right: 0, transform: 'translate(50%,-50%)' }}><FontAwesomeIcon icon={faCheckCircle} fixedWidth size="2x" /></div>

                                <div className="position-absolute file-selected text-truncate w-100 pt-3" style={{ top: '100%', left: 0 }} />
                            </div>}
                        </div>
                    </div>
                </FormGroup>
            </>;

            accountContent = <>
                <FormInput type="email" icon={faEnvelope} onChange={this.inputChangeHandler} value={email} disabled={!accountUpdatable} name="email" required placeholder={form.email} />
                <FormInput type="select" addon={<div>
                    <div className="rounded-circle mx-auto overflow-hidden position-relative d-flex justify-content-center align-items-center" style={{ width: 18, height: 18 }}>
                        <span className={`flag-icon text-large position-absolute flag-icon-${country.toLowerCase()}`} />
                    </div>
                </div>} onChange={this.inputChangeHandler} value={country} disabled={!accountUpdatable} name="country" placeholder={form.select_country} required>
                    <option>{form.select_country}</option>
                    {countriesOptions}
                </FormInput>
                <FormInput type="text" icon={faEdit} onChange={this.inputChangeHandler} value={token} disabled={!accountUpdatable} name="token" readonly placeholder={form.token} />
                <FormInput type="password" icon={faLock} onChange={this.inputChangeHandler} value={password} disabled={!accountUpdatable} name="password" placeholder={form.password} />
                <FormInput type="password" icon={faLock} onChange={this.inputChangeHandler} value={new_password} disabled={!accountUpdatable} name="new_password" placeholder={form.new_password} />
                <FormInput type="password" icon={faLock} onChange={this.inputChangeHandler} value={new_password_confirmation} disabled={!accountUpdatable} name="new_password_confirmation" placeholder={form.new_password_confirmation} />
                <FormGroup>
                    <div id="embed-photo" className="embed-responsive embed-responsive-16by9 bg-soft rounded-8 d-flex justify-content-center align-items-center position-relative" style={{
                        cursor: accountUpdatable ? 'pointer' : 'not-allowed',
                        backgroundImage: photo && `url("${photo}")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        overflow: 'visible',
                    }} onClick={!accountUpdatable ? null : (() => this.fileUpload("photo"))}>
                        {!photo ? <div className="text-center text-light w-100 overflow-hidden px-3">
                            <div><FontAwesomeIcon icon={faFileImage} fixedWidth size="4x" /></div>

                            <div className="mt-3 mb-1 text-center text-12 text-truncate">{form.upload}</div>

                            <div className="text-center text-12 text-truncate">{form.size}</div>
                        </div> : photo && (photo !== restaurant.photo) && <div className="text-center text-green w-100 px-3">
                            <div className="position-absolute" style={{ top: 0, right: 0, transform: 'translate(50%,-50%)' }}><FontAwesomeIcon icon={faCheckCircle} fixedWidth size="2x" /></div>

                            <div className="position-absolute file-selected text-truncate w-100 pt-3" style={{ top: '100%', left: 0 }} />
                        </div>}
                    </div>
                </FormGroup>
            </>;

            cmsContent = <>
                {[
                    { condition: basic, banner: banner1, attr: 'banner1', locked: form.locked_banner1 },
                    { condition: standard || premium, banner: banner2, attr: 'banner2', locked: form.locked_banner2 },
                    { condition: premium, banner: banner3, attr: 'banner3', locked: form.locked_banner3 },
                ].map(item => <CmsItem key={JSON.stringify(item)} {...item} disabled={!cmsUpdatable} restaurant={restaurant} fileUpload={!cmsUpdatable ? null : this.fileUpload} />)}
            </>;

            translatableContent = <>
                <FormGroup>
                    <Input type="select" name="translate" onChange={this.inputChangeHandler} disabled={!translatableUpdatable} value={translate}>
                        {restaurantLanguagesOptions}
                    </Input>
                </FormGroup>
                {restaurantLanguages.map(l => <Fragment key={'language-' + l.abbr}>
                    <FormInput type="text" icon={faMapMarkerAlt} id={"address-" + l.abbr} className={l.abbr === translate ? "" : "d-none"} onChange={this.inputChangeHandler} value={address[l.abbr]} disabled={!translatableUpdatable} name={"address[" + l.abbr + "]"} placeholder={form.address} />
                    <FormInput type="textarea" icon={faInfoCircle} id={"caution-" + l.abbr} className={l.abbr === translate ? "" : "d-none"} onChange={this.inputChangeHandler} value={caution[l.abbr]} disabled={!translatableUpdatable} name={"caution[" + l.abbr + "]"} placeholder={form.caution} />
                    <FormInput type="textarea" icon={faExclamationCircle} id={"must_read-" + l.abbr} className={l.abbr === translate ? "" : "d-none"} onChange={this.inputChangeHandler} value={must_read[l.abbr]} disabled={!translatableUpdatable} name={"must_read[" + l.abbr + "]"} placeholder={form.must_read} />
                    <FormInput type="textarea" icon={faInfoCircle} id={"disclaimer-" + l.abbr} className={l.abbr === translate ? "" : "d-none"} onChange={this.inputChangeHandler} value={disclaimer[l.abbr]} disabled={!translatableUpdatable} name={"disclaimer[" + l.abbr + "]"} placeholder={form.disclaimer} />
                    <FormInput type="text" icon={faCalendar} id={"days-" + l.abbr} className={l.abbr === translate ? "" : "d-none"} onChange={this.inputChangeHandler} value={days[l.abbr]} disabled={!translatableUpdatable} name={"days[" + l.abbr + "]"} required placeholder={form.days} />
                    <FormInput type="text" icon={faClock} id={"hours-" + l.abbr} className={l.abbr === translate ? "" : "d-none"} onChange={this.inputChangeHandler} value={hours[l.abbr]} disabled={!translatableUpdatable} name={"hours[" + l.abbr + "]"} required placeholder={form.hours} />
                </Fragment>)}
            </>;

            languageContent = <>
                <FormInput type="select" icon={faFlag} onChange={this.inputChangeHandler} disabled={!languageUpdatable} name="select_language">
                    <option>{form.select_language}</option>
                    {languagesOptions}
                </FormInput>
                {languages.length > 0 && <FormGroup disabled={!languageUpdatable} tag="fieldset">
                    <legend className="text-14 text-500">{form.languages}</legend>
                    {languages.map(l => <FormGroup key={JSON.stringify(l) + Math.random()} check>
                        <Label disabled={!languageUpdatable} check className="text-14">
                            <Input type="radio" disabled={!languageUpdatable} required name="language" defaultValue={l.id} defaultChecked={l.id === language} />
                            {' ' + l.name + ' '}
                            {languageUpdatable && <FontAwesomeIcon icon={faMinusSquare} className="text-red" cursor="pointer" onClick={() => this.removeLanguage(l.id)} />}
                        </Label>

                        <input type="hidden" disabled={!languageUpdatable} name="languages[]" defaultValue={l.id} />
                    </FormGroup>)}
                </FormGroup>}
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

                            {spinnerContent}

                            <Block hidden={loading} icon={faHome} save={save} onSubmit={this.restaurantSettingsSubmitHandler} title={form.restaurant_settings} updatable={restaurantUpdatable} toggle={this.restaurantToggle}>
                                <input type="file" id="logo" name="logo" className="d-none" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg" />
                                {restaurantContent}
                            </Block>

                            <Block hidden={loading} icon={faBook} save={save} onSubmit={this.translatableSettingsSubmitHandler} title={form.translatable_settings} updatable={translatableUpdatable} toggle={this.translatableToggle}>
                                {translatableContent}
                            </Block>

                            <Block hidden={loading} icon={faUser} save={save} onSubmit={this.accountSettingsSubmitHandler} title={form.account_settings} updatable={accountUpdatable} toggle={this.accountToggle}>
                                <input type="file" id="photo" name="photo" className="d-none" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg" />
                                {accountContent}
                            </Block>

                            <Block hidden={loading} icon={faCog} save={save} onSubmit={this.cmsSettingsSubmitHandler} title={form.cms_settings} updatable={cmsUpdatable} toggle={this.cmsToggle}>
                                <Conditional condition={basic}><input type="file" id="banner1" name="banner1" className="d-none" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg" /></Conditional>
                                <Conditional condition={standard || premium}><input type="file" id="banner2" name="banner2" className="d-none" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg" /></Conditional>
                                <Conditional condition={premium}><input type="file" id="banner3" name="banner3" className="d-none" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg" /></Conditional>

                                {cmsContent}
                            </Block>

                            <Block hidden={loading} icon={faFlag} save={save} onSubmit={this.languageSettingsSubmitHandler} title={form.language_settings} updatable={languageUpdatable} toggle={this.languageToggle}>
                                {languageContent}
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
    get: () => dispatch(actions.getRestaurantsEdit('settings')),
    restaurant: data => dispatch(actions.postRestaurantsEdit('settings/restaurant', data)),
    account: data => dispatch(actions.postRestaurantsEdit('settings/account', data)),
    cms: data => dispatch(actions.postRestaurantsEdit('settings/cms', data)),
    translatable: data => dispatch(actions.postRestaurantsEdit('settings/translatable', data)),
    language: data => dispatch(actions.postRestaurantsEdit('settings/language', data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Settings));