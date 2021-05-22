import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faComment } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import TitleWrapper from '../../../../../../components/Backend/UI/TitleWrapper';
import SpecialTitle from '../../../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../../../components/UI/Titles/Subtitle/Subtitle';
import Table from '../../../../../../components/Backend/UI/Food/Table';
import Error from '../../../../../../components/Error/Error';
import Feedback from '../../../../../../components/Feedback/Feedback';
import Delete from '../../../../../../components/Backend/UI/Delete/Delete';

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
                    pages: { components: { list: { action } }, backend: { pages: { comments: { title, subtitle, index, form } } } }
                }
            },
            backend: { restaurants: { data: { plan }, loading, error, message, comments = [], total } },
        } = this.props;
        
        const errors = <>
            <Error err={error} />
        </>;
        const feedback = <Feedback message={message} />;
        const lang = localStorage.getItem('lang');

        if (!comments || typeof comments !== "object") comments = [];
        const data = comments.map(comment => {
            return updateObject(comment, {
                meal: comment.meal[lang],
                created_at: convertDate(comment.created_at),
                action: <div className="text-center">
                    <Link to={`/user/restaurants/${this.props.match.params.restaurant}/edit/comments/${comment.id}`} className="mr-2">
                        <FontAwesomeIcon icon={faEye} className="text-green" fixedWidth />
                    </Link>
                    <span className="mx-1"><Delete deleteAction={() => this.props.delete(comment.id)}><FontAwesomeIcon icon={faTrash} className="text-red" fixedWidth /></Delete></span>
                </div>,
            });
        });

        const content = (
            <>
                <Row>
                    <Table array={data} loading={loading} data={JSON.stringify(comments)} get={this.props.get} total={total} bordered icon={faComment} title={index} subtitle={subtitle} className="shadow-sm"
                        fields={[
                            { name: form.created_at, key: 'created_at' },
                            { name: form.name, key: 'name' },
                            { name: form.meal, key: 'meal' },
                            { name: form.body, key: 'body' },
                            { name: form.mark, key: 'mark' },
                            { name: action, key: 'action' }
                        ]} />
                </Row>
            </>
        );

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb main={index} icon={faComment} />
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
    get: (page, show, search) => dispatch(actions.getRestaurantsEdit('comments', page, show, search)),
    delete: id => dispatch(actions.deleteRestaurantsEdit('comments', id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));