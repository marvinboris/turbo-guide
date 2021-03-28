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

import './Home.css';

const Wrapper = ({ children, className, style }) => <div className={className} style={{ padding: '12px 11px', ...style }}>
    {children}
</div>;

const Category = ({ children, name }) => <div style={{ padding: '15px 0px' }}>
    {name && <div className="mb-3 d-flex justify-content-end" style={{ paddingRight: 11 }}>
        <div className="text-13 text-500 px-4 py-2 bg-orange-30 text-orange rounded-pill">
            <div className="px-1">{name}</div>
        </div>
    </div>}

    <div>
        {children}
    </div>
</div>;

const Stack = ({ icon, color, link, className = '' }) => <a href={link} target="__blank" className={`fa-stack fa-2x text-${color} text-10 ${className}`}>
    <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
    <FontAwesomeIcon icon={icon} className="fa-stack-1x fa-inverse" />
</a>;

class Home extends Component {
    componentDidMount() {
        this.props.get(this.props.match.params.md5);
    }

    render() {
        const { frontend: { restaurants: { restaurant = {}, categories = [] } } } = this.props;

        const categoriesContent = categories.map(category => <Category key={JSON.stringify(category) + Math.random()} name={category.name}>
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
                                <Stars readOnly lg mark={+restaurant.mark} />
                            </div>

                            <div className="text-orange text-6 text-700">
                                ({restaurant.mark})
                            </div>
                        </div>
                    </div>
                </Wrapper>

                <Wrapper className="navigation scrollbar-orange" style={{ paddingTop: 18 }}>
                    <div className="text-truncate" style={{ overflow: 'visible' }}>
                        <Navigation categories={categories} />
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
                                    {categories.length > 0 && categories[0].name}
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

            <div>
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