import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';

import './Frontend.css';

class Layout extends Component {
    render() {
        const {
            children
        } = this.props;

        return <div className="Frontend bg-soft">
            <div className="content min-vh-100 d-flex flex-column mx-auto shadow">
                <main className="flex-fill bg-white text-secondary">
                    {children}
                </main>

                <Footer />
            </div>
        </div>;
    }
}

export default withRouter(Layout);