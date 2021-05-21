import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row } from 'reactstrap';
import { faCookie } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import TitleWrapper from '../../../../../../components/Backend/UI/TitleWrapper';
import SpecialTitle from '../../../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../../../components/Backend/UI/Food/List';
import Error from '../../../../../../components/Error/Error';
import Feedback from '../../../../../../components/Feedback/Feedback';
import Addon from '../../../../../../components/Backend/UI/Food/Addon';

import * as actions from '../../../../../../store/actions/backend/restaurants';

class Index extends Component {
    componentDidMount() {
        this.props.get();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { backend: { pages: { addons: { title, add, index, subtitle } } } }
                }
            },
            backend: { restaurants: { loading, error, message, addons = [], total } },
        } = this.props;

        const errors = <>
            <Error err={error} />
        </>;
        const flash = this.props.location.state ? <Feedback time={5000} message={this.props.location.state.message} /> : null;
        const feedback = <Feedback message={message} />;
        const lang = localStorage.getItem('lang');

        const content = (
            <>
                <Row>
                    <List array={addons.map(addon => ({
                        ...addon,
                        name: addon.name[lang],
                        description: addon.description[lang],
                    }))} loading={loading} get={this.props.get} total={total} add={add} link={"/user/restaurants/" + this.props.match.params.restaurant + '/edit/addons/add'} icon={faCookie} title={index} subtitle={subtitle} className="shadow-sm" render={addon => <Addon {...addon} />} />
                </Row>
            </>
        );

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb main={index} icon={faCookie} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{index}</Subtitle>
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
    get: search => dispatch(actions.getRestaurantsEdit('addons', search)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));