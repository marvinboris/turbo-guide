import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPencilAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { Button, FormGroup, Modal, ModalBody, ModalHeader } from 'reactstrap';

import Wrapper from '../Wrapper';
import Comment from './Comment';
import FormInput from '../../../../../components/UI/Input/Input';
import Stars from '../../../../../components/UI/Stars';

import * as actions from '../../../../../store/actions/frontend';

class Comments extends Component {
    state = {
        modal: false,

        name: '',
        body: '',
        country: 'CM',
    }

    toggle = () => this.setState(prevState => ({ modal: !prevState.modal }));

    submitHandler = e => {
        e.preventDefault();
        this.props.post(this.props.match.params.slug, this.props.match.params.id, e.target);
    }

    inputChangeHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const {
            content: {
                cms: { pages: { frontend: { restaurants: { meals } } } },
                countries,
            },
            frontend: { restaurants: { restaurant = {}, comments = [] } }
        } = this.props;
        const { modal, name, body, country } = this.state;
        const lang = localStorage.getItem('lang');

        const commentsContent = comments.map(comment => <Comment key={comment.id + Math.random()} {...comment} />);
        const countriesOptions = countries.map(({ country, code, name }) => <option key={country} value={country} code={code}>{name}</option>);

        return <>
            <Wrapper>
                <div>
                    {commentsContent}
                </div>

                <div className="mb-4">
                    <span onClick={this.toggle} className="btn btn-orange text-decoration-none text-11 rounded-pill">
                        <FontAwesomeIcon icon={faComment} className="mr-2" />{meals.comments.post_comment}
                    </span>
                </div>

                {restaurant.disclaimer[lang] && <div>
                    <div style={{ padding: '12px 33px', margin: '0px -33px' }} className="bg-orange-10 text-300 text-10">
                        {restaurant.disclaimer[lang]}
                    </div>
                </div>}


                <Modal isOpen={modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{meals.comments.post_comment}</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.submitHandler}>
                            <FormInput type="text" icon={faUser} onChange={this.inputChangeHandler} value={name} name="name" required placeholder={meals.comments.name} />
                            <FormInput type="select" addon={<div>
                                <div className="rounded-circle mx-auto overflow-hidden position-relative d-flex justify-content-center align-items-center" style={{ width: 18, height: 18 }}>
                                    <span className={`flag-icon text-large position-absolute flag-icon-${country.toLowerCase()}`} />
                                </div>
                            </div>} onChange={this.inputChangeHandler} value={country} name="country" required>
                                <option>{"Select Country"}</option>
                                {countriesOptions}
                            </FormInput>
                            <input type="hidden" name="mark" />
                            <FormGroup>
                                <Stars />
                            </FormGroup>
                            <FormInput type="textarea" icon={faPencilAlt} onChange={this.inputChangeHandler} value={body} name="body" required placeholder={meals.comments.body} />

                            <Button className="btn btn-orange text-decoration-none text-11 rounded-pill">
                                <FontAwesomeIcon icon={faComment} className="mr-2" />{meals.comments.post_comment}
                            </Button>
                        </form>
                    </ModalBody>
                </Modal>
            </Wrapper>
        </>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    post: (slug, id, data) => dispatch(actions.postComment(slug, id, data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments));