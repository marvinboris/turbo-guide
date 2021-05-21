import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faHome, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

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
                    pages: { components: { list: { action } }, backend: { pages: { restaurants: { title, add, index, form } } } }
                }
            },
            backend: { restaurants: { loading, error, message, restaurants, total } },
            auth: { data: { role: { features } } }
        } = this.props;

        const feature = features.find(f => f.prefix === 'restaurants');
        const redirect = !feature && <Redirect to="/user/dashboard" />;

        const errors = <>
            <Error err={error} />
        </>;
        const flash = this.props.location.state ? <Feedback time={5000} message={this.props.location.state.message} /> : null;
        const feedback = <Feedback message={message} />;

        if (!restaurants) restaurants = [];
        const data = restaurants.map(restaurant => {
            return updateObject(restaurant, {
                created_at: convertDate(restaurant.created_at),
                country: <div>
                    <span className={`flag-icon flag-icon-${(restaurant.country || '').toLowerCase()} mr-1`} />{restaurant.country}
                </div>,
                action: <div className="text-center">
                    {JSON.parse(feature.permissions).includes('u') && <Link target="_blank" to={`/user/restaurants/${restaurant.id}/edit`} className="mx-1">
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="text-brokenblue" fixedWidth />
                    </Link>}
                    {JSON.parse(feature.permissions).includes('d') && <span className="mx-1"><Delete deleteAction={() => this.props.delete(restaurant.id)}><FontAwesomeIcon icon={faTrash} className="text-red" fixedWidth /></Delete></span>}
                </div>,
            });
        });

        const content = (
            <>
                <Row>
                    <List array={data} loading={loading} data={JSON.stringify(restaurants)} get={this.props.get} total={total} bordered add={add} link="/user/restaurants/add" icon={faHome} title={index} className="shadow-sm"
                        fields={[
                            { name: form.name, key: 'name' },
                            { name: form.token, key: 'token' },
                            { name: form.owner, key: 'owner' },
                            { name: form.email, key: 'email' },
                            { name: form.country, key: 'country' },
                            { name: form.phone, key: 'phone' },
                            { name: form.created_at, key: 'created_at' },
                            { name: action, key: 'action', fixed: true }
                        ]} />
                </Row>
            </>
        );

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb main={index} icon={faHome} />
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
    get: (page, show, search) => dispatch(actions.getRestaurants(page, show, search)),
    delete: id => dispatch(actions.deleteRestaurants(id)),
    reset: () => dispatch(actions.resetRestaurants()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));