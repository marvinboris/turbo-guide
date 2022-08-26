import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import Wrapper from '../Wrapper';

import Addon from '../../../../../components/Frontend/UI/Food/Addon';
import Category from '../../../../../components/Frontend/UI/Category';

import { addItem, subItem } from '../../../../../store/actions/frontend/restaurants';

import './Addons.scss';

class Addons extends Component {
    async componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const {
            content: {
                cms: { pages: { frontend: { restaurants: { meals, cart } } } },
                currencies,
            },
            frontend: { restaurants: { restaurant = {}, total = 0, addons = [], drinks = [], currency, position } },
            match: { params: { slug } },
        } = this.props;

        const currencyObj = currencies.find(c => c.cc === currency);
        const symbol = currencyObj && currencyObj.cc;
        const lang = localStorage.getItem('lang');

        const addonsContent = addons.map(item => <Addon key={item.id + Math.random()} symbol={symbol} position={position} {...{ ...item, name: item.name[lang] }} add={() => this.props.add(slug, 'addon', item)} />);
        const drinksContent = drinks.map(item => <Addon key={item.id + Math.random()} symbol={symbol} position={position} {...{ ...item, name: item.name[lang] }} add={() => this.props.add(slug, 'drink', item)} />);

        return <div className="Addons">
            {restaurant.caution[lang] && <Wrapper className="pb-4 mb-2">
                <div className="rounded-8 bg-soft py-2 px-3 text-10">
                    {restaurant.caution[lang]}
                </div>
            </Wrapper>}

            <p>{restaurant.extra_addon ? restaurant.extra_addon[lang] : meals.addons.extra}</p>

            <div className='categories'>
                <Category name={meals.addons.addons} id="addons">
                    {addonsContent}
                </Category>

                <Category name={meals.addons.drinks} id="drinks">
                    {drinksContent}
                </Category>
            </div>

            <div className="checkout">
                <div className="total">
                    <div className="text">{cart.total_items}</div>

                    <div className="price">
                        {position == 0 && <span>{symbol}{' '}</span>}
                        <span className="value">{restaurant.cart.total}</span>
                        {position == 1 && <span>{' '}{symbol}</span>}
                    </div>
                </div>

                <div className="go-to-cart">
                    <Link to={`/restaurants/${slug}/cart`} className="btn btn-white">
                        <div className="items"><div>{restaurant.cart.items.reduce((a, b) => a + b.qty, 0)}</div></div>

                        <div className="text">{cart.go_to_cart}</div>

                        <div className="icon"><i className="fas fa-arrow-right" /></div>
                    </Link>
                </div>
            </div>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    add: (slug, type, item) => dispatch(addItem(slug, type, item)),
    sub: (slug, type, item) => dispatch(subItem(slug, type, item)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Addons));