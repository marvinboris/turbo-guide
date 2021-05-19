import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { Badge, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faMoneyBillWaveAlt, faSpinner, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../components/Backend/UI/List/List';
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';
import Delete from '../../../../components/Backend/UI/Delete/Delete';

import * as actions from '../../../../store/actions/backend';
import { updateObject, convertDate } from '../../../../shared/utility';

class Index extends Component {
    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { list: { action } }, backend: { pages: { recharges: { title, add, index, form } } } }
                }
            },
            backend: { recharges: { loading, error, message, recharges, total } },
            auth: { data: { role: { features } } }
        } = this.props;

        const feature = features.find(f => f.prefix === 'recharges');
        const redirect = !feature && <Redirect to="/user/dashboard" />;

        const errors = <>
            <Error err={error} />
        </>;
        const flash = this.props.location.state ? <Feedback time={5000} message={this.props.location.state.message} /> : null;
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
                    <Link to={`/user/recharges/${recharge.id}`} className="mx-1">
                        <FontAwesomeIcon icon={faEye} className="text-green" fixedWidth />
                    </Link>
                </div>,
            });
        });

        const content = (
            <>
                <Row>
                    <List array={data} loading={loading} data={JSON.stringify(recharges)} get={this.props.get} total={total} bordered add={add} link="/user/recharges/add" icon={faMoneyBillWaveAlt} title={index} className="shadow-sm"
                        fields={[
                            { name: form.restaurant, key: 'restaurant' },
                            { name: form.method, key: 'method' },
                            { name: form.amount, key: 'amount' },
                            { name: form.status, key: 'status', minWidth: 130 },
                            { name: form.created_at, key: 'created_at' },
                            { name: action, key: 'action', fixed: true }
                        ]} />
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
                    {redirect}
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
    get: (page, show, search) => dispatch(actions.getRecharges(page, show, search)),
    delete: id => dispatch(actions.deleteRecharges(id)),
    reset: () => dispatch(actions.resetRecharges()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));