import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faClock, faComment, faList, faMinusCircle, faPlusCircle, faTimesCircle, faTruck } from '@fortawesome/free-solid-svg-icons';

import Stars from '../../../../../components/UI/Stars';
import Error from '../../../../../components/Error/Error';
import View from '../../../../../components/Backend/UI/View/View';

import './Layout.css';

import * as actions from '../../../../../store/actions/frontend';

const Wrapper = ({ children, className, style }) => <div className={className} style={{ padding: '12px 11px', ...style }}>
    {children}
</div>;

const NavItem = ({ to, icon, children, className = '' }) => <NavLink to={to} exact activeClassName="active" className={"NavItem d-flex align-items-center text-decoration-none rounded-pill " + className}>
    <div className="text-7"><FontAwesomeIcon icon={icon} /></div>

    <div className="mx-1"><div className="line" /></div>

    <div className="text-10">{children}</div>
</NavLink>;

class Layout extends Component {
    componentDidMount() {
        this.props.get(this.props.match.params.slug, this.props.match.params.id, !this.props.frontend.restaurants.restaurant);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let {
            content: {
                cms: { pages: { general, frontend: { restaurants: { meals } } } },
                currencies,
            },
            frontend: {
                restaurants: { loading, error, meal, total = 0, qty = 1, currency, position }
            },
            match: { params: { slug } },
            children
        } = this.props;
        const lang = localStorage.getItem('lang');
        if (!meal || (meal && Object.keys(meal).length === 0)) meal = { name: {} };

        let errors = null;
        if (error) errors = <>
            <Error err={error} />
        </>;

        const currencyObj = currencies.find(c => c.cc === currency);
        const symbol = currencyObj && currencyObj.symbol;

        return <div className="Layout">
            <View content={<img src={meal.photo} className="img-fluid w-100" />}>
                <div className="embed-responsive embed-responsive-16by9 position-relative">
                    <div className="position-absolute w-100 h-100" style={{
                        top: 0,
                        left: 0,
                        backgroundImage: `linear-gradient(rgba(2,35,67,.4),rgba(2,35,67,.4)), url('${meal.photo}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'auto, cover',
                    }} />

                    <div className="position-absolute" style={{ top: 23, right: 30 }}>
                        <Link to={`/restaurants/${slug}`} className="text-decoration-none text-reset text-16">
                            <FontAwesomeIcon icon={faTimesCircle} className="text-soft" />
                        </Link>
                    </div>

                    <div className="position-absolute" style={{ top: 42, left: 30 }}>
                        <div className="rounded-4 bg-orange text-white text-12 py-1 px-2">{meal.reference}</div>
                    </div>
                </div>
            </View>

            <Wrapper className="bg-orange-10 position-relative">
                <div className="text-500 text-17 text-orange mb-2 meal-name">
                    {meal.name[lang]}
                </div>

                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center mr-2">
                        <div className="rounded-pill text-10 px-1 bg-orange-30 text-orange d-flex align-items-center" style={{ paddingTop: 1, paddingBottom: 1 }}>
                            <FontAwesomeIcon icon={faClock} className="text-6 mr-1" />

                            <span className="text-8">{meal.time} Min</span>
                        </div>

                        {meal.delivery && <div className="rounded-pill text-10 px-1 ml-2 bg-green-30 text-darkgreen d-flex align-items-center" style={{ paddingTop: 1, paddingBottom: 1 }}>
                            <FontAwesomeIcon icon={faTruck} className="text-6 mr-1" />

                            <span className="text-8">Delivery</span>
                        </div>}
                    </div>

                    <div className="d-flex align-items-center">
                        <div className="mr-2 text-8">Ratings</div>

                        {meal.mark !== undefined && <div>
                            <Stars readOnly mark={meal.mark} lg />
                        </div>}

                        <div className="ml-1 text-6 text-700 text-orange">{meal.mark !== undefined && <>({meal.mark.toFixed(1)})</>}</div>
                    </div>

                    <div className="ml-auto text-8">
                        {meals.composes}
                    </div>
                </div>

                <div className="price-block text-montserrat text-white">
                    <div className="ticket">
                        <div className="rounded-6 bg-orange py-2 px-3" style={{ width: 140 }}>
                            <div className="text-6">{meals.price} :</div>

                            <div>
                                {position == 0 && <span className="text-8 mr-1">{symbol}</span>}
                                <span className="text-700">{total.toFixed(2)}</span>
                                {position == 1 && <span className="text-8 ml-1">{symbol}</span>}
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-end">
                        <div className="quantity">
                            <div className="rounded-bottom-6 py-1 px-2 bg-green d-flex align-items-center text-7">
                                <div>
                                    <FontAwesomeIcon icon={faMinusCircle} onClick={this.props.sub} />
                                </div>

                                <div className="mx-2">
                                    <div className="px-2 bg-soft-70 text-secondary rounded-pill" style={{ paddingTop: 2, paddingBottom: 2 }}>{qty}</div>
                                </div>

                                <div>
                                    <FontAwesomeIcon icon={faPlusCircle} onClick={this.props.add} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>

            <Wrapper className="border-bottom border-soft d-flex justify-content-center">
                <NavItem to={`/restaurants/${slug}/meals/${meal.id}/addons`} icon={faList}>{meals.addons.title}</NavItem>
                <NavItem to={`/restaurants/${slug}/meals/${meal.id}/description`} icon={faBook} className="mx-2">{meals.description}</NavItem>
                <NavItem to={`/restaurants/${slug}/meals/${meal.id}/comments`} icon={faComment}>{meals.comments.title}</NavItem>
            </Wrapper>

            <div className="overflow-hidden" style={{ padding: '15px 0px' }}>
                {errors}
                {loading ? <div className="text-center">{general.loading}...</div> : children}
            </div>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    add: () => dispatch(actions.addMeal()),
    sub: () => dispatch(actions.subMeal()),
    get: (slug, id, restaurant) => dispatch(actions.getRestaurantsMeal(slug, id, restaurant)),
    reset: () => dispatch(actions.resetRestaurants(true)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));