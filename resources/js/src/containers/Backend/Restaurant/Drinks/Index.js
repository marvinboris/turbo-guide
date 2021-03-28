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
import Drink from '../../../../components/Backend/UI/Food/Drink';

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
                    pages: { backend: { pages: { drinks: { title, add, index, subtitle } } } }
                }
            },
            backend: { drinks: { loading, error, message, drinks = [], total } },
        } = this.props;

        const errors = <>
            <Error err={error} />
        </>;
        const feedback = <Feedback message={message} />;

        const content = (
            <>
                <Row>
                    <List array={drinks} loading={loading} get={this.props.get} total={total} add={add} link="/restaurant/drinks/add" icon={faListAlt} title={index} subtitle={subtitle} className="shadow-sm" render={drink => <Drink {...drink} />} />
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
                    {feedback}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: search => dispatch(actions.getDrinks(search)),
    reset: () => dispatch(actions.resetDrinks()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));