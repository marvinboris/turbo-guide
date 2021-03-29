import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { CustomInput } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faHamburger, faStar, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

// Components
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import Meal from '../../../../components/Backend/UI/Food/Meal';

import * as actions from '../../../../store/actions';

import './Meals.css';

import Green from '../../../../assets/images/green.png';

class Index extends Component {
    state = {
        category_id: '',
    }

    inputChangedHandler = e => {
        const { name, value } = e.target;
        if (name === 'category_id') {
            return this.setState({ category_id: value }, () => this.props.get(value));
        }
    }

    onClick = category_id => {
        this.setState({ category_id }, () => this.props.get(category_id));
    }

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
                    pages: { components: { }, backend: { pages: { meals: { welcome, subtitle, most_liked, filter, counted, total_meals, watching, check, all_categories, viewing } } } }
                }
            },
            backend: { meals: { error, message, meals = [], categories = [], mostLiked = [], countedMeals } },
            auth: { data: { name } }
        } = this.props;
        const { category_id } = this.state;

        const errors = <>
            <Error err={error} />
        </>;
        const feedback = <Feedback message={message} />;

        const categoriesOptions = categories.sort((a, b) => a.name > b.name).map(category => <option key={JSON.stringify(category) + Math.random()} value={category.id}>{category.name}</option>);
        const categoriesList = [{ name: all_categories, id: '' }, ...categories].map(category => <span key={JSON.stringify(category) + Math.random()} style={{ cursor: 'pointer' }} onClick={() => this.onClick(category.id)} className={`text-truncate text-decoration-none text-reset text-16 mr-4 text-${category_id == category.id ? "500" : "300"}`}>{category.name}</span>);

        const mealsContent = meals.map(meal => <Meal key={JSON.stringify(meal) + Math.random()} {...meal} />);
        const mostLikedMeals = mostLiked.map((meal, index) => <div key={JSON.stringify(meal) + Math.random()} className={`bg-${index === 0 ? 'green' : 'light'}-10 p-2 mb-2 mt-1 d-flex`}>
            <div className="mr-2">
                <div className="embed-responsive embed-responsive-1by1 rounded-left-4" style={{ background: `url('${meal.photo}') no-repeat center`, backgroundSize: 'cover', width: 84 }} />
            </div>

            <div className="flex-fill pr-2">
                <div className="d-flex justify-content-between align-items-center position-relative pb-2 mb-3">
                    <div className="text-14">{meal.name}</div>

                    <div className={`text-${index === 0 ? 'green' : 'border'} text-700 text-20`}>
                        #{index + 1}
                    </div>

                    <div className="position-absolute rounded-pill bg-green" style={{ left: 0, bottom: 0, width: 20, height: 2 }} />
                </div>

                <div className="text-montserrat text-12 mb-2 d-none">
                    {viewing} <span className="text-700 text-green">({meal.views})</span>
                </div>

                <div className="text-12">
                    <FontAwesomeIcon icon={faStar} className="text-yellow mr-1" />
                    {meal.mark.toFixed(1)}

                    <FontAwesomeIcon icon={faCommentAlt} className="text-orange mr-1 ml-2" />
                    {meal.comments >= 1000 ? `${(meals.comments / 1000).toFixed(1)}k` : meal.comments}
                </div>
            </div>
        </div>);

        return (
            <>
                <div className="Meals mt-5 row">
                    <div className="col-xl-9">
                        <div className="mr-4 pr-5 border-right border-light">
                            <div className="d-flex align-items-center mb-4">
                                <TitleWrapper>
                                    <SpecialTitle>{welcome}, {name}</SpecialTitle>
                                    <Subtitle>{subtitle}</Subtitle>
                                </TitleWrapper>

                                <div className="ml-auto mr-3">
                                    <div className="rounded-4 bg-green-10 py-2 px-3 text-green text-300 text-16 d-flex align-items-center">
                                        <div className="mr-2 pr-1">
                                            <div style={{ width: 22, height: 22, background: `url('${Green}') no-repeat center`, backgroundSize: 'cover' }} className="text-5 text-white d-flex justify-content-center align-items-center">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                        </div>

                                        <div>{most_liked}</div>
                                    </div>
                                </div>

                                <div>
                                    <CustomInput id="category_id" type="select" name="category_id" onChange={this.inputChangedHandler} className="border-light" value={category_id}>
                                        <option>{filter}</option>
                                        {categoriesOptions}
                                    </CustomInput>
                                </div>
                            </div>

                            {errors}
                            {feedback}

                            <div className="mb-5 pb-2 scrollbar-orange" style={{ overflowX: 'auto' }}>
                                {categoriesList}
                            </div>

                            <div className="scrollbar-orange" style={{ overflowX: 'auto' }}>
                                <div className="flex-container">{mealsContent}</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3">
                        <div className="mb-1">
                            <SpecialTitle>{watching}</SpecialTitle>
                            <Subtitle>{check}</Subtitle>
                        </div>

                        <div className="mb-2 pb-1">
                            <div className="rounded-4 bg-orange text-white p-2">
                                <div className="m-1">
                                    <div className="pb-2 border-bottom border-white-50">
                                        <div className="ml-3 pl-1 text-18 text-500">{counted}</div>
                                    </div>

                                    <div className="ml-3 pl-1">
                                        <div className="d-flex align-items-end">
                                            <div className="text-40 text-700">{countedMeals}</div>

                                            <div className="text-black-10 text-33 ml-auto">
                                                <FontAwesomeIcon icon={faHamburger} />
                                            </div>
                                        </div>

                                        <div className="text-12 text-300">{total_meals}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            {mostLikedMeals}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: id => dispatch(actions.getMeals(id)),
    reset: () => dispatch(actions.resetMeals()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));