import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBox } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../components/Backend/UI/List/List';
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';

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
                    pages: { components: { list: { action } }, backend: { pages: { plans: { title, add, bought, form } } } }
                }
            },
            backend: { plans: { loading, error, message, plans, total } },
            auth: { data: { role: { features } } }
        } = this.props;

        const feature = features.find(f => f.prefix === 'plans');
        const redirect = !feature && <Redirect to="/user/dashboard" />;

        const errors = <>
            <Error err={error} />
        </>;
        const flash = this.props.location.state ? <Feedback time={5000} message={this.props.location.state.message} /> : null;
        const feedback = <Feedback message={message} />;

        if (!plans) plans = [];
        const data = plans.map(plan => {
            return updateObject(plan, {
                expiry_date: convertDate(plan.expiry_date),
                created_at: convertDate(plan.created_at),
                action: <div className="text-center">
                    <Link to={`/user/plans/bought/${plan.id}`} className="mx-1">
                        <FontAwesomeIcon icon={faEye} className="text-green" fixedWidth />
                    </Link>
                </div>,
            });
        });

        const content = (
            <>
                <Row>
                    <List array={data} loading={loading} data={JSON.stringify(plans)} get={this.props.get} total={total} bordered add={add} link="/user/plans/add" icon={faBox} title={bought} className="shadow-sm"
                        fields={[
                            { name: form.restaurant, key: 'restaurant' },
                            { name: form.plan, key: 'plan' },
                            { name: form.type, key: 'type' },
                            { name: form.expiry_date, key: 'expiry_date' },
                            { name: form.created_at, key: 'created_at' },
                            { name: action, key: 'action', fixed: true }
                        ]} />
                </Row>
            </>
        );

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb main={bought} icon={faBox} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{bought}</Subtitle>
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
    get: (page, show, search) => dispatch(actions.getPlansBought(page, show, search)),
    reset: () => dispatch(actions.resetPlans()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));