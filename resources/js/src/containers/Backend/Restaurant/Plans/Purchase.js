import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Col, CustomInput, Row } from 'reactstrap';
import { faBox, faMoneyBillWaveAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

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

import * as actions from '../../../../store/actions/backend';

class Purchase extends Component {
    state = {
        type: '',
        plan_id: '',
        price: '',
    }

    async componentDidMount() {
        this.props.reset();
        this.props.info();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.purchase(e.target);
    }

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        if (name === 'plan_id') {
            const plan = this.props.backend.plans.types.find(type => +type.months === +this.state.type).plans.find(plan => +plan.id === +value);
            return this.setState({ [name]: value, price: plan.price });
        }
        this.setState({ [name]: files ? files[0] : value });
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { backend: { pages: { plans: { title, subtitle, instructions, add, index, form } } } }
                }
            },
            backend: { plans: { loading, error, message, types = [] } },
        } = this.props;
        let { type, plan_id, price } = this.state;
        let content = null;
        let errors = null;

        if (message && message.type === 'success') window.location.reload();

        const typesOptions = types.sort((a, b) => a.name > b.name).map(type => <option key={JSON.stringify(type)} value={type.months}>{type.name}</option>);

        let plansOptions = [];
        if (type !== '') plansOptions = types.find(t => +t.months === +type).plans.sort((a, b) => a.name > b.name).map(plan => <option key={JSON.stringify(plan)} value={plan.id}>{plan.name}</option>);

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            content = (
                <>
                    <Col lg={6}>
                        <Feedback message={message} />

                        <div className="shadow-lg rounded-8 bg-white px-4 px-sm-5 py-3 py-sm-4">
                            <Row className="my-2 my-sm-3">
                                <div className="mb-3 text-14 col-12">{instructions}</div>

                                <div className="col-lg-10">
                                    <Row>
                                        <FormInput type="select" className="col-md-12" icon={faPencilAlt} onChange={this.inputChangeHandler} value={type} name="type" required>
                                            <option>{form.select_type}</option>
                                            {typesOptions}
                                        </FormInput>
                                        <FormInput type="select" className="col-md-12" icon={faPencilAlt} onChange={this.inputChangeHandler} value={plan_id} name="plan_id" required>
                                            <option>{form.select_plan_id}</option>
                                            {plansOptions}
                                        </FormInput>
                                        <FormInput type="text" className="col-md-12" icon={faMoneyBillWaveAlt} onChange={this.inputChangeHandler} value={price} name="price" readonly placeholder={form.price} />
                                    </Row>
                                    <div className="my-3 my-sm-4">
                                        <CustomInput type="checkbox" name="terms" id="terms" label={form.terms} />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <Button color="orange" className="text-20 rounded-4 py-3 px-4">
                                        <div>{form.purchase}</div>
                                    </Button>
                                </div>
                            </Row>
                        </div>
                    </Col>
                </>
            );
        }

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb main={add} icon={faBox} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{add}</Subtitle>
                </TitleWrapper>
                <div>
                    {errors}
                    <Row>
                        <Form onSubmit={this.submitHandler} icon={faBox} title={add} subtitle={subtitle} list={index} link="/restaurant/plans" innerClassName="row justify-content-center">
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
    info: () => dispatch(actions.getPlansInfo()),
    purchase: data => dispatch(actions.purchasePlan(data)),
    reset: () => dispatch(actions.resetPlans()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Purchase));