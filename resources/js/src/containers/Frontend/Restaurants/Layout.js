import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import MenuLoading from './UI/MenuLoading';
import SplashScreen from './UI/SplashScreen';

import { getRestaurant } from '../../../store/actions/frontend/restaurants';

import Loading from '../../../components/UI/Preloaders/Loading';

import './Frontend.scss';

class Layout extends Component {
    state = {
        isMounted: false
    }

    componentDidMount() {
        this.setState({ isMounted: true }, () => this.props.get(this.props.match.params.slug));
    }

    render() {
        const {
            frontend: { restaurants: { loading, restaurant } },
            children
        } = this.props;

        return <div className="Frontend Restaurants">
            <div className="content">
                <Loading loading={this.state.isMounted && loading}>
                    {restaurant && <main>
                        {children}
                    </main>}
                </Loading>
            </div>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: slug => dispatch(getRestaurant(slug)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));