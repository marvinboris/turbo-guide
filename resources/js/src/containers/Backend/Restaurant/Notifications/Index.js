import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Col, ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faShoppingCart, faMoneyBillWaveAlt } from '@fortawesome/free-solid-svg-icons';

// Components
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';

import * as actions from '../../../../store/actions/backend';
import { convertDate } from '../../../../shared/utility';

class Notifications extends Component {
    componentDidMount() {
        this.props.get();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { backend: { pages: { notifications: { title, index, form } } } }
                }
            },
            backend: { notifications: { loading, error, message, notifications } },
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
            if (notifications) {
                const notificationsData = notifications.map(notification => {
                    let message, title, icon;
                    switch (notification.type) {
                        case 'App\\Notifications\\PlanPurchase':
                            title = 'Plan Purchase';
                            icon = <FontAwesomeIcon className="text-green" size="2x" fixedWidth icon={faShoppingCart} />;
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

                    return <ListGroupItem key={"list-group-item-notification-" + notification.id} color="soft" className="border-darkblue-20">
                        <Link to={"/restaurant/notifications/" + notification.id} className="text-reset text-decoration-none">
                            <div className="d-flex align-items-center">
                                <div>{icon}</div>

                                <div className="pl-3">
                                    <h4>{title}</h4>

                                    {message}
                                </div>

                                <div className="ml-auto">{convertDate(notification.created_at)}</div>
                            </div>
                        </Link>
                    </ListGroupItem>;
                });

                content = notifications.legnth === 0 ? <div className="text-center h1">{form.you_have_no_notification}</div> : <ListGroup>
                    {notificationsData}
                </ListGroup>;
            }
        }

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb main={index} icon={faBell} />
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
    get: () => dispatch(actions.getNotifications()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Notifications));