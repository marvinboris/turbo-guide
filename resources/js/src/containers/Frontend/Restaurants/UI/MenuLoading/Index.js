import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from '../../../../../components/Footer/Footer';

import './MenuLoading.scss';

class MenuLoading extends Component {
    state = {
        fadedOut: false,
        percentage: 0,
    }

    componentDidMount() {
        for (let index = 1; index <= 1000; index++) {
            setTimeout(() => {
                this.setState({ percentage: index });
            }, index * 2);
        }
    }

    componentDidUpdate() {
        if (!this.state.fadedOut && !this.props.loading) {
            this.setState({ fadedOut: true });
            $('.Frontend.Restaurants .MenuLoading').fadeOut(2000);
        }
    }

    render() {
        const { content: { cms: { pages: { frontend: { restaurants: { home } } } } } } = this.props;

        return <>
            <div className="MenuLoading">
                <div className='restaurant-name'>
                    <div className='text'>{document.head.querySelector('meta[name="restaurant-name"]').content}</div>

                    <div className='image'>
                        <img src='/images/leaves.png' />
                    </div>
                </div>

                <div className='digital-menu'>
                    <div className='text'>{home.digital_menu}</div>

                    <div className='image'>
                        <img src='/images/digital-menu.png' />
                    </div>
                </div>

                <div className='loading-wrapper'>
                    <div className='pie-parent'>
                        <div className={`pie-wrapper progress-${this.state.percentage}`}>
                            <div className="pie">
                                <div className="left-side half-circle" />
                                <div className="right-side half-circle" />
                            </div>
                        </div>
                    </div>

                    <div className='loading'>
                        <div className="loading-screen">
                            <div className="box">
                                <div className='percentage'>{Math.round(this.state.percentage / 10)}%</div>

                                <div id="water" className="water" style={{ top: -.248 * this.state.percentage }}>
                                    <svg viewBox="0 0 560 20" id="wave" className="water_wave water_wave_back" width="100%" height="100%">
                                        <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
                                        <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
                                        <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
                                        <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
                                    </svg>
                                    <svg viewBox="0 0 560 20" id="wave" className="water_wave water_wave_front" width="100%" height="100%">
                                        <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
                                        <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
                                        <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
                                        <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='loading-menu'>{home.loading_menu}</div>

                <footer>
                    <Footer />
                </footer>
            </div>

            {this.state.fadedOut && this.props.children}
        </>;
    };
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(MenuLoading);