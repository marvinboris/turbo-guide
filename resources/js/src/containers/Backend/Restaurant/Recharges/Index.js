import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Button, CustomInput, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faEye, faMoneyBillWaveAlt } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Table from '../../../../components/Backend/UI/Food/Table';
import Error from '../../../../components/Error/Error';
import FormInput from '../../../../components/UI/Input/Input';
import Feedback from '../../../../components/Feedback/Feedback';

import * as actions from '../../../../store/actions/backend';
import { convertDate, updateObject } from '../../../../shared/utility';

class Index extends Component {
    state = {
        amount: '',
        method_id: '',
    }

    componentDidMount() {
        this.props.get();
    }

    componentDidUpdate() {
        if (this.props.backend.recharges.link) window.location.href = this.props.backend.recharges.link;
    }

    componentWillUnmount() {
        this.props.reset();
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.post(e.target);
    }

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        this.setState({ [name]: files ? files[0] : value });
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { list: { action } }, backend: { pages: { recharges: { title, subtitle, instructions, index, form } } } }
                }
            },
            backend: { recharges: { loading, error, message, recharges, total, methods = [] } },
        } = this.props;
        const { amount, method_id } = this.state;

        const errors = <>
            <Error err={error} />
        </>;
        const feedback = <Feedback message={message} />;

        if (!recharges) recharges = [];
        const data = recharges.map(recharge => {
            return updateObject(recharge, {
                created_at: convertDate(recharge.created_at),
                action: <div className="text-center">
                    <Link to={`/restaurant/recharges/${recharge.id}`} className="mx-1">
                        <FontAwesomeIcon icon={faEye} className="text-green" fixedWidth />
                    </Link>
                </div>,
            });
        });

        const methodsOptions = methods.sort((a, b) => a.name > b.name).map(method => <option key={JSON.stringify(method)} value={method.id}>{method.name}</option>);

        const content = (
            <>
                <Row>
                    <Table array={data} loading={loading} data={JSON.stringify(recharges)} get={this.props.get} total={total} bordered icon={faMoneyBillWaveAlt} title={index} subtitle={subtitle} className="shadow-sm"
                        fields={[
                            { name: form.created_at, key: 'created_at' },
                            { name: form.method, key: 'method' },
                            { name: form.amount, key: 'amount' },
                            { name: form.status, key: 'status' },
                            { name: action, key: 'action' }
                        ]}
                        containerClassName = "col-xl-8"
                        addon={<div className="col-xl-4">
                            <form onSubmit={this.submitHandler}>
                                <Feedback message={message} />

                                <div className="shadow-sm rounded-8 bg-white px-5 py-4">
                                    <Row className="my-3">
                                        <div className="mb-3 text-14 col-12">{instructions}</div>

                                        <div className="col-lg-12">
                                            <Row>
                                                <FormInput type="number" className="col-md-12" icon={faMoneyBillWaveAlt} onChange={this.inputChangeHandler} value={amount} name="amount" required placeholder={form.amount} />
                                                <FormInput type="select" className="col-md-12" icon={faCreditCard} onChange={this.inputChangeHandler} value={method_id} name="method_id" required>
                                                    <option>{form.select_method}</option>
                                                    {methodsOptions}
                                                </FormInput>
                                            </Row>
                                            <div className="my-4">
                                                <CustomInput type="checkbox" name="terms" id="terms" label={form.terms} />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <Button color="green" className="text-20 rounded-4 py-3 px-4">
                                                <div>{form.process}</div>
                                            </Button>
                                        </div>
                                    </Row>
                                </div>
                            </form>
                        </div>}
                    />
                </Row>
            </>
        );

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb main={index} icon={faMoneyBillWaveAlt} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{index}</Subtitle>
                </TitleWrapper>
                <div>
                    {errors}
                    {feedback}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: (page, show, search) => dispatch(actions.getRecharges(page, show, search)),
    post: data => dispatch(actions.postRecharges(data)),
    delete: id => dispatch(actions.deleteRecharges(id)),
    reset: () => dispatch(actions.resetRecharges()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));