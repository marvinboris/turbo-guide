import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row } from 'reactstrap';
import { faCookie } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../components/Backend/UI/Food/List';
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import Addon from '../../../../components/Backend/UI/Food/Addon';

import * as actions from '../../../../store/actions';

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
                    pages: { backend: { pages: { addons: { title, add, index, subtitle } } } }
                }
            },
            backend: { addons: { loading, error, message, addons = [], total } },
        } = this.props;

        const errors = <>
            <Error err={error} />
        </>;
        const feedback = <Feedback message={message} />;

        const content = (
            <>
                <Row>
                    <List array={addons} loading={loading} get={this.props.get} total={total} add={add} link="/restaurant/addons/add" icon={faCookie} title={index} subtitle={subtitle} className="shadow-sm" render={addon => <Addon {...addon} />} />
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
                    {feedback}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: search => dispatch(actions.getAddons(search)),
    reset: () => dispatch(actions.resetAddons()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));