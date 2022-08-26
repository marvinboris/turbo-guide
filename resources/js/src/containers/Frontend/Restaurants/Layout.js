import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import MenuLoading from './UI/MenuLoading';
import SplashScreen from './UI/SplashScreen';

import { getRestaurant } from '../../../store/actions/frontend/restaurants';

import './Frontend.scss';

class Layout extends Component {
    state = {
        isMounted: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isMounted: true }, () => setTimeout(() => {
                this.props.get(this.props.match.params.slug);
            }, 1000));
        }, 1000);
    }

    render() {
        const {
            frontend: { restaurants: { loading, restaurant } },
            children
        } = this.props;

        return <div className="Frontend Restaurants">
            <div className="content">
                {!this.state.isMounted ? <SplashScreen /> : <MenuLoading loading={loading}>
                    {restaurant && <main>
                        {children}
                    </main>}
                </MenuLoading>}
            </div>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: slug => dispatch(getRestaurant(slug)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));