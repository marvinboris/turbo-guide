import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faFilter, faPhone, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Meal from '../../../../components/UI/Food/Meal';
import Stars from '../../../../components/UI/Stars';

import Navigation from './Navigation';

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

class Home extends Component {
    state = {
        id: '',
        categoryOffsets: [],
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.frontend.restaurants.restaurant && prevState.id === '') {
            const { categories } = nextProps.frontend.restaurants;
            if (categories.length > 0) return updateObject(prevState, { id: categories[0].id });
        }
        return prevState;
    }

    componentDidMount() {
        this.props.get(this.props.match.params.md5);
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
        const { frontend: { restaurants: { restaurant = {}, categories = [] } } } = this.props;
        const { id } = this.state;

        const categoriesContent = categories.map(category => <Category id={category.id} active={category.id === id} key={JSON.stringify(category) + Math.random()} name={category.name}>
            {category.meals && category.meals.map(meal => <Meal key={JSON.stringify(meal) + Math.random()} {...meal} md5={this.props.match.params.md5} />)}
        </Category>);

        const bannerStyle = {
            top: 0,
            left: 0,
            backgroundImage: `url('${restaurant.photo}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        };

        return <div className="Home">
            <div className="embed-responsive embed-responsive-16by9 position-relative">
                <div className="position-absolute w-100 h-100" style={bannerStyle} />
            </div>

            <div className="sticky-top border-bottom border-soft bg-white">
                <Wrapper className="bg-orange-10">
                    <div className="d-flex justify-content-between align-items-end">
                        <div className="text-500 text-17 text-orange">
                            {restaurant.name}
                        </div>

                        <div>
                            <Stack link={`tel:+${restaurant.phone}`} icon={faPhone} color="primary" />
                            <Stack link={`//wa.me/${restaurant.whatsapp}`} icon={faWhatsapp} color="green" />
                            <Stack link="#" icon={faSearchLocation} color="yellow" />
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

                    <div>
                        <div className="bg-orange-30 rounded-pill py-2 px-2 text-500 text-orange text-13 position-relative category-select">
                            <div className="d-flex mx-1">
                                <div className="text-truncate">
                                    {categories.length > 0 && categories.find(c => c.id === id).name}
                                </div>

                                <div className="position-relative">
                                    <div style={{ width: .5, height: 21 }} className="mx-2 bg-orange" />

                                    <div className="embed-responsive embed-responsive-1by1 rounded-circle border border-orange bg-white position-absolute" style={{ width: 4, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                                </div>

                                <div>
                                    <FontAwesomeIcon icon={faFilter} />
                                </div>
                            </div>
                        </div>
                    </div>
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
    get: md5 => dispatch(actions.getRestaurantData(md5)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));