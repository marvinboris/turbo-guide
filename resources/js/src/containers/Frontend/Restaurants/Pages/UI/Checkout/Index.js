import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Checkout.scss';

class Checkout extends Component {
    render() {
        const {
            content: { currencies },
            frontend: { restaurants: { restaurant: { cart }, currency, position } },
            title, label, value, onClick
        } = this.props;

        const currencyObj = currencies.find(c => c.cc === currency);
        const symbol = currencyObj && currencyObj.cc;

        return <div className="UI Checkout">
            <div className="total">
                <div className="text">{title}</div>

                <div className="price">
                    {position == 0 && <span>{symbol}{' '}</span>}
                    <span className="value">{value}</span>
                    {position == 1 && <span>{' '}{symbol}</span>}
                </div>
            </div>

            <div className="go-to-cart">
                <button onClick={onClick} className="btn btn-white">
                    <div className="items"><div>{cart.items.reduce((a, b) => a + b.qty, 0)}</div></div>

                    <div className="text">{label}</div>

                    <div className="icon"><i className="fas fa-arrow-right" /></div>
                </button>
            </div>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Checkout);