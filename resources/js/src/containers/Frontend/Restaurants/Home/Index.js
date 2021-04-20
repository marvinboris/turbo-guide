import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Meal from '../../../../components/UI/Food/Meal';
import Stars from '../../../../components/UI/Stars';

import Navigation from './Navigation';
import Carousel from './Carousel';
import Spinner from './Spinner';
import SelectCategory from './SelectCategory';

import * as actions from '../../../../store/actions';
import { updateObject } from '../../../../shared/utility';

import './Home.css';

const Wrapper = ({ children, className, style }) => <div className={className} style={{ padding: '12px 11px', ...style }}>
    {children}
</div>;

const Category = ({ children, name, id, active }) => <div id={`category-${id}`} className="category" style={{ padding: '15px 0px' }}>
    {!active && <div className="mb-3 d-flex justify-content-end" style={{ paddingRight: 11 }}>
        <div className="text-13 text-500 px-4 py-2 bg-orange-30 text-orange rounded-pill">
            <div className="px-1">{name}</div>
        </div>
    </div>}

    <div>
        {children}
    </div>
</div>;

const Stack = ({ icon, color, link, className = '' }) => <a href={link} target="_blank" className={`fa-stack fa-2x text-${color} text-10 ${className}`}>
    <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
    <FontAwesomeIcon icon={icon} className="fa-stack-1x fa-inverse" />
</a>;

const Conditional = ({ condition, children }) => condition ? children : null;

