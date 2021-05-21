import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import Form from '../../../../components/Backend/UI/Form/Form';
import Save from '../../../../components/Backend/UI/Food/Form/Save';
import FormInput from '../../../../components/Backend/UI/Input/Input';
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';
import Feedback from '../../../../components/Feedback/Feedback';

import * as actions from '../../../../store/actions/backend';

const initialState = {
    owner: '',
    email: '',
    country: 'CM',
    code: '237',
    phone: '',

    add: false,
}

class Add extends Component {
    state = { ...initialState }



    // Component methods
    saveHandler = e => {
        e.preventDefault();
        if (this.props.edit) this.props.patch(this.props.match.params.id, e.target);
        else this.props.post(e.target);
    }

    saveAddHandler = () => this.setState({ add: true }, () => this.props.post(document.querySelector('form')))

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        if (name === 'country') return this.setState({ country: value, code: this.props.content.countries.find(({ country }) => country === value).code });
        this.setState({ [name]: files ? files[0] : value });
    }



    // Lifecycle methods
    componentDidMount() {
        this.props.reset();
        if (this.props.edit) this.props.get(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.backend.restaurants.message && this.props.backend.restaurants.message && this.props.backend.restaurants.message.type === 'success' && !this.props.edit) {
            if (this.state.add) this.setState({ ...initialState });
            else this.props.history.push({
                pathname: '/user/restaurants',
                state: {
                    message: this.props.backend.restaurants.message,
                },
            });
        }
        if (!prevProps.backend.restaurants.restaurant && this.props.backend.restaurants.restaurant) {
            const { backend: { restaurants: { restaurant } } } = this.props;
            this.setState({ ...restaurant });
        }
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { backend: { pages: { restaurants: { title, add, edit, index, form } } } }
                },
                countries,
            },
            backend: { restaurants: { loading, error, message } },
            auth: { data: { role: { features } } }
        } = this.props;
        let { owner, email, code, country, phone } = this.state;
        let content = null;
        let errors = null;

        const feature = features.find(f => f.prefix === 'restaurants');
        const redirect = !(feature && JSON.parse(feature.permissions).includes(this.props.edit ? 'u' : 'c')) && <Redirect to="/user/dashboard" />;

        const countriesOptions = countries.map(({ country, code, name }) => <option key={country} value={country} code={code}>{name}</option>);

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            content = (
                <>
                    <Col xl={9}>
                        <Feedback message={message} />

                        {this.props.edit && <input type="hidden" name="_method" defaultValue="PATCH" />}

                        <div className="shadow-lg rounded-8 bg-white px-4 px-sm-5 py-3 py-sm-4">
                            <Row className="my-2 my-sm-3">
                                <div className="col-lg-9">
                                    <Row>
                                        <FormInput className="col-md-6" type="text" icon={faUser} onChange={this.inputChangeHandler} value={owner} name="owner" required placeholder={form.owner} />
                                        <FormInput className="col-md-6" type="email" icon={faEnvelope} onChange={this.inputChangeHandler} value={email} name="email" required placeholder={form.email} />

                                        <FormInput className="col-md-6" type="select" addon={<div>
                                            <div className="rounded-circle mx-auto overflow-hidden position-relative d-flex justify-content-center align-items-center" style={{ width: 18, height: 18 }}>
                                                <span className={`flag-icon text-large position-absolute flag-icon-${country.toLowerCase()}`} />
                                            </div>
                                        </div>} onChange={this.inputChangeHandler} value={country} name="country" required placeholder={form.select_country}>
                                            <option>{form.select_country}</option>
                                            {countriesOptions}
                                        </FormInput>
                                        <input type="hidden" value={code} name="code" />
                                        <FormInput className="col-md-6" type="tel" addon={<div className="text-center text-light" style={{ margin: '0 -10px' }}>+{code}</div>} onChange={this.inputChangeHandler} value={phone} name="phone" required placeholder={form.phone} />
                                    </Row>
                                </div>

                                <Save edit={this.props.edit} saveAddHandler={this.saveAddHandler} />
                            </Row>
                        </div>
                    </Col>
                </>
            );
        }

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb items={this.props.edit && [{ to: '/user/restaurants', content: index }]} main={this.props.edit ? edit : add} icon={faHome} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{this.props.edit ? edit : add}</Subtitle>
                </TitleWrapper>
                <div>
                    {redirect}
                    {errors}
                    <Row>
                        <Form onSubmit={this.saveHandler} icon={faHome} title={this.props.edit ? edit : add} list={index} link="/user/restaurants" innerClassName="row justify-content-center">
                            {content}
                        </Form>
                    </Row>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: id => dispatch(actions.getRestaurant(id)),
    post: data => dispatch(actions.postRestaurants(data)),
    patch: (id, data) => dispatch(actions.patchRestaurants(id, data)),
    reset: () => dispatch(actions.resetRestaurants()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));