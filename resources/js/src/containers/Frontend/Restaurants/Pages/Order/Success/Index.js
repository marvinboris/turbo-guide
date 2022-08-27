import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Error from '../../../../../../components/Error/Error';

import './Success.scss';

class Success extends Component {
    render() {
        const {
            content: {
                cms: { pages: { frontend: { restaurants: { order: { success: cms } } } } },
            },
            frontend: { restaurants: { error } },
            match: { params: { slug } },
            location: { state: { order_no } }
        } = this.props;

        const errors = <>
            <Error err={error} />
        </>;

        return <div className="Page Success">
            <main>
                {errors}

                <div className='title'>{cms.title}</div>

                <div className='icon'>
                    <i className='fas fa-check' />
                </div>

                <div className='actions'>
                    <button onClick={() => this.props.history.push({ pathname: `/restaurants/${slug}/order/tracking`, state: { order_no } })} className='btn btn-white'>{cms.track_order}</button>

                    <Link to={`/restaurants/${slug}`} className='btn btn-orange'><i className='fas fa-arrow-left' />{cms.go_home}</Link>
                </div>
            </main>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

export default withRouter(connect(mapStateToProps)(Success));