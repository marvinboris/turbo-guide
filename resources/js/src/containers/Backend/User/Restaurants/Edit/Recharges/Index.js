import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Badge, Button, CustomInput, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCreditCard, faEye, faMoneyBillWaveAlt, faSpinner, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import TitleWrapper from '../../../../../../components/Backend/UI/TitleWrapper';
import SpecialTitle from '../../../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../../../components/UI/Titles/Subtitle/Subtitle';
import Table from '../../../../../../components/Backend/UI/Food/Table';
import Error from '../../../../../../components/Error/Error';
import FormInput from '../../../../../../components/UI/Input/Input';
import Feedback from '../../../../../../components/Feedback/Feedback';

import * as actions from '../../../../../../store/actions/backend/restaurants';
import { convertDate, updateObject } from '../../../../../../shared/utility';

class Index extends Component {
    state = {
        amount: '',
        method_id: '',

        message: null,
    }



    // Component methods

    submitHandler = e => {
        e.preventDefault();
        this.props.post(e.target);
    }

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        this.setState({ [name]: files ? files[0] : value });
    }



    // Lifecycle methods
    componentDidMount() {
        this.props.get();
        if (location.search) {
            const searchParams = new URLSearchParams(location.search);

            const status = searchParams.get('status');
            const amount = searchParams.get('amount');

            if (status == 0) this.setState({ amount });
            else this.setState({
                message: {
                    type: 'success',
                    content: <div>Balance successfully added : <strong>{amount} USD</strong></div>,
                }
            }, () => setTimeout(() => {
                this.setState({ message: null });
            }, 5000));
        }
    }

    componentDidUpdate() {
        if (this.props.backend.recharges.link) window.location.href = this.props.backend.recharges.link;
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { list: { action } }, backend: { pages: { recharges: { title, subtitle, instructions, recharge, form } } } }
                }
            },
            backend: { restaurants: { loading, error, message, recharges, total, methods = [] } },
        } = this.props;
        const { amount, method_id, message: stateMessage } = this.state;

        const errors = <>
            <Error err={error} />
        </>;
        const flash = <Feedback message={stateMessage} />;
        const feedback = <Feedback message={message} />;

        if (!recharges) recharges = [];
        const data = recharges.map(recharge => {
            const colors = ['orange', 'red', 'green'];
            const texts = ['Pending', 'Failed', 'Success'];
            const icons = [faSpinner, faTimesCircle, faCheckCircle];

            return updateObject(recharge, {
                status: <Badge color={colors[recharge.status]} className="badge-block position-static"><FontAwesomeIcon icon={icons[recharge.status]} className={[0].includes(recharge.status) ? "fa-spin" : ""} fixedWidth /> {texts[recharge.status]}</Badge>,
                created_at: convertDate(recharge.created_at),
                action: <div className="text-center">
                    <Link to={`/user/restaurants/${this.props.match.params.restaurant}/edit/recharges/${recharge.id}`} className="mx-1">
                        <FontAwesomeIcon icon={faEye} className="text-green" fixedWidth />
                    </Link>
                </div>,
            });
        });

        const methodsOptions = methods.sort((a, b) => a.name.localeCompare(b.name)).map(method => <option key={JSON.stringify(method)} value={method.id}>{method.name}</option>);

        const content = (
            <>
                <Row>
                    <Table array={data} loading={loading} data={JSON.stringify(recharges)} get={this.props.get} total={total} bordered icon={faMoneyBillWaveAlt} title={recharge} subtitle={subtitle} className="shadow-sm"
                        fields={[
                            { name: form.created_at, key: 'created_at' },
                            { name: form.method, key: 'method' },
                            { name: form.amount, key: 'amount' },
                            { name: form.status, key: 'status', minWidth: 140 },
                            { name: action, key: 'action' }
                        ]}
                        containerClassName="col-xl-8"
                        addon={<div className="col-xl-4 pt-4 pt-xl-0">
                            <form onSubmit={this.submitHandler}>
                                <Feedback message={message} />

                                <div className="shadow-sm rounded-8 bg-white px-4 px-sm-5 py-3 py-sm-4">
                                    <Row className="my-2 my-sm-3">
                                        <div className="mb-3 text-14 col-12">{instructions}</div>

                                        <div className="col-lg-12">
                                            <Row>
                                                <FormInput type="number" className="col-md-12" icon={faMoneyBillWaveAlt} onChange={this.inputChangeHandler} value={amount} name="amount" required placeholder={form.amount} />
                                                <FormInput type="select" className="col-md-12" icon={faCreditCard} onChange={this.inputChangeHandler} value={method_id} name="method_id" required>
                                                    <option>{form.select_method}</option>
                                                    {methodsOptions}
                                                </FormInput>
                                            </Row>
                                            <div className="my-3 my-sm-4">
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
                    <Breadcrumb main={recharge} icon={faMoneyBillWaveAlt} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{recharge}</Subtitle>
                </TitleWrapper>
                <div>
                    {errors}
                    {flash}
                    {feedback}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: (page, show, search) => dispatch(actions.getRestaurantsEdit('recharges', page, show, search)),
    post: data => dispatch(actions.postRestaurantsEdit('recharges', data)),
    delete: id => dispatch(actions.deleteRestaurantsEdit('recharges', id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));