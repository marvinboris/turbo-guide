import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Frontend.css';

class Layout extends Component {
    render() {
        const {
            children
        } = this.props;

        return <div className="Frontend bg-white">
            <div className="min-vh-100 d-flex flex-column">
                <main className="flex-fill bg-white text-secondary">
                    {children}
                </main>

                <footer className="footer">
                    <span className="footer_signature">
                        <span className="footer_signature_struct">
                            Copyrights 2021. All rights reserved. E-menu Loop by

                            <a className="linknav" target="_blank" href="http://briluce.com">
                                <img src="images/Briluce-logo-for-white-BG.png" alt="" />
                            </a>
                        </span>
                    </span>

                    <span className="logo_footer">
                        <a target="_blank" className="linknav" href="https://www.facebook.com/briluceservices/"><span
                            className="logo_footer_val"><i className="fab fa-facebook-f"></i></span></a>

                        <a target="_blank" className="linknav" href="https://twitter.com/Briluceservices/"><span className="logo_footer_val"><i
                            className="fab fa-twitter"></i></span></a>

                        <a target="_blank" className="linknav" href="https://www.instagram.com/Briluceservices/"><span
                            className="logo_footer_val"><i className="fab fa-instagram"></i></span></a>
                    </span>

                    <span className="footer_design"></span>
                </footer>
            </div>
        </div>;
    }
}

export default withRouter(Layout);