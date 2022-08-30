import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Header from '../UI/Header';
import Checkout from '../UI/Checkout';

import Loading from '../../../../../components/UI/Preloaders/Loading';

import Addon from '../../../../../components/Frontend/UI/Food/Addon';
import Category from '../../../../../components/Frontend/UI/Category';

import { errorAlert } from '../../../../../shared/utility';

import { addItem } from '../../../../../store/actions/frontend/restaurants';

import './Meal.scss';

const Wrapper = ({ children, className, style }) => <div className={className} style={{ padding: '12px 11px', ...style }}>
    {children}
</div>;

class Meal extends Component {
    state = { isMounted: false, componentLoading: false }

    // Lifecycle methods
    componentDidMount() {
        this.setState({ isMounted: true, componentLoading: true }, () => setTimeout(() => {
            this.setState({ componentLoading: false });
        }, 250));
    }

    componentDidUpdate() {
        const { frontend: { restaurants: { error } } } = this.props;
        if (error) errorAlert(error);
    }

    render() {
        const {
            content: {
                cms: { pages: { frontend: { restaurants: { meal: cms } } } },
                currencies
            },
            frontend: { restaurants: { restaurant, meal_addon, addons, currency, position } },
            match: { params: { slug, id } }
        } = this.props;
        const lang = localStorage.getItem('lang');

        const meal = restaurant.meals.find(meal => +meal.id === +id);
        const meal_addons = meal_addon.filter(m => m.meal_id === meal.id).map(m => addons.find(addon => addon.id === m.addon_id));
        const drinks = restaurant.drinks;

        const currencyObj = currencies.find(c => c.cc === currency);
        const symbol = currencyObj && currencyObj.cc;

        const addonsContent = meal_addons.map(item => <Addon key={item.id + Math.random()} symbol={symbol} position={position} {...{ ...item, name: item.name[lang] }} add={() => this.props.addItem(slug, 'addon', item)} />);
        const drinksContent = drinks.map(item => <Addon key={item.id + Math.random()} symbol={symbol} position={position} {...{ ...item, name: item.name[lang] }} add={() => this.props.addItem(slug, 'drink', item)} />);

        const content = <div className="Page Meal">
            <Header name={meal.name[lang]} />

            <main>
                <section className='banner'>
                    <div className="embed-responsive embed-responsive-16by9" style={{ backgroundImage: `url('${meal.photo}')` }}>
                        <div className='wrapper'>
                            <div className='time'>
                                <i className='fas fa-clock' />

                                <span><strong>{meal.time}</strong> {cms.min}</span>
                            </div>

                            <div className='reference'><span>{cms.no}. {meal.reference}</span></div>

                            <div className='add-to-cart'>
                                <button className='btn btn-white' onClick={() => this.props.addItem(slug, 'meal', meal)}><i className='fas fa-plus' />{cms.add_to_cart}</button>
                            </div>

                            <div className='price'><span><strong>{meal.price}</strong>{currency}</span></div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="AddonsDrinks">
                        {restaurant.caution[lang] && <Wrapper className="pb-4 mb-2">
                            <div className="rounded-8 bg-soft py-2 px-3 text-10">
                                {restaurant.caution[lang]}
                            </div>
                        </Wrapper>}

                        <p>{restaurant.extra_addon ? restaurant.extra_addon[lang] : cms.extra}</p>

                        <div className='categories'>
                            <Category name={cms.addons} id="addons">
                                {addonsContent}
                            </Category>

                            <Category name={cms.drinks} id="drinks">
                                {drinksContent}
                            </Category>
                        </div>
                    </div>
                </section>
            </main>

            <Checkout title={cms.cart.total_items} label={cms.cart.go_to_cart} value={restaurant.cart.total} onClick={() => this.props.history.push(`/restaurants/${slug}/cart`)} />
        </div>;

        return <Loading loading={this.state.isMounted && this.state.componentLoading}>
            {content}
        </Loading>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    addItem: (slug, type, item) => dispatch(addItem(slug, type, item)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Meal));