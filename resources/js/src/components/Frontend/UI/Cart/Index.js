import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import './Cart.scss';

class Cart extends Component {
    render() {
        const {
            frontend: { restaurants: { restaurant: { cart } } },
            match: { params: { slug } }
        } = this.props;

        return <Link to={`/restaurants/${slug}/cart`} className='UI Cart'>
            <i className='fas fa-shopping-cart' />

            <div className='qty'>{cart.items.reduce((a, b) => a + b.qty, 0)}</div>
        </Link>;
    }
}

const mapStateToProps = state => ({ ...state });

export default withRouter(connect(mapStateToProps)(Cart));