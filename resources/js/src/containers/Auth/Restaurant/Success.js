import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { CustomInput, Form } from 'reactstrap';
import { faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faEnvelope } from '@fortawesome/free-regular-svg-icons';

import Input from '../../../components/UI/Input/Input';
import CenterButton from '../../../components/UI/Button/CenterButton/CenterButton';
import CustomSpinner from '../../../components/UI/CustomSpinner/CustomSpinner';
import Error from '../../../components/Error/Error';
import Feedback from '../../../components/Feedback/Feedback';

import * as actions from '../../../store/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Success extends Component {
    componentWillUnmount() {
        this.props.clear();
    }

    clickHandler = () => {
        this.props.history.push('/auth/login');
    }

    render() {
        const {
            content: {
                cms: {
                    pages: { auth: { restaurant: { success } } }
                }
            },
            auth: { loading, error, message, signup: { status, email }, },
        } = this.props;
        let titleContent;

        titleContent = <>
            {success.good_job}
        </>;

        let redirect = null;
        if (!status) redirect = <Redirect to="/auth/login" />;

        const errors = <Error err={error} />;
        const feedback = <Feedback message={message} />;
        let content = null;

        if (loading) content = <CustomSpinner />;
        else content = <div>
            <div className="text-center text-72 text-green mb-4 pb-3">
                <FontAwesomeIcon icon={faCheckCircle} />
            </div>

            <div className="text-center text-16 mb-5 pb-3">{success.thank_you} <span className="text-orange">{email}</span></div>

            <Link to="/auth/login" className="text-decoration-none text-reset d-block">
                <CenterButton color="orange" size="lg" className="btn-block" icon={faSignInAlt}>{success.sign_in}</CenterButton>
            </Link>
        </div>;

        return (
            <>
                <div className="text-center text-30 text-500 mt-5 mb-4 pb-3">
                    {titleContent}
                </div>
                {redirect}
                {errors}
                {feedback}
                {content}
            </>
        )
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    clear: () => dispatch(actions.clearSignup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Success);