class Home extends Component {
    state = {
        id: '',
        categoryOffsets: [],
        modal: false,
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.frontend.restaurants.restaurant && prevState.id === '') {
            const { categories } = nextProps.frontend.restaurants;
            if (categories.length > 0) return updateObject(prevState, { id: categories[0].id });
        }
        return prevState;
    }

    async componentDidMount() {
        this.props.get(this.props.match.params.slug);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.id === '' && this.state.id !== '') {
            const categoryElts = document.getElementsByClassName("category");
            const categoryOffsets = [];
            let i = 0;
            for (const categoryElt of categoryElts) {
                categoryOffsets.push({ id: this.props.frontend.restaurants.categories[i].id, top: categoryElt.offsetTop, height: categoryElt.offsetHeight });
                i++;
            }
            this.setState({ categoryOffsets }, () => document.addEventListener('scroll', this.scrollHandler));
        }
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.scrollHandler);
    }

    scrollHandler = () => {
        const stickyBlockHeight = document.querySelector(".sticky-top").offsetHeight;
        const scrollTop = window.scrollY;

        const { categoryOffsets, id } = this.state;
        const activeCategory = categoryOffsets.find(el => el.top - stickyBlockHeight + 51.5 < scrollTop && scrollTop <= el.top + el.height - stickyBlockHeight + 51.5);

        if (activeCategory && activeCategory.id !== id) this.setState({ id: activeCategory.id });
        else if (!activeCategory && id !== categoryOffsets[0].id) this.setState({ id: categoryOffsets[0].id });
    }

    onClick = id => {
        const stickyBlockHeight = document.querySelector(".sticky-top").offsetHeight;
        const { categoryOffsets } = this.state;
        let index = 0;
        const category = categoryOffsets.find((el, i) => {
            index = i;
            return el.id === id;
        });
        if (category) {
            window.scroll({ top: category.top - stickyBlockHeight + (index === 0 ? 0 : 53), behavior: 'smooth' });
            setTimeout(() => {
                this.setState({ id }, () => document.addEventListener('scroll', this.scrollHandler))
            }, 1000);;
        }
    }

    render() {
        const { content: { currencies }, frontend: { restaurants: { loading, restaurant = {}, categories = [], currency, position } } } = this.props;
        const { id } = this.state;

        const currencyObj = currencies.find(c => c.cc === currency);

        const categoriesContent = categories.map(category => <Category id={category.id} active={category.id === id} key={JSON.stringify(category) + Math.random()} name={category.name}>
            {category.meals && category.meals.map(meal => <Meal symbol={currencyObj && currencyObj.symbol} position={position} key={JSON.stringify(meal) + Math.random()} {...meal} slug={this.props.match.params.slug} />)}
        </Category>);

        const bannerStyle = {
            top: 0,
            left: 0,
            backgroundImage: `url('${restaurant.banner1}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        };

        const items = [];
        if (restaurant.banner1) items.push(restaurant.banner1);
        if (restaurant.banner2) items.push(restaurant.banner2);
        if (restaurant.banner3) items.push(restaurant.banner3);

        const basic = restaurant.plan;
        const standard = restaurant.plan && restaurant.plan.slug === 'standard';
        const premium = restaurant.plan && restaurant.plan.slug === 'premium';

        return <div className="Home">
            {loading && Object.keys(restaurant).length === 0 && <Spinner />}

            <div className="embed-responsive embed-responsive-16by9 position-relative">
                <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0 }}>
                    {items.length > 1 ? <Carousel items={items} /> : <div className="h-100" style={bannerStyle} />}
                </div>
            </div>

            <div className="sticky-top border-bottom border-soft bg-white">
                <Wrapper className="bg-orange-10">
                    <div className="d-flex justify-content-between align-items-end">
                        <div className="text-500 text-17 text-orange">
                            {restaurant.name}
                        </div>

                        <div>
                            <Conditional condition={(premium || standard || basic) && restaurant.phone}><Stack link={`tel:+${restaurant.phone}`} icon={faPhone} color="primary" /></Conditional>
                            <Conditional condition={(premium || standard) && restaurant.whatsapp}><Stack link={`//wa.me/${restaurant.whatsapp}`} icon={faWhatsapp} color="green" /></Conditional>
                            <Conditional condition={premium && restaurant.location}><Stack link={restaurant.location} icon={faMapMarkerAlt} color="yellow" /></Conditional>
                        </div>
                    </div>

                    <div className="d-flex align-items-center text-8 text-500">
                        <div className="mr-2 pr-2 border-right border-lg border-orange d-flex align-items-center">
                            <div className="mr-1">
                                <FontAwesomeIcon icon={faCalendar} className="text-6 text-orange" />
                            </div>

                            <span>
                                {restaurant.days}
                            </span>
                        </div>

                        <div className="d-flex align-items-center">
                            <div className="mr-1">
                                <FontAwesomeIcon icon={faClock} className="text-6 text-orange" />
                            </div>

                            <span>
                                {restaurant.hours}
                            </span>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="text-300 text-8">
                            {restaurant.address}
                        </div>

                        <div className="d-flex align-items-center">
                            <div className="text-8">Ratings</div>

                            <div className="mx-1">
                                {restaurant.mark && <Stars readOnly lg mark={+restaurant.mark} />}
                            </div>

                            <div className="text-orange text-6 text-700">
                                ({restaurant.mark})
                            </div>
                        </div>
                    </div>
                </Wrapper>

                <Wrapper className="navigation scrollbar-orange" style={{ paddingTop: 18 }}>
                    <div className="text-truncate" style={{ overflow: 'visible' }}>
                        <Navigation categories={categories.map(c => updateObject(c, { active: id === c.id }))} onClick={this.onClick} />
                    </div>
                </Wrapper>

                <Wrapper className="bg-orange-10 d-flex justify-content-end align-items-center">
                    <div className="text-12 mr-auto">
                        You are on category
                    </div>

                    <div className="mx-2">
                        <div className="rounded-pill bg-orange" style={{ height: 5, width: 18 }} />
                    </div>

                    <SelectCategory categories={categories} id={id} onClick={this.onClick} />
                </Wrapper>
            </div>

            <div className="categories">
                {categoriesContent}
            </div>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: slug => dispatch(actions.getRestaurantData(slug)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));