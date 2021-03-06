import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Container } from 'reactstrap';

import Logo from '../../../components/UI/Logo/Logo';

class Layout extends Component {
    render() {
        const {
            children,
            content: {
                cms: {
                    global: { app_name, company_logo },
                    pages: { auth: { footer: { copyright, all_rights } } }
                }
            },
            dark = false
        } = this.props;
        let footerContent;

        footerContent = <>
            {copyright} {new Date().getFullYear()} <span className={`text-500 text-${dark ? "orange" : "orange"}`}>{app_name}</span>. {all_rights} <img src={company_logo} style={{ height: 47 }} />.
        </>;

        return <div className={`min-vh-100 d-flex flex-column bg-${dark ? "darkblue" : "soft text-secondary"}`}>
            <div className="flex-fill d-flex justify-content-center align-items-center p-3">
                <div className="rounded-8 bg-white shadow px-4 px-sm-5 py-3 py-sm-4" style={{ maxWidth: 500 }}>
                    <div className="mx-2 mx-sm-3 my-1 my-sm-2">
                        <div className="text-center mb-3 mb-sm-4">
                            <Link to="/" className="text-decoration-none text-reset">
                                <Logo />
                            </Link>
                        </div>

                        <div>{children}</div>
                    </div>
                </div>
            </div>

            <div className={`${dark ? "text-light border-orange-50" : ""} pb-3 mb-1 d-flex justify-content-center`}>
                <div>
                    <div>
                        {footerContent}
                    </div>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = state => ({ ...state });

export default withRouter(connect(mapStateToProps)(Layout));