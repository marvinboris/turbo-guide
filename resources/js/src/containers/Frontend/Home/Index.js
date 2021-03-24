import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faFilter, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Meal from '../../../components/UI/Food/Meal';
import Stars from '../../../components/UI/Stars';

import meals from '../../../components/Data/Meals';

import Navigation from './Navigation';

import './Home.css';

import ImgKfcBanner from '../../../assets/images/99ab5f2205ea31485b0126edbc8e1682.jpg';

const Wrapper = ({ children, className, style }) => <div className={className} style={{ padding: '12px 22px', ...style }}>
    {children}
</div>;

const Category = ({ children, title }) => <div style={{ padding: '15px 11px' }}>
    {title && <div className="mb-3 d-flex justify-content-end">
        <div className="text-13 text-500 px-4 py-2 bg-orange-30 text-orange rounded-pill">
            <div className="px-1">{title}</div>
        </div>
    </div>}

    <div>
        {children}
    </div>
</div>;

const Stack = ({ icon, color, className = '' }) => <span className={`fa-stack fa-2x text-${color} text-10 ${className}`}>
    <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
    <FontAwesomeIcon icon={icon} className="fa-stack-1x fa-inverse" />
</span>;

class Home extends Component {
    render() {
        const categories = [
            { title: 'Chicken Wings Combo', active: true },
            { title: 'Boneless' },
            { title: 'Wings' },
            { title: 'Combo Meal' },
            { title: 'Drinks' },
        ];

        return <div className="Home">
            <div className="embed-responsive embed-responsive-16by9 position-relative">
                <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, background: `url('${ImgKfcBanner}') no-repeat center`, backgroundSize: 'cover' }} />
            </div>

            <div className="sticky-top border-bottom border-soft bg-white">
                <Wrapper className="bg-orange-10">
                    <div className="d-flex justify-content-between align-items-end">
                        <div className="text-500 text-17 text-orange">
                            Restaurant KFC Akwa
                        </div>

                        <div>
                            <Stack icon={faPhone} color="primary" />
                            <Stack icon={faWhatsapp} color="green" />
                            <Stack icon={faLocationArrow} color="yellow" />
                        </div>
                    </div>

                    <div className="d-flex align-items-center text-8 text-500">
                        <div className="mr-2 pr-2 border-right border-lg border-orange d-flex align-items-center">
                            <div className="mr-1">
                                <FontAwesomeIcon icon={faCalendar} className="text-6 text-orange" />
                            </div>

                            <span>
                                Monday - Friday
                            </span>
                        </div>

                        <div className="d-flex align-items-center">
                            <div className="mr-1">
                                <FontAwesomeIcon icon={faClock} className="text-6 text-orange" />
                            </div>

                            <span>
                                From 2PM - 9PM
                            </span>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="text-300 text-8">
                            Carrefour Akwa, Derrière la station Total
                        </div>

                        <div className="d-flex">
                            <div className="mr-2 text-8">Ratings</div>

                            <div>
                                <Stars readOnly lg mark={4} />
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
                        <div className="bg-orange-30 rounded-pill py-2 px-2 text-500 text-orange text-13 position-relative" style={{ maxWidth: 180 }}>
                            <div className="d-flex mx-1">
                                <div className="text-truncate">
                                    Chicken Wings Combo
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

            <Category>
                <Meal {...meals[0]} />
                <Meal {...meals[1]} />
                <Meal {...meals[2]} />
                <Meal {...meals[3]} />
            </Category>

            <Category title="Boneless">
                <Meal {...meals[4]} />
                <Meal {...meals[5]} />
            </Category>
        </div>;
    }
}

export default withRouter(Home);