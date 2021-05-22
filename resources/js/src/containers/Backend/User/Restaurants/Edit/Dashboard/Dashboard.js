import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';
import { faTachometerAlt, faDrumstickBite, faStar, faCookie, faMoneyBillWave, faDownload, faBox, faExternalLinkAlt, faListAlt, faCheck, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OwlCarousel from 'react-owl-carousel2';

// Components
import Breadcrumb from '../../../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../../../components/UI/Titles/Subtitle/Subtitle';
import Card from '../../../../../../components/Backend/Dashboard/Restaurant/Card';
import TitleWrapper from '../../../../../../components/Backend/UI/TitleWrapper';
import Error from '../../../../../../components/Error/Error';
import CustomSpinner from '../../../../../../components/UI/CustomSpinner/CustomSpinner';
import Meal from '../../../../../../components/Backend/UI/Food/Meal';
import Stars from '../../../../../../components/UI/Stars';
import Plan from '../../../../../../components/UI/Plan';

import * as actions from '../../../../../../store/actions/backend/restaurants';

import './Dashboard.css';

const appreciations = [
    { color: 'green', lt: 5, text: 'Positive' },
    { color: 'orange', lt: 3.5, text: 'Average' },
    { color: 'red', lt: 2.5, text: 'Negative' },
];

class Dashboard extends Component {
    state = {
        duration: 1,
    }



    // Component methods
    switchDuration = duration => this.setState({ duration });



    // Lifecycle methods
    componentDidMount() {
        this.props.get();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { backend: { pages: { dashboard: { restaurant: { welcome, subtitle, blocks: { customer_review, total_meals, total_addons, total_categories, credit_balance, recharge }, go_live, most_viewed, qr_code, download, subscription_plan, monthly, yearly, customer_reviews, customer_ratings, stars: { singular, plural }, general_overview } } } } }
                }
            },
            backend: { restaurants: { data: { slug, name, plan, qr }, loading, error, blocksData, mostViewed = [], comments = 0, marks = {}, plans = {} } },
        } = this.props;
        const { duration } = this.state;

        let content = null;
        let errors = null;
        const lang = localStorage.getItem('lang');

        if (!comments || typeof comments !== "number") comments = 0;

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            if (blocksData) {
                const data = [
                    {
                        children: blocksData.totalMeals,
                        icon: faDrumstickBite,
                        link: '/user/restaurants/' + this.props.match.params.restaurant + '/edit/meals/',
                        color: 'red',
                        details: total_meals,
                    },
                    {
                        children: blocksData.totalAddons,
                        icon: faCookie,
                        link: '/user/restaurants/' + this.props.match.params.restaurant + '/edit/addons/',
                        color: 'green',
                        details: total_addons,
                    },
                    {
                        children: blocksData.totalCategories,
                        icon: faListAlt,
                        link: '/user/restaurants/' + this.props.match.params.restaurant + '/edit/categories/',
                        color: 'blue',
                        details: total_categories,
                    },
                    {
                        children: blocksData.customerReview,
                        icon: faStar,
                        link: '/user/restaurants/' + this.props.match.params.restaurant + '/edit/comments/',
                        color: 'orange',
                        details: customer_review,
                    },
                ];

                const appreciation = appreciations.find(c => c.lt >= blocksData.customerReview);

                const cards = data.map(({ children, icon, link, color, details }, index) => <Card color={color} key={index} details={details} icon={icon} link={link}>{children}</Card>);

                const mealsContent = mostViewed.map(meal => <div key={JSON.stringify(meal) + Math.random()} className="col-lg-3"><Meal className="w-100 p-0" {...{ ...meal, name: meal.name[lang], description: meal.description[lang] }} /></div>);

                let plansContent = [];
                if (plans.monthly) {
                    plans = plans[duration === 1 ? "monthly" : "yearly"];
                    plans[0].basic = true;
                    plans[1].standard = true;
                    plans[2].premium = true;
                    plans = [plans[0], plans[2], plans[1]];
                    plansContent = plans.map((plan, index) => <Col key={index} xl={4}>
                        <Plan {...plan} />
                    </Col>);
                }

                const monthlyContent = <div className="rounded-4 text-green bg-white" onClick={() => this.switchDuration(1)} style={{ cursor: 'pointer' }}>
                    <div className="rounded-4 py-2 px-4 bg-green-20 position-relative">
                        <div className="px-3">{monthly}</div>

                        <div style={{ top: 0, right: 0, transform: 'translate(50%,-50%)' }} className={`position-absolute ${duration === 1 ? "d-block" : "d-none"}`}>
                            <div className="rounded-circle text-white bg-green d-flex justify-content-center align-items-center text-6" style={{ width: 20, height: 20 }}>
                                <FontAwesomeIcon icon={faCheck} fixedWidth />
                            </div>
                        </div>
                    </div>
                </div>;

                const yearlyContent = <div className="rounded-4 text-orange bg-white" onClick={() => this.switchDuration(12)} style={{ cursor: 'pointer' }}>
                    <div className="rounded-4 py-2 px-4 bg-orange-20 position-relative">
                        <div className="px-3">{yearly}</div>

                        <div style={{ top: 0, right: 0, transform: 'translate(50%,-50%)' }} className={`position-absolute ${duration === 12 ? "d-block" : "d-none"}`}>
                            <div className="rounded-circle text-white bg-orange d-flex justify-content-center align-items-center text-6" style={{ width: 20, height: 20 }}>
                                <FontAwesomeIcon icon={faCheck} fixedWidth />
                            </div>
                        </div>
                    </div>
                </div>;

                content = (
                    <>
                        {plan && <div className="go-live position-fixed">
                            <a href={`/restaurants/${slug}`} target="_blank" className="btn btn-green text-14 text-montserrat text-700 text-decoration-none py-2 px-3 rounded-4">
                                {go_live}

                                <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" />
                            </a>
                        </div>}

                        <div className="row mb-5">
                            {cards}

                            <div className="col-xxl-4 col-xl-8 pb-xl-3 pb-xxl-0">
                                <div className="bg-green rounded-8 text-300 text-white py-3 px-4 d-flex justify-content-between align-items-center h-100">
                                    <div className="h-100">
                                        <div className="text-20 d-none d-sm-block">{credit_balance}</div>
                                        <div className="text-14 d-sm-none">{credit_balance}</div>

                                        <div>
                                            <span className="text-700 text-35 d-none d-sm-inline text-montserrat">{blocksData.creditBalance}</span>
                                            <span className="text-700 text-24 d-sm-none text-montserrat">{blocksData.creditBalance}</span>{' '}

                                            <span className="text-14">USD</span>
                                        </div>
                                    </div>

                                    <div>
                                        <Link to={"/user/restaurants/" + this.props.match.params.restaurant + "/edit/recharges"} className="btn btn-white text-20 d-none d-sm-inline text-decoration-none text-green py-2 px-3">
                                            <FontAwesomeIcon icon={faMoneyBillWave} className="mr-3" />{recharge}
                                        </Link>
                                        <Link to={"/user/restaurants/" + this.props.match.params.restaurant + "/edit/recharges"} className="btn btn-white text-14 d-sm-none text-decoration-none text-green py-2 px-3">
                                            <FontAwesomeIcon icon={faMoneyBillWave} className="mr-3" />{recharge}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xxl-8 order-first pb-4 bg-white">
                                <div className="p-4 rounded-15 bg-green-5 h-100 d-flex flex-column">
                                    <div className="pb-4 mb-4 px-4 border-bottom border-light text-18">
                                        <FontAwesomeIcon icon={faDrumstickBite} className="mr-3 text-orange" />

                                        {most_viewed}
                                    </div>

                                    <div className="row d-none d-md-flex flex-fill align-items-center">
                                        {mealsContent}
                                    </div>

                                    <div className="d-md-none">
                                        <OwlCarousel options={{ responsive: { 0: { items: 1 }, 600: { items: 2 }, 1200: { items: 3 } }, center: false, loop: true, dots: false }}>
                                            {mealsContent}
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-4 col-xl-6 order-2 pb-4 bg-white">
                                <div className="p-4 rounded-15 bg-orange-20 h-100">
                                    <div className="pb-4 mb-4 px-4 border-bottom border-light text-18">
                                        {qr_code}
                                    </div>

                                    <div className="mb-4 rounded-8 shadow-sm bg-white-50 position-relative embed-responsive embed-responsive-1by1 mx-auto" style={{ width: 280 }}>
                                        <div className="position-absolute w-100 h-100 p-4" style={{ top: 0, left: 0 }}>
                                            <div className="h-100 w-100" style={{
                                                backgroundImage: `url('${qr}')`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover'
                                            }} />
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="mr-3">{download}</div>

                                        <div>
                                            <a href={qr} download style={{ height: 38, width: 38 }} className={`bg-white rounded-circle text-decoration-none d-flex justify-content-center align-items-center border border-orange border-2 text-orange`}>
                                                <FontAwesomeIcon icon={faDownload} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-8 order-xxl-3 order-xl-last order-3 pb-4 bg-white">
                                <div className="p-4 rounded-15 bg-green-5 h-100 d-flex flex-column">
                                    <div className="pb-4 mb-4 px-4 d-flex align-items-center border-bottom border-light text-18">
                                        <div>
                                            <FontAwesomeIcon icon={faBox} className="mr-3 text-orange" />

                                            {subscription_plan}
                                        </div>

                                        <div className="ml-auto mr-3 d-none d-md-block">
                                            {monthlyContent}
                                        </div>

                                        <div className="d-none d-md-block">
                                            {yearlyContent}
                                        </div>

                                        <div className="d-md-none ml-auto">
                                            <UncontrolledDropdown>
                                                <DropdownToggle color="orange">
                                                    <FontAwesomeIcon icon={faBars} />
                                                </DropdownToggle>

                                                <DropdownMenu>
                                                    <DropdownItem>{monthlyContent}</DropdownItem>
                                                    <DropdownItem>{yearlyContent}</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </div>
                                    </div>

                                    <div className="flex-fill">
                                        <Row className="d-none d-md-flex align-items-center">{plansContent}</Row>

                                        <div className="d-md-none">
                                            <OwlCarousel options={{ responsive: { 0: { items: 1 }, 700: { items: 2 }, 1200: { items: 3 } }, center: false, loop: true, dots: false }}>
                                                {plansContent}
                                            </OwlCarousel>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-4 order-xxl-last col-xl-6 order-xl-3 order-last pb-4">
                                <div className="h-100 rounded-15 bg-green-5 border border-soft px-5 py-4" style={{ borderStyle: 'dashed' }}>
                                    <div className="text-center text-20 text-500 mt-2 mb-4">{customer_reviews}</div>

                                    <div className="mt-2 mb-4 d-flex justify-content-center">
                                        <div className="rounded-pill bg-soft py-3 px-4 d-flex align-items-center">
                                            <div className="mr-3">
                                                <Stars readOnly lg mark={blocksData.customerReview} />
                                            </div>

                                            <div className="text-montserrat text-700 text-14">{blocksData.customerReview}/5</div>
                                        </div>
                                    </div>

                                    <div className="mt-1 mb-2 text-14 text-300 text-center">
                                        {comments} {customer_ratings}
                                    </div>

                                    <div className="mb-4">
                                        {[5, 4, 3, 2, 1].map(value => <div key={Math.random()} className="d-flex align-items-center text-12 text-300 mb-3">
                                            <div className="text-primary" style={{ width: 41 }}>{value} {value > 1 ? plural : singular}</div>

                                            <div className="px-2 flex-fill">
                                                <div className="rounded-pill bg-soft overflow-hidden" style={{ height: 20 }}>
                                                    <div className="bg-orange" style={{ height: 20, width: `${Math.round(comments > 0 ? marks[value] * 100 / comments : 0)}%` }} />
                                                </div>
                                            </div>

                                            <div>{Math.round(comments > 0 ? marks[value] * 100 / comments : 0)}%</div>
                                        </div>)}
                                    </div>

                                    <div className="mt-3 mb-3 text-center text-14">{general_overview}</div>

                                    <div className="d-flex justify-content-center">
                                        <div className={`rounded-pill bg-${appreciation.color} py-3 px-5 text-white text-18 text-montserrat`}>{appreciation.text}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            }
        }

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb main={subtitle} icon={faTachometerAlt} />
                    <SpecialTitle><span className="text-orange text-700"><span className="text-40 d-none d-sm-inline">{welcome},</span><span className="text-24 d-sm-none">{welcome},</span></span> {name}</SpecialTitle>
                    <Subtitle>{subtitle}</Subtitle>
                </TitleWrapper>
                <div className="Restaurant Dashboard">
                    {errors}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(actions.getRestaurantsEdit('dashboard')),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));