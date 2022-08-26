import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from '../../../../../components/Footer/Footer';

import './SplashScreen.scss';

class SplashScreen extends Component {
    render() {
        const { content: { cms: { pages: { frontend: { restaurants: { home } } } } } } = this.props;

        return <div className='SplashScreen'>
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

            <footer>
                <Footer />
            </footer>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(SplashScreen);