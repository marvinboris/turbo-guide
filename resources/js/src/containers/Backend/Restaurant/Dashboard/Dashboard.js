import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col } from 'reactstrap';
import { faTachometerAlt, faDrumstickBite, faStar, faCookie, faWineBottle, faMoneyBillWave, faDownload, faBox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Card from '../../../../components/Backend/Dashboard/Restaurant/Card';
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import Meal from '../../../../components/Backend/UI/Food/Meal';
import Stars from '../../../../components/UI/Stars';

import * as actions from '../../../../store/actions';

class Dashboard extends Component {
    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { backend: { pages: { dashboard: { restaurant: { welcome, subtitle, blocks: { customer_review, total_meals, total_addons, total_drinks, credit_balance, recharge }, most_viewed, qr_code, download, subscription_plan, monthly, yearly, customer_reviews, customer_ratings, stars: { singular, plural }, general_overview } } } } }
                }
            },
            backend: { dashboard: { loading, error, blocksData = {}, mostViewed = [], comments = 0, marks = {} } },
            auth: { data: { md5, name } }
        } = this.props;

        let content = null;
        let errors = null;

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
                        link: '/restaurant/meals/',
                        color: 'red',
                        details: total_meals,
                    },
                    {
                        children: blocksData.totalAddons,
                        icon: faCookie,
                        link: '/restaurant/addons/',
                        color: 'green',
                        details: total_addons,
                    },
                    {
                        children: blocksData.totalDrinks,
                        icon: faWineBottle,
                        link: '/restaurant/drinks/',
                        color: 'blue',
                        details: total_drinks,
                    },
                    {
                        children: blocksData.customerReview,
                        icon: faStar,
                        link: '/restaurant/review/',
                        color: 'orange',
                        details: customer_review,
                    },
                ];

                const cards = data.map(({ children, icon, link, color, details }, index) => <Card color={color} key={index} details={details} icon={icon} link={link}>{children}</Card>);

                const mealsContent = mostViewed.map(meal => <div key={JSON.stringify(meal) + Math.random()} className="col-lg-3"><Meal className="w-100 m-0" {...meal} /></div>);

                content = (
                    <>
                        <div className="row mb-5">
                            <div className="col-lg-8">
                                <div className="row">
                                    {cards}
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="bg-green rounded-8 text-20 text-300 text-white py-3 px-4 d-flex justify-content-between align-items-center h-100">
                                    <div className="h-100">
                                        <div className="mb3">{credit_balance}</div>

                                        <div>
                                            <span className="text-700 text-35 text-montserrat">{blocksData.creditBalance}</span> <span className="text-14">XAF</span>
                                        </div>
                                    </div>

                                    <div>
                                        <Link to="/restaurant/recharge" className="btn btn-white text-decoration-none text-green py-2 px-3">
                                            <FontAwesomeIcon icon={faMoneyBillWave} className="mr-3" />

                                            {recharge}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-8 pb-4 bg-white">
                                <div className="p-4 rounded-15 bg-green-10 h-100 d-flex flex-column">
                                    <div className="pb-4 mb-4 px-4 border-bottom border-light text-18">
                                        <FontAwesomeIcon icon={faDrumstickBite} className="mr-3 text-orange" />

                                        {most_viewed}
                                    </div>

                                    <div className="row flex-fill align-items-center">
                                        {mealsContent}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 pb-4 bg-white">
                                <div className="p-4 rounded-15 bg-orange-10">
                                    <div className="pb-4 mb-4 px-4 border-bottom border-light text-18">
                                        {qr_code}
                                    </div>

                                    <div className="mb-4 rounded-8 shadow-sm bg-white-50 position-relative embed-responsive embed-responsive-1by1 mx-auto" style={{ width: 280 }}>
                                        <div className="position-absolute w-100 h-100 p-4" style={{ top: 0, left: 0 }}>
                                            <div className="h-100 w-100" style={{ background: `url('https://api.qrserver.com/v1/create-qr-code/?size=225x225&data=${`${window.location.protocol}//${window.location.hostname}`}/restaurants/${md5}') no-repeat center`, backgroundSize: 'cover' }} />
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="mr-3">{download}</div>

                                        <div>
                                            <div style={{ height: 38, width: 38 }} className={`bg-white rounded-circle d-flex justify-content-center align-items-center border border-orange border-2 text-orange`}>
                                                <FontAwesomeIcon icon={faDownload} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8 pb-4 bg-white">
                                <div className="p-4 rounded-15 bg-green-10 h-100 d-flex flex-column">
                                    <div className="pb-4 mb-4 px-4 d-flex align-items-center border-bottom border-light text-18">
                                        <div>
                                            <FontAwesomeIcon icon={faBox} className="mr-3 text-orange" />

                                            {subscription_plan}
                                        </div>

                                        <div className="ml-auto mr-3">
                                            <div className="py-2 px-4 rounded-4 text-green bg-green-20">
                                                <div className="px-3">{monthly}</div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="py-2 px-4 rounded-4 text-green bg-green-10">
                                                <div className="px-3">{yearly}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-fill d-flex align-items-center">
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 pb-4">
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
                                                <div className="rounded-pill bg-soft" style={{ height: 20 }}>
                                                    <div className="bg-orange" style={{ height: 20, width: `${marks[value]}%` }} />
                                                </div>
                                            </div>

                                            <div>{marks[value]}%</div>
                                        </div>)}
                                    </div>

                                    <div className="mt-3 mb-3 text-center text-14">{general_overview}</div>

                                    <div className="d-flex justify-content-center">
                                        <div className="rounded-pill bg-green py-3 px-5 text-white text-18 text-montserrat">Positive</div>
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
                    <SpecialTitle><span className="text-orange text-700 text-40">{welcome},</span> {name}</SpecialTitle>
                    <Subtitle>{subtitle}</Subtitle>
                </TitleWrapper>
                <div>
                    {errors}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(actions.getDashboard()),
    reset: () => dispatch(actions.resetDashboard()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));