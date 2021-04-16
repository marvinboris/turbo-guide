import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { faEye, faKey, faLock, faPaperPlane, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Input from '../../../../components/UI/Input/Input';
import CenterButton from '../../../../components/UI/Button/CenterButton/CenterButton';
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';

import * as actions from '../../../../store/actions';

export class Login extends Component {
    state = {
        token: '',
        password: '',
        modal: false,

        visible: false,
    }

    toggle = () => {
        this.setState(prevState => ({ modal: !prevState.modal }));
    }

    forgotPassword = e => {
        e.preventDefault();
        this.props.onForgotPassword(e.target);
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onAuth(e.target);
    }

    inputChangeHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    eyeClickedHandler = () => this.setState(prevState => ({ visible: !prevState.visible }))

    render() {
        const { token, password, visible } = this.state;
        const {
            content: {
                cms: {
                    pages: { auth: { restaurant: { login } } }
                }
            },
            auth: { loading, error, message },
        } = this.props;
        let titleContent, formContent;

        titleContent = <>
            {login.welcome}
        </>;

        formContent = <>
            <Input type="text" icon={faKey} onChange={this.inputChangeHandler} validation={{ required: true }} value={token} name="token" required placeholder={login.token} />
            <Input id="password" type={visible ? "text" : "password"} className="position-relative" icon={faLock} onChange={this.inputChangeHandler} validation={{ required: true }} value={password} name="password" required placeholder={login.password}
                bonus={<div className="position-absolute d-flex align-items-center px-2" style={{ height: 53.5, top: 0, right: 30, zIndex: 10, cursor: 'pointer' }} onClick={this.eyeClickedHandler}>
                    <div className="position-relative">
                        <FontAwesomeIcon icon={faEye} className="text-orange" />

                        <div style={!visible ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                            <div style={{ height: 1.5, width: 18, transform: 'rotate(30deg) translate(-7px, -10px)' }} className="bg-orange" />
                        </div>
                    </div>
                </div>}
            />
            <div className="pl-5 my-4">
                {login.forgot} ? <span className="text-orange" onClick={this.toggle} style={{ cursor: 'pointer' }}>{login.reset}</span>
            </div>

            <div className="mb-5 pb-3">
                <CenterButton color="orange" size="lg" className="btn-block" icon={faSignInAlt}>{login.sign_in}</CenterButton>
            </div>

            <div className="text-center">
                {login.no_account} ? <Link to="/auth/register" className="text-decoration-none text-500 text-orange">{login.sign_up}</Link>
            </div>
        </>;


        const errors = <Error err={error} />;
        const feedback = <Feedback message={message} />;
        let content = null;

        if (loading) content = <div className="h-100 d-flex justify-content-center align-items-center"><CustomSpinner /></div>;
        else content = <Form onSubmit={this.submitHandler}>
            {formContent}

            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>{login.forgot}</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.forgotPassword}>
                        <FormGroup>
                            <Label>{login.token}</Label>
                            <Input icon={faUser} type="text" name="token" required />
                        </FormGroup>
                        <Button color="orange">{login.send}<FontAwesomeIcon icon={faPaperPlane} className="ml-2" /></Button>
                    </Form>
                </ModalBody>
            </Modal>
        </Form>;

        return <>
            <div className="text-center text-16 mb-4 pb-3">
                {titleContent}
            </div>
            {errors}
            {feedback}
            {content}
        </>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuth: data => dispatch(actions.authRestaurantLogin(data)),
    onForgotPassword: data => dispatch(actions.forgotPassword(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);