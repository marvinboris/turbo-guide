import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faClock, faComment, faList, faMinusCircle, faPlusCircle, faTimesCircle, faTruck } from '@fortawesome/free-solid-svg-icons';

import Cart from '../../../../../components/Frontend/UI/Cart';

import Stars from '../../../../../components/UI/Stars';

import Error from '../../../../../components/Error/Error';
import View from '../../../../../components/Backend/UI/View/View';

import { addItem, subItem, resetRestaurants, getRestaurantsMeal } from '../../../../../store/actions/frontend/restaurants';

import './Layout.scss';

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
        this.props.get(this.props.match.params.slug, this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let {
            content: {
                cms: { pages: { general, frontend: { restaurants: { meals } } } },
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

        return <div className="Layout">
            <header>
                <Link to={`/restaurants/${slug}`} className='back'>
                    <i className='fas fa-angle-left' />
                </Link>

                <div className='meal-name'>
                    <div>{meal.name[lang]}</div>
                </div>

                <div>
                    <Cart />
                </div>
            </header>

            <main>
                <section className='banner'>
                    <div className="embed-responsive embed-responsive-16by9" style={{ backgroundImage: `url('${meal.photo}')` }}>
                        <div className='wrapper'>
                            <div className='time'>
                                <i className='fas fa-clock' />

                                <span><strong>{meal.time}</strong> {meals.min}</span>
                            </div>

                            <div className='reference'><span>{meals.no}. {meal.reference}</span></div>

                            <div className='add-to-cart'>
                                <button className='btn btn-white' onClick={() => this.props.add(slug, meal)}><i className='fas fa-plus' />{meals.add_to_cart}</button>
                            </div>

                            <div className='price'><span><strong>{meal.price}</strong>{currency}</span></div>
                        </div>
                    </div>
                </section>

                {errors}

                <section>
                    {loading ? <div className="text-center">{general.loading}...</div> : children}
                </section>
            </main>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: (slug, id) => dispatch(getRestaurantsMeal(slug, id)),
    add: (slug, item) => dispatch(addItem(slug, 'meal', item)),
    sub: (slug, item) => dispatch(subItem(slug, 'meal', item)),
    reset: () => dispatch(resetRestaurants(true)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));