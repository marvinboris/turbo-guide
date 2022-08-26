import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CustomInput, DropdownItem, DropdownMenu, DropdownToggle, Input, UncontrolledDropdown } from 'reactstrap';

import Cart from '../../../../components/Frontend/UI/Cart';
import Meal from '../../../../components/Frontend/UI/Food/Meal';
import Category from '../../../../components/Frontend/UI/Category';

import Spinner from '../../../../components/UI/Spinner';

import Carousel from './Carousel';
import SelectCategory from './SelectCategory';

import { updateObject } from '../../../../shared/utility';

import { getRestaurant } from '../../../../store/actions/frontend/restaurants';
import { getContent } from '../../../../store/actions/content';

import './Home.scss';

const Languages = ({ languages, set }) => {
    const lang = localStorage.getItem('lang');
    const language = languages.find(l => l.abbr === lang);

    const dropdownItems = languages.map(l => <DropdownItem onClick={() => set(l.abbr)} key={JSON.stringify(l)} className="px-3">
        <span className={`flag-icon flag-icon-${l.flag.toLowerCase()}`} /> {l.abbr.toUpperCase()}
    </DropdownItem>);

    return <UncontrolledDropdown className="Languages">
        <DropdownToggle>
            <span className="text">{language && language.abbr}</span>

            <span className="language-flag">
                <span className={`flag-icon flag-icon-${language && language.flag.toLowerCase()}`} />
            </span>
        </DropdownToggle>

        <DropdownMenu style={{ minWidth: '5rem' }}>
            {dropdownItems}
        </DropdownMenu>
    </UncontrolledDropdown>;
};

let timeout;

class Home extends Component {
    state = {
        id: '',
        modal: false,
    }



    // Component methods
    setLanguage = lang => {
        if (lang !== localStorage.getItem('lang')) {
            localStorage.setItem('lang', lang);
            this.props.getContent();
        }
    }

    init = () => {
        const lang = localStorage.getItem('lang');
        $('#nav-category-' + this.state.id).addClass('activated');
        $('#selected-category').html(this.props.frontend.restaurants.categories.find(category => +category.id === +this.state.id).name[lang]);

        $('body').scrollspy({ target: '#categories' });
        $('.CategoryTitle a:empty').parent().remove();

        $(window).on('activate.bs.scrollspy', (e, obj) => {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                const lang = localStorage.getItem('lang');
                const id = obj.relatedTarget.split('category-')[1];

                $('.nav-category').removeClass('activated');
                $("#nav-category-" + id).addClass('activated');

                $('.navigation').animate({ scrollLeft: document.getElementById('nav-category-' + id).offsetLeft - 11 });
                $('#selected-category').html(this.props.frontend.restaurants.categories.find(category => +category.id === +id).name[lang]);

                clearTimeout(timeout);
            }, 400);
        });
    }



    // Lifecycle methods
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.frontend.restaurants.restaurant && prevState.id === '') {
            const { categories } = nextProps.frontend.restaurants;
            if (categories.length > 0) return updateObject(prevState, { id: categories[0].id });
        }
        return null;
    }

    componentDidMount() {
        this.init();
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevProps.frontend.restaurants.languages && this.props.frontend.restaurants.languages && !this.props.frontend.restaurants.languages.map(l => l.abbr).includes(localStorage.getItem('lang'))) this.setLanguage(this.props.frontend.restaurants.languages.find(l => l.pivot.main === 1).abbr);
        if (prevState.id === '' && this.state.id !== prevState.id) $(this.init);
        if (this.props.frontend.restaurants.categories && prevProps.content.loading && !this.props.content.loading) {
            const lang = localStorage.getItem('lang');
            $('#nav-category-' + this.state.id).addClass('activated');
            $('#selected-category').html(this.props.frontend.restaurants.categories.find(category => +category.id === +this.state.id).name[lang]);
        }
    }

    componentWillUnmount() {
        $('body').scrollspy('dispose');
    }

    render() {
        const {
            content: {
                cms: { pages: { frontend: { restaurants: { home } } } },
                currencies,
            },
            frontend: { restaurants: { loading, restaurant = { days: {}, hours: {}, address: {} }, categories = [], currency, languages = [], position } }
        } = this.props;
        const { id } = this.state;
        const lang = localStorage.getItem('lang');

        const currencyObj = currencies.find(c => c.cc === currency);

        const categoriesContent = categories.map((category, index) => <Category id={category.id} index={index} key={JSON.stringify(category) + Math.random()} name={category.name[lang]}>
            {category.meals && category.meals.map(meal => <Meal symbol={currencyObj && currencyObj.cc} position={position} key={JSON.stringify(meal) + Math.random()} {...{ ...meal, name: meal.name[lang], description: meal.description[lang] }} slug={this.props.match.params.slug} />)}
        </Category>);

        const items = [];
        if (restaurant.banner1) items.push(restaurant.banner1);
        if (restaurant.banner2) items.push(restaurant.banner2);
        if (restaurant.banner3) items.push(restaurant.banner3);

        return <div className="Home">
            {loading && !this.props.frontend.restaurants.restaurant && <Spinner />}
            <input type="hidden" id="id" defaultValue={id} />

            <div className='header'>
                <div className='welcome'>
                    <div className='text'>
                        <span>{home.welcome_to}</span>
                    </div>

                    <div className={`status ${restaurant.status ? 'open' : 'closed'}`}>
                        <div className='icon'>
                            <i className={`fas fa-door-${restaurant.status ? 'open' : 'closed'}`} />
                        </div>

                        <div className='circle'>
                            <i className='fas fa-circle' />
                        </div>

                        <div className='value'>{restaurant.status ? home.open : home.closed}</div>
                    </div>

                    <div>
                        <Cart />
                    </div>
                </div>

                <div className='restaurant'>
                    <div className='text'>{restaurant.name}</div>

                    <div>
                        <Languages languages={languages} set={this.setLanguage} />
                    </div>
                </div>

                <div className="embed-responsive embed-responsive-16by9 banner">
                    <div className="img-container">
                        {items.length > 1 ? <Carousel items={items} /> : <div className="img" style={{ backgroundImage: `url('${restaurant.banner1}')` }} />}
                    </div>

                    <div className='location'>
                        <div className='icon'><i className='fas fa-map-marker-alt' /></div>

                        <div className='text'>{restaurant.address[lang]}</div>
                    </div>

                    <div className='phone'>
                        <a href={`tel:${restaurant.phone}`} className='btn btn-green fas fa-phone' />
                    </div>
                </div>
            </div>

            <div className='select-search-filter'>
                <div className="select">
                    <CustomInput type='select' id='select-category' name='category' defaultValue={id}>
                        {categories.map(category => <option key={`select-category-${JSON.stringify(category)}`} value={category.id}>{category.name[lang]}</option>)}
                    </CustomInput>
                </div>

                <div className="search">
                    <Input type='search' name='meal' placeholder={home.search_meal} />
                </div>

                <div className='filter'>
                    <SelectCategory cms={home} categories={categories.map(c => ({ ...c, name: c.name[lang], description: c.description[lang] }))} />
                </div>
            </div>

            <div className="categories">
                {categoriesContent}
            </div>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: slug => dispatch(getRestaurant(slug)),
    getContent: () => dispatch(getContent()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));