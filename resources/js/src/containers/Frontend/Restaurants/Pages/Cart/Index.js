import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Item from './UI/Item';
import Header from '../UI/Header';
import Checkout from '../UI/Checkout';

import Error from '../../../../../components/Error/Error';

import { addItem, resetRestaurants, subItem } from '../../../../../store/actions/frontend/restaurants';

import './Cart.scss';

const Line = ({ label, position, symbol, value }) => <div className='line'>
    <div className='label'>{label}</div>
    <div className='value'>{!position && <span>{`${symbol} `}</span>}{value}{position && <span>{` ${symbol}`}</span>}</div>
</div>;

class Cart extends Component {
    state = {
        option: '',
        note: '',
    }



    // Component methods
    inputChangedHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    selectOption = option => {
        this.setState({ option });
    }



    // Lifecycle methods
    componentDidMount() {
        this.setState({ option: Object.keys(this.props.content.cms.pages.frontend.restaurants.cart.options.list)[0] });
    }

    render() {
        let {
            content: {
                cms: { pages: { frontend: { restaurants: { cart: cms } } } },
                currencies
            },
            frontend: { restaurants: { error, restaurant: { cart: { items, total }, delivery_fee, service_charge }, currency, position } },
            match: { params: { slug } }
        } = this.props;
        const { option, note } = this.state;
        const lang = localStorage.getItem('lang');

        const currencyObj = currencies.find(c => c.cc === currency);
        const symbol = currencyObj && currencyObj.cc;

        const itemsContent = items.map(item => <Item key={item.id + Math.random()} symbol={symbol} position={position} item={{ ...item, name: item.name[lang] }} add={() => this.props.addItem(slug, item.type, item)} sub={() => this.props.subItem(slug, item.type, item)} />);
        const optionsContent = Object.keys(cms.options.list).map(key => ({ key, name: cms.options.list[key] })).map(item => <div key={JSON.stringify(item)} className={`options${item.key === option ? ' active' : ''}`} onClick={() => this.selectOption(item.key)}>{item.name}<i className='fas fa-check-circle' /></div>);

        const [delivery_option] = Object.keys(cms.options.list);
        const due_amount = total + (option === delivery_option ? delivery_fee : 0) + service_charge;

        const errors = <>
            <Error err={error} />
        </>;

        return <div className="Page Cart">
            <Header name={cms.your_cart} />

            <main>
                {errors}

                <section className='items'>
                    {itemsContent}
                </section>

                <section className='note'>
                    <div className='form-group'>
                        <label><i className='fas fa-file' />{cms.note.add}</label>
                        <input type='text' name='note' className='form-control' placeholder={cms.note.type} value={note} onChange={this.inputChangedHandler} />
                    </div>
                </section>

                <section className='options'>
                    <div className='title'>{cms.options.select}</div>

                    <div className='body'>
                        {optionsContent}
                    </div>
                </section>

                <section className='payment'>
                    <div className='title'>{cms.payment.title}</div>

                    <div className='body'>
                        <div className='table-body'>
                            <Line label={cms.payment.cart_total} value={total} position={position} symbol={symbol} />
                            {option === delivery_option && <Line label={cms.payment.delivery_fee} value={delivery_fee} position={position} symbol={symbol} />}
                            <Line label={cms.payment.service_charge} value={service_charge} position={position} symbol={symbol} />
                        </div>

                        <div className='table-footer'>
                            <Line label={cms.payment.total_due} value={due_amount} position={position} symbol={symbol} />
                        </div>
                    </div>
                </section>
            </main>

            <Checkout title={cms.cart.due_amount} label={cms.cart.proceed} value={due_amount} onClick={() => this.props.history.push({ pathname: `/restaurants/${slug}/payment`, state: { ...this.state, items, due_amount } })} />
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    addItem: (slug, type, item) => dispatch(addItem(slug, type, item)),
    subItem: (slug, type, item) => dispatch(subItem(slug, type, item)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));