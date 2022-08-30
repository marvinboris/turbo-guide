import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Loading from '../../../../../../components/UI/Preloaders/Loading';

import { errorAlert } from '../../../../../../shared/utility';

import './Success.scss';

class Success extends Component {
    state = {
        isMounted: false,
        componentLoading: false
    }

    componentDidMount() {
        this.setState({ isMounted: true, componentLoading: true }, () => setTimeout(() => {
            this.setState({ componentLoading: false });
        }, 250))
    }

    componentDidUpdate() {
        const { frontend: { restaurants: { error } } } = this.props;
        if (error) errorAlert(error);
    }

    render() {
        const {
            content: {
                cms: { pages: { frontend: { restaurants: { order: { success: cms } } } } },
            },
            match: { params: { slug } },
            location: { state: { order_no, tracking_code } }
        } = this.props;

        const content = <div className="Page Success">
            <main>
                <div className='title'>{cms.title}</div>

                <div className='icon'>
                    <i className='fas fa-check' />
                </div>

                <div className='actions'>
                    <button onClick={() => this.props.history.push({ pathname: `/restaurants/${slug}/order/tracking/${tracking_code}`, state: { order_no } })} className='btn btn-white'>{cms.track_order}</button>

                    <Link to={`/restaurants/${slug}`} className='btn btn-orange'><i className='fas fa-arrow-left' />{cms.go_home}</Link>
                </div>
            </main>
        </div>;

        return <Loading loading={this.state.isMounted && this.state.componentLoading}>
            {content}
        </Loading>;
    }
}

const mapStateToProps = state => ({ ...state });

export default withRouter(connect(mapStateToProps)(Success));