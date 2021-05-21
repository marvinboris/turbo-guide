import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faEye } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import TitleWrapper from '../../../../../../components/Backend/UI/TitleWrapper';
import SpecialTitle from '../../../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../../../components/UI/Titles/Subtitle/Subtitle';
import Table from '../../../../../../components/Backend/UI/Food/Table';
import Error from '../../../../../../components/Error/Error';
import Feedback from '../../../../../../components/Feedback/Feedback';

import * as actions from '../../../../../../store/actions/backend/restaurants';
import { convertDate, updateObject } from '../../../../../../shared/utility';

class Index extends Component {
    componentDidMount() {
        this.props.get();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { list: { action } }, backend: { pages: { plans: { subscription, subtitle, bought, form } } } }
                }
            },
            backend: { restaurants: { loading, error, message, plans, total } },
        } = this.props;

        const errors = <>
            <Error err={error} />
        </>;
        const feedback = <Feedback message={message} />;

        if (!plans) plans = [];
        const data = plans.map(plan => {
            return updateObject(plan, {
                created_at: convertDate(plan.created_at),
                expiry_date: convertDate(plan.expiry_date),
                type: { 1: 'Monthly', 12: 'Yearly' }[plan.months],
                action: <div className="text-center">
                    <Link to={`/user/restaurants/${this.props.match.params.restaurant}/edit/plans/${plan.pivot.id}`} className="mx-1">
                        <FontAwesomeIcon icon={faEye} className="text-green" fixedWidth />
                    </Link>
                </div>,
            });
        });

        const content = (
            <>
                <Row>
                    <Table array={data} loading={loading} data={JSON.stringify(plans)} get={this.props.get} total={total} bordered icon={faBox} title={bought} subtitle={subtitle} className="shadow-sm"
                        fields={[
                            { name: form.created_at, key: 'created_at' },
                            { name: form.expiry_date, key: 'expiry_date' },
                            { name: form.name, key: 'name' },
                            { name: form.amount, key: 'price' },
                            { name: form.type, key: 'type' },
                            { name: action, key: 'action' }
                        ]} />
                </Row>
            </>
        );

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb main={bought} icon={faBox} />
                    <SpecialTitle>{subscription}</SpecialTitle>
                    <Subtitle>{bought}</Subtitle>
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
    get: (page, show, search) => dispatch(actions.getRestaurantsEdit('plans', page, show, search)),
    delete: id => dispatch(actions.deleteRestaurantsEdit('plans', id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));