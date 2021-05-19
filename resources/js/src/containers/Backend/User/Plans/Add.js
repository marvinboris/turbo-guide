import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { faBox, faHome, faMoneyBillWaveAlt } from '@fortawesome/free-solid-svg-icons';

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
    token: '',
    plan_id: '',

    add: false,
}

class Add extends Component {
    state = { ...initialState }



    // Component methods
    saveHandler = e => {
        e.preventDefault();
        this.props.post(e.target);
    }

    saveAddHandler = () => this.setState({ add: true }, () => this.props.post(document.querySelector('form')))

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        this.setState({ [name]: files ? files[0] : value });
    }



    // Lifecycle methods
    componentDidMount() {
        this.props.reset();
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.backend.plans.message && this.props.backend.plans.message && this.props.backend.plans.message.type === 'success' && !this.props.edit) {
            if (this.state.add) this.setState({ ...initialState });
            else this.props.history.push({
                pathname: '/user/plans',
                state: {
                    message: this.props.backend.plans.message,
                },
            });
        }
        if (!prevProps.backend.plans.plan && this.props.backend.plans.plan) {
            const { backend: { plans: { plan } } } = this.props;
            this.setState({ ...plan });
        }
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { backend: { pages: { plans: { title, add, edit, index, form } } } }
                }
            },
            backend: { plans: { loading, error, message, plans } },
            auth: { data: { role: { features } } }
        } = this.props;
        let { token, plan_id } = this.state;
        let content = null;
        let errors = null;

        const feature = features.find(f => f.prefix === 'plans');
        const redirect = !(feature && JSON.parse(feature.permissions).includes(this.props.edit ? 'u' : 'c')) && <Redirect to="/user/dashboard" />;

        if (!plans) plans = [];
        const plansOptions = plans.sort((a, b) => a.name.localeCompare(b.name)).map(plan => <option key={JSON.stringify(plan)} value={plan.id}>{plan.name}</option>);

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
                                        <FormInput type="text" className="col-md-6" icon={faHome} onChange={this.inputChangeHandler} value={token} name="token" required placeholder={form.token} />
                                        <FormInput className="col-lg-6" type="select" name="plan_id" placeholder={form.plan} onChange={this.inputChangeHandler} icon={faBox} required value={plan_id}>
                                            <option>{form.select_plan}</option>
                                            {plansOptions}
                                        </FormInput>
                                    </Row>
                                </div>

                                <Save edit={true} saveAddHandler={this.saveAddHandler} />
                            </Row>
                        </div>
                    </Col>
                </>
            );
        }

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb items={this.props.edit && [{ to: '/user/plans', content: index }]} main={this.props.edit ? edit : add} icon={faBox} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{this.props.edit ? edit : add}</Subtitle>
                </TitleWrapper>
                <div>
                    {redirect}
                    {errors}
                    <Row>
                        <Form onSubmit={this.saveHandler} icon={faBox} title={this.props.edit ? edit : add} list={index} link="/user/plans" innerClassName="row justify-content-center">
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
    post: data => dispatch(actions.postPlans(data)),
    reset: () => dispatch(actions.resetPlans()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));