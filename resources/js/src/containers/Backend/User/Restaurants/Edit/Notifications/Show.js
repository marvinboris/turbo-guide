import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Badge, Card, CardHeader, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faShoppingCart, faMoneyBillWaveAlt } from '@fortawesome/free-solid-svg-icons';

// Components
import TitleWrapper from '../../../../../../components/Backend/UI/TitleWrapper';
import Breadcrumb from '../../../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../../../components/UI/Titles/Subtitle/Subtitle';
import Error from '../../../../../../components/Error/Error';
import Feedback from '../../../../../../components/Feedback/Feedback';
import CustomSpinner from '../../../../../../components/UI/CustomSpinner/CustomSpinner';

import * as actions from '../../../../../../store/actions/backend/restaurants';
import { convertDate } from '../../../../../../shared/utility';

class Notification extends Component {
    componentDidMount() {
        this.props.show(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) this.props.show(this.props.match.params.id);
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { backend: { pages: { notifications: { index, title, show } } } }
                }
            },
            backend: { restaurants: { data: { name }, loading, error, message, notification } },
        } = this.props;
        let content = null;

        const errors = <>
            <Error err={error} />
        </>;
        const feedback = <Feedback message={message} />;

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            if (notification) {
                let message, title, icon, color;
                switch (notification.type) {
                    case 'App\\Notifications\\PlanPurchase':
                        title = 'Plan Purchase';
                        icon = <FontAwesomeIcon className="text-success" size="2x" fixedWidth icon={faShoppingCart} />;
                        message = <>You successfully bought a {notification.data.name} plan.</>;
                        break;

                    case 'App\\Notifications\\PlanImminentExpiration':
                        title = 'Plan Imminent Expiration';
                        icon = <FontAwesomeIcon className="text-orange" size="2x" fixedWidth icon={faShoppingCart} />;
                        message = <>Your {notification.data.name} plan will expire in {notification.data.days} {notification.data.days > 1 ? 's' : ''}.</>;
                        break;

                    case 'App\\Notifications\\PlanExpired':
                        title = 'Plan Expired';
                        icon = <FontAwesomeIcon className="text-red" size="2x" fixedWidth icon={faShoppingCart} />;
                        message = <>Your {notification.data.name} plan has just expired.</>;
                        break;

                    case 'App\\Notifications\\RestaurantRecharge':
                        title = 'Recharge';
                        icon = <FontAwesomeIcon className="text-primary" size="2x" fixedWidth icon={faMoneyBillWaveAlt} />;
                        message = <>You successfully made a {notification.data.amount} USD{notification.data.method && (notification.data.method.name + ' ')} recharge.</>;
                        break;

                    default:
                        break;
                }

                content = <Card className="bg-soft">
                    <CardHeader className="d-flex align-items-center">
                        <div>{icon}</div>
                        <div className="pl-3">
                            <h4>{title}</h4>
                            {message}
                        </div>
                        <div className="ml-auto">
                            <Badge color={color} className="position-static">{title}</Badge>
                            <div className="ml-auto">{convertDate(notification.created_at)}</div>
                        </div>
                    </CardHeader>
                    <CardBody className="bg-light-50">
                        <p>Hi, <span className="text-capitalize text-700">{name}</span></p>
                        {message}
                    </CardBody>
                </Card>;
            }
        }

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb items={[{ to: '/user/restaurants/' + this.props.match.params.restaurant + '/edit/notifications', content: index }]} main={show} icon={faBell} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{show}</Subtitle>
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
    show: id => dispatch(actions.showRestaurantsEdit('notifications', id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Notification));