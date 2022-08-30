import { isNumber } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Header from '../../UI/Header';

import Loading from '../../../../../../components/UI/Preloaders/Loading';

import { getOrderTracking } from '../../../../../../store/actions/frontend/restaurants';
import { errorAlert } from '../../../../../../shared/utility';

import './Tracking.scss';

class Tracking extends Component {
    state = {
        time: '00:00',

        isMounted: false,
    }

    componentDidMount() {
        const { slug, md5 } = this.props.match.params;
        this.setState({ isMounted: true }, () => this.props.tracking(slug, md5));
    }

    componentDidUpdate() {
        const { frontend: { restaurants: { error } } } = this.props;
        if (error) return errorAlert(error);
    }

    render() {
        const {
            content: { cms: { pages: { frontend: { restaurants: { order: { tracking: cms } } } } } },
            frontend: { restaurants: { loading, order = {} } },
            match: { params: { slug } }
        } = this.props;
        const { time } = this.state;

        const content = <div className='Page Tracking'>
            <Header name={cms.page_title}>
                <div className='search'>
                    <i className='fas fa-search' />
                </div>
            </Header>

            <main style={order.status === 3 ? { backgroundImage: 'url("/images/bg-order-tracking-title.png")' } : {}}>
                {isNumber(order.status) && (order.status !== 3 ? <>
                    <div className='order-no'>{cms.order_no} #{order.order_no}</div>

                    <div className='img'>
                        <img src='/images/bg-order-tracking.png' alt='Order Tracking' />
                    </div>

                    <div className={`process${['', ' received', ' preparing'][order.status]}`}>
                        {cms.process.list.map((line, index) => <div key={line} className="line">
                            <div className='icon'>
                                <i className={`fas fa-${order.status > index ? 'check' : 'spinner fa-spin'}`} />
                            </div>

                            <div className='text'>{line}</div>

                            {index === 1 && <div className='counter'>
                                <i className='fas fa-clock' /><span className='time'>{time}</span> <span>{cms.process.left}</span>
                            </div>}
                        </div>)}
                    </div>

                    {order.delivery_man && <div className='delivery-man'>
                        <div className='img' style={{ backgroundImage: `url("${order.delivery_man.photo}")` }} />

                        <div className='block'>
                            <div className='text'>
                                <div className='name'>{order.delivery_man.name}</div>

                                <div className='phone'>{order.delivery_man.phone}</div>

                                <div className='out'>{cms.process.out_for_delivery}</div>
                            </div>

                            <div className='phone-button'>
                                <a href={`tel:${order.delivery_man.phone}`} className='btn btn-green'>
                                    <i className='fas fa-phone' />
                                </a>
                            </div>
                        </div>
                    </div>}
                </> : <>
                    <div className='title'>{cms.title}</div>

                    <div className='order'>
                        <div className='order-no success'>{cms.order_no} #{order.order_no}</div>
                    </div>

                    <div className='icon'>
                        <i className='fas fa-check' />
                    </div>

                    <div className='actions'>
                        <Link to={`/restaurants/${slug}`} className='btn btn-orange'><i className='fas fa-arrow-left' />{cms.go_home}</Link>
                    </div>
                </>)}
            </main>
        </div>;

        return <Loading loading={this.state.isMounted && loading}>
            {content}
        </Loading>
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    tracking: (slug, md5) => dispatch(getOrderTracking(slug, md5)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tracking));