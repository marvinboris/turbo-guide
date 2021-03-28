import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { CustomInput, Form } from 'reactstrap';
import { faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import Input from '../../../../components/UI/Input/Input';
import CenterButton from '../../../../components/UI/Button/CenterButton/CenterButton';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';

import * as actions from '../../../../store/actions';

class Register extends Component {
    state = {
        owner: '',
        email: '',
        country: 'CM',
        code: '237',
        phone: '',

        countries: [],
    }

    async componentDidMount() {
        const phoneRes = await fetch(CORS + 'http://country.io/phone.json', { method: 'GET', mode: 'cors' });
        const namesRes = await fetch(CORS + 'http://country.io/names.json', { method: 'GET', mode: 'cors' });

        const phone = await phoneRes.json();
        const names = await namesRes.json();

        const countries = Object.keys(phone).map(key => ({ country: key, code: phone[key], name: names[key] })).sort((a, b) => a.country > b.country);

        this.setState({ countries });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onAuth(e.target);
    }

    inputChangeHandler = e => {
        const { name, value, checked } = e.target;
        if (name === 'country') return this.setState({ country: value, code: this.state.countries.find(({ country }) => country === value).code });
        if (name === 'terms') return this.setState({ terms: checked });
        this.setState({ [name]: value });
    }

    render() {
        const {
            content: {
                cms: {
                    pages: { auth: { restaurant: { register } } }
                }
            },
            auth: { loading, error, message, signup: { status }, },
        } = this.props;
        const { countries, owner, email, code, country, phone } = this.state;
        let titleContent, formContent;

        titleContent = <>
            {register.welcome}
        </>;

        let redirect = null;
        if (status) redirect = <Redirect to="/auth/register/success" />;

        const countriesOptions = countries.map(({ country, code, name }) => <option key={country} value={country} code={code}>{name}</option>);

        formContent = <>
            <Input type="text" icon={faUser} onChange={this.inputChangeHandler} value={owner} name="owner" required placeholder={register.owner} />
            <Input type="email" icon={faEnvelope} onChange={this.inputChangeHandler} value={email} name="email" required placeholder={register.email} />

            <Input type="select" addon={<div>
                <div className="rounded-circle mx-auto overflow-hidden position-relative d-flex justify-content-center align-items-center" style={{ width: 18, height: 18 }}>
                    <span className={`flag-icon text-large position-absolute flag-icon-${country.toLowerCase()}`} />
                </div>
            </div>} onChange={this.inputChangeHandler} value={country} name="country" required placeholder={register.select_country}>
                <option>{register.select_country}</option>
                {countriesOptions}
            </Input>
            <input type="hidden" value={code} name="code" />
            <Input type="tel" addon={<div className="text-center text-light" style={{ margin: '0 -10px' }}>+{code}</div>} onChange={this.inputChangeHandler} value={phone} name="phone" required placeholder={register.phone} />

            <div className="my-4">
                <CustomInput type="checkbox" name="terms" id="terms" label={register.terms} />
            </div>

            <div className="mb-5 pb-3">
                <CenterButton color="orange" size="lg" className="btn-block" icon={faSignInAlt}>{register.sign_up}</CenterButton>
            </div>

            <div className="text-center">
                {register.already} ? <Link to="/auth/login" className="text-decoration-none text-500 text-orange">{register.sign_in}</Link>
            </div>
        </>;


        const errors = <Error err={error} />;
        const feedback = <Feedback message={message} />;
        let content = null;

        if (countries.length === 0 || loading) content = <CustomSpinner />;
        else content = <Form onSubmit={this.submitHandler}>
            {formContent}
        </Form>;

        return (
            <>
                <div className="text-center text-16 mb-4 pb-3">
                    {titleContent}
                </div>
                {redirect}
                {errors}
                {feedback}
                {content}
            </>
        )
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuth: data => dispatch(actions.authSignup(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);