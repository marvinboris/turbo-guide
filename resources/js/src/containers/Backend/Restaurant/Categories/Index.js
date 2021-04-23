import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row } from 'reactstrap';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../components/Backend/UI/Food/List';
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import Category from '../../../../components/Backend/UI/Food/Category';

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
                    pages: { backend: { pages: { categories: { title, add, index, subtitle } } } }
                }
            },
            backend: { categories: { loading, error, message, categories = [], total } },
        } = this.props;

        const errors = <>
            <Error err={error} />
        </>;
        const flash = this.props.location.state ? <Feedback time={5000} message={this.props.location.state.message} /> : null;
        const feedback = <Feedback message={message} />;

        const content = (
            <>
                <Row>
                    <List array={categories} loading={loading} get={this.props.get} total={total} add={add} link="/restaurant/categories/add" icon={faListAlt} title={index} subtitle={subtitle} className="shadow-sm" render={category => <Category {...category} />} />
                </Row>
            </>
        );

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb main={index} icon={faListAlt} />
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
    get: search => dispatch(actions.getCategories(search)),
    reset: () => dispatch(actions.resetCategories()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));