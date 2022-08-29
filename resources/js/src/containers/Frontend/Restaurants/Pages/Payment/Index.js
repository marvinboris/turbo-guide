import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../UI/Header';
import Checkout from '../UI/Checkout';

import { postPayment, resetRestaurants } from '../../../../../store/actions/frontend/restaurants';
import { errorAlert } from '../../../../../shared/utility';

import './Payment.scss';

const Line = ({ label, position, symbol, value }) => <div className='line'>
    <div className='label'>{label}</div>
    <div className='value'>{!position && <span>{`${symbol} `}</span>}{value}{position && <span>{` ${symbol}`}</span>}</div>
</div>;

class Payment extends Component {
    state = {
        location: '',
        address: '',
        phone: '',
        method_id: '',

        changing: false,
        editing: false,
    }



    // Component methods
    inputChangedHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    selectMethod = method_id => {
        this.setState({ method_id });
    }

    change = () => this.setState({ changing: true })

    getInfo = () => {
        const { location, address, phone, method_id } = this.state;
        return { location, address, phone, method_id };
    }

    setChangeInfo = () => this.setState({ changing: false }, () => localStorage.setItem('client_info', JSON.stringify(this.getInfo())))

    edit = () => this.setState({ editing: true })

    setEditInfo = () => this.setState({ editing: false }, () => localStorage.setItem('client_info', JSON.stringify(this.getInfo())))



    // Lifecycle methods
    componentDidMount() {
        const { payment_methods } = this.props.content;
        const info = localStorage.getItem('client_info');
        if (!info) localStorage.setItem('client_info', JSON.stringify(this.getInfo()));
        else this.setState({ ...JSON.parse(info) });
        this.setState({ method_id: payment_methods.length > 0 && payment_methods[0].id });
    }

    componentDidUpdate() {
        const { frontend: { restaurants: { error, message, order_no, tracking_code } }, match: { params: { slug } } } = this.props;
        if (error) return errorAlert(error);
        if (message && message.type === 'success' && order_no) this.props.history.push({ pathname: `/restaurants/${slug}/order/success`, state: { order_no, tracking_code } })
    }

    render() {
        const {
            content: {
                cms: { pages: { frontend: { restaurants: { cart: { options: { list } }, payment: cms } } } },
                currencies, payment_methods
            },
            frontend: { restaurants: { restaurant: { cart: { total }, delivery_fee, service_charge }, currency, position } },
            match: { params: { slug } },
            location: { state: { due_amount, option } }
        } = this.props;
        const { location, address, phone, method_id, editing, changing } = this.state;

        const currencyObj = currencies.find(c => c.cc === currency);
        const symbol = currencyObj && currencyObj.cc;

        const methodsContent = payment_methods.map(method => <div key={JSON.stringify(method)} className={`method${+method.id === +method_id ? ' active' : ''}`} onClick={() => this.selectMethod(method.id)}>{method.name}<i className='fas fa-check-circle' /></div>);

        const [delivery_option] = Object.keys(list);


        return <div className="Page Payment">
            <Header name={cms.title} />

            <main>
                <section className='banner'>
                    {option === delivery_option && <div className={`top${changing ? ' changing' : ''}`}>
                        <iframe src={location} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                        <div className='change'>
                            <div className='form-group'>
                                <input type='url' name='location' className='form-control' onChange={this.inputChangedHandler} value={location} placeholder={cms.banner.location} />
                            </div>

                            <button onClick={changing ? this.setChangeInfo : this.change}>
                                {changing ? cms.banner.save : cms.banner.change}<i className='fas fa-map-marker-alt' />
                            </button>
                        </div>
                    </div>}

                    <div className={`bottom${editing ? ' editing' : ''}`}>
                        <div className='title'><i className='fas fa-compass' /><span>{cms.banner.current_location}</span></div>

                        {option === delivery_option && <div className='address'>
                            {address && <div className='value'>{address}</div>}

                            <div className='form-group'>
                                <textarea name='address' className='form-control' onChange={this.inputChangedHandler} value={address} placeholder={cms.banner.address} />
                            </div>
                        </div>}

                        <div className='phone'>
                            {phone && <div className='value'><i className='fas fa-mobile-alt' />{phone}</div>}

                            <div className='form-group'>
                                <input type='tel' name='phone' className='form-control' onChange={this.inputChangedHandler} value={phone} placeholder={cms.banner.phone} />
                            </div>
                        </div>

                        <div className='edit'>
                            <button onClick={editing ? this.setEditInfo : this.edit} className={`btn btn-${window.COLOR_PRIMARY}`}>
                                <i className='fas fa-edit' />{editing ? cms.banner.save : cms.banner.edit}
                            </button>
                        </div>
                    </div>
                </section>

                <section className='methods'>
                    <div className='title'>{cms.methods.select}</div>

                    <div className='body'>
                        {methodsContent}
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

            <Checkout title={cms.cart.due_amount} label={cms.cart.pay_now} value={due_amount} onClick={() => this.props.payment(slug, { ...this.state, ...this.props.location.state })} />
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    payment: (slug, data) => dispatch(postPayment(slug, data)),
    reset: () => dispatch(resetRestaurants(true)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Payment));