import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

import Wrapper from '../Wrapper';

import Comment from './Comment';

class Comments extends Component {
    render() {
        const { frontend: { meals: { meal = {}, comments = [] } } } = this.props;

        const commentsContent = comments.map(comment => <Comment key={comment.id + Math.random()} {...comment} />);

        return <>
            <Wrapper>
                <div>
                    {commentsContent}
                </div>

                <div className="mb-4">
                    <Link to={`/meals/${meal.id}/comments/add`} className="btn btn-orange text-decoration-none text-11 rounded-pill">
                        <FontAwesomeIcon icon={faComment} className="mr-2" />

                        Post comment
                    </Link>
                </div>

                <div>
                    <div style={{ padding: '12px 33px', margin: '0px -33px' }} className="bg-orange-10 text-300 text-10">
                        Dear customers, we would love to make available more food items
                        but unfortunately kindly note that some of the addons mentioned
                        below might not be available. For special request, please contact us.
                        Thanks for understanding.
                </div>
                </div>
            </Wrapper>
        </>;
    }
}

const mapStateToProps = state => ({ ...state });

export default withRouter(connect(mapStateToProps)(Comments));