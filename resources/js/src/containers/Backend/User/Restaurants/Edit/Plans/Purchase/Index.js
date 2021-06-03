import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Col, CustomInput, Row } from 'reactstrap';
import { faBox, faMoneyBillWaveAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

// Components
import TitleWrapper from '../../../../../../../components/Backend/UI/TitleWrapper';
import SpecialTitle from '../../../../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../../../../components/UI/Titles/Subtitle/Subtitle';
import Error from '../../../../../../../components/Error/Error';
import CustomSpinner from '../../../../../../../components/UI/CustomSpinner/CustomSpinner';
import Form from '../../../../../../../components/Backend/UI/Food/Form';
import FormInput from '../../../../../../../components/UI/Input/Input';
import Feedback from '../../../../../../../components/Feedback/Feedback';

import * as backendActions from '../../../../../../../store/actions/backend/restaurants';
import { updateObject } from '../../../../../../../shared/utility';

import './Purchase.css';

const icon = faBox;

class Purchase extends Component {
    state = {
        type: '',
        plan_id: '',
        price: '',

        auto_renew: null,
    }



    // Component methods
    submitHandler = e => {
        e.preventDefault();
        this.props.purchase(e.target);
    }

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        if (name === 'plan_id') {
            const plan = this.props.backend.restaurants.types.find(type => +type.months === +this.state.type).plans.find(plan => +plan.id === +value);
            return this.setState({ [name]: value, price: plan.price });
        }
        this.setState({ [name]: files ? files[0] : value });
    }

    autoRenewHandler = () => {
        this.props.autoRenew();
    }



    // Lifecycle methods
    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.auto_renew !== nextProps.auth.data.auto_renew) return updateObject(prevState, { auto_renew: nextProps.auth.data.auto_renew });
        else if (prevState.type === '' && nextProps.backend.restaurants.types && location.search) {
            const searchParams = new URLSearchParams(location.search);

            const type = searchParams.get('type');
            const plan_id = searchParams.get('plan_id');
            const { price } = nextProps.backend.restaurants.types.find(t => +t.months === +type).plans.find(plan => +plan.id === +plan_id);

            return updateObject(prevState, { type, plan_id, price });
        }
        return null;
    }

    componentDidMount() {
        this.props.info();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { backend: { pages: { plans: { subscription, subtitle, instructions, purchase, bought, form } } } }
                }
            },
            backend: { restaurants: { data: { plan, auto_renew }, loading, error, message, types = [], amount } },
        } = this.props;
        let { type, plan_id, price } = this.state;
        let content = null;
        let errors = null;

        const typesOptions = types.sort((a, b) => a.name.localeCompare(b.name)).map(type => <option key={JSON.stringify(type)} value={type.months}>{type.name}</option>);

        let plansOptions = [];
        if (type !== '') plansOptions = types.find(t => +t.months === +type).plans.sort((a, b) => a.name.localeCompare(b.name)).map(plan => <option key={JSON.stringify(plan)} value={plan.id}>{plan.name}</option>);

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;

            if (message && message.type === 'danger') Swal.fire({
                title: message.content,
                text: "Missing amount : " + amount + " USD",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Add balance'
            }).then((result) => {
                if (result.isConfirmed) this.props.history.push('/user/restaurants/' + this.props.match.params.restaurant + '/edit/recharges?status=0&amount=' + amount)
            });

            content = (
                <>
                    <Col lg={8} xl={6} className="col-xxl-4">
                        {message && message.type === 'success' && <Feedback message={message} />}

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
            <div className="Purchase">
                <TitleWrapper>
                    <div className="d-flex align-items-center">
                        <div>
                            <SpecialTitle>{subscription}</SpecialTitle>
                            <Subtitle>{purchase}</Subtitle>
                        </div>

                        {plan && <div className="ml-4 pl-2">
                            <div className="p-3 position-relative bg-orange-20 rounded-4 d-flex align-items-end">
                                <div className="text-white bg-orange rounded-pill py-1 px-3 position-absolute text-14 current-plan">Current Plan</div>

                                <div className="mx-4 pl-1 pr-3">
                                    <div className="text-orange text-32 text-700">{plan.name}</div>

                                    <div className="text-11 text-300">{plan.months === 1 ? 'Monthly' : 'Yearly'}</div>
                                </div>

                                <div className="pr-1 d-flex flex-column align-items-center">
                                    <div className="mb-1">
                                        <div className={"rounded-pill d-flex align-items-center position-relative auto-renew " + (auto_renew === 1 ? "on" : "off") + " text-11 p-1"}>
                                            <div className="circle rounded-circle" onClick={this.autoRenewHandler} />

                                            <div className="off mr-1">Off</div>

                                            <div className="on">On</div>
                                        </div>
                                    </div>

                                    <div className="text-8 text-300">Auto renew</div>
                                </div>
                            </div>
                        </div>}
                    </div>
                </TitleWrapper>

                <div>
                    {errors}
                    <Row>
                        <Form onSubmit={this.submitHandler} icon={icon} title={purchase} subtitle={subtitle} list={bought} link={"/user/restaurants/" + this.props.match.params.restaurant + "/edit/plans"} innerClassName="row justify-content-center">
                            {content}
                        </Form>
                    </Row>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    info: () => dispatch(backendActions.infoRestaurantsEdit('plans')),
    purchase: data => dispatch(backendActions.postRestaurantsEdit('plans', data)),

    autoRenew: () => dispatch(backendActions.postRestaurantsEdit('plans/auto-renew')),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Purchase));