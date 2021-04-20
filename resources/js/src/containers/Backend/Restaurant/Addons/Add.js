import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { faBook, faCheckCircle, faCookie, faFileImage, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import Form from '../../../../components/Backend/UI/Food/Form';
import FormInput from '../../../../components/UI/Input/Input';
import Feedback from '../../../../components/Feedback/Feedback';

import * as actions from '../../../../store/actions';
import { updateObject } from '../../../../shared/utility';

class Add extends Component {
    state = {
        name: '',
        description: '',
        price: '',
        reference: '',
        is_active: '1',
        photo: '',
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.backend.addons.addon && prevState.name === '') {
            const { backend: { addons: { addon } } } = nextProps;
            return updateObject(prevState, { ...addon });
        }
        return prevState;
    }

    async componentDidMount() {
        this.props.reset();
        if (this.props.edit) this.props.get(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    submitHandler = e => {
        e.preventDefault();
        if (this.props.edit) this.props.patch(this.props.match.params.id, e.target);
        else this.props.post(e.target);
    }

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        if (files) this.readURL(e.target);
        this.setState({ [name]: files ? files[0] : value });
    }

    readURL = input => {
        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                document.getElementById(`embed-${input.name}`).style.backgroundImage = `url('${e.target.result}')`;
                document.getElementById(`embed-${input.name}`).style.backgroundSize = "cover";
            }

            reader.readAsDataURL(input.files[0]); // convert to base64 string
        }
    }

    fileUpload = () => document.getElementById('photo').click()

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { form: { save, selected_file, active, inactive } }, backend: { pages: { addons: { title, subtitle, instructions, add, edit, index, form } } } }
                },
                currencies,
            },
            backend: { addons: { loading, error, message, addon } },
            auth: { data: { currency } }
        } = this.props;
        let { name, description, price, reference, is_active, photo } = this.state;
        let content = null;
        let errors = null;

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            let symbol;
            const selectedCurrency = currencies.find(c => c.cc === currency);
            if (selectedCurrency) symbol = selectedCurrency.symbol;

            content = (
                <>
                    <Col lg={9}>
                        <Feedback message={message} />

                        {this.props.edit && <input type="hidden" name="_method" defaultValue="PATCH" />}

                        <div className="shadow-lg rounded-8 bg-white px-5 py-4">
                            <Row className="my-3">
                                <div className="mb-3 text-14 col-12">{instructions}</div>

                                <div className="col-lg-9">
                                    <Row>
                                        <FormInput type="text" className="col-md-6" icon={faBook} onChange={this.inputChangeHandler} value={name} name="name" required placeholder={form.name} />
                                        <FormInput type="text" className="col-md-6" icon={faPencilAlt} onChange={this.inputChangeHandler} value={description} name="description" required placeholder={form.description} />
                                        <FormInput type="number" className="col-md-6" addon={<div className="text-center text-light" style={{ margin: '0 -10px' }}>{symbol}</div>} onChange={this.inputChangeHandler} value={price} name="price" required placeholder={form.price} />
                                        <FormInput type="text" className="col-md-6" icon={faPencilAlt} onChange={this.inputChangeHandler} value={reference} name="reference" required placeholder={form.reference} />
                                        <FormInput type="select" className="col-md-6" icon={faPencilAlt} onChange={this.inputChangeHandler} value={is_active} name="is_active" required>
                                            <option>{form.select_status}</option>
                                            <option value={1}>{active}</option>
                                            <option value={0}>{inactive}</option>
                                        </FormInput>
                                    </Row>
                                </div>

                                <div className="col-lg-3">
                                    <div id="embed-photo" className="embed-responsive embed-responsive-1by1 bg-soft rounded-8 d-flex justify-content-center align-items-center" style={{ cursor: 'pointer', background: photo && `url("${photo}") no-repeat center`, backgroundSize: 'cover' }} onClick={this.fileUpload}>
                                        {this.props.edit
                                            ? photo && (photo !== addon.photo) && <div className="text-center text-green">
                                                <div><FontAwesomeIcon icon={faCheckCircle} fixedWidth size="5x" /></div>

                                                <div className="mt-3">{selected_file}</div>
                                            </div>
                                            : photo ? <div className="text-center text-green">
                                                <div><FontAwesomeIcon icon={faCheckCircle} fixedWidth size="5x" /></div>

                                                <div className="mt-3">{selected_file}</div>
                                            </div> : <div className="text-center text-light overflow-hidden px-4">
                                                <div><FontAwesomeIcon icon={faFileImage} fixedWidth size="5x" /></div>

                                                <div className="mt-3 mb-1 text-center text-12 text-truncate">{form.upload}</div>

                                                <div className="text-center text-12 text-truncate">{form.size}</div>
                                            </div>}
                                    </div>
                                </div>

                                <div className="col-12">
                                    <Button color="orange" className="text-20 rounded-4 py-3 px-4">
                                        <div className="mx-3">{save}<FontAwesomeIcon icon={faSave} className="ml-4" /></div>
                                    </Button>
                                </div>
                            </Row>
                        </div>
                    </Col>
                </>
            );
        }

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb main={this.props.edit ? edit : add} icon={faCookie} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{this.props.edit ? edit : add}</Subtitle>
                </TitleWrapper>
                <div>
                    {errors}
                    <Row>
                        <Form onSubmit={this.submitHandler} icon={faCookie} title={this.props.edit ? edit : add} subtitle={subtitle} list={index} link="/restaurant/addons" innerClassName="row justify-content-center">
                            <input type="file" id="photo" name="photo" className="d-none" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg" />
                            {content}
                        </Form>
                    </Row>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: id => dispatch(actions.getAddon(id)),
    post: data => dispatch(actions.postAddons(data)),
    patch: (id, data) => dispatch(actions.patchAddons(id, data)),
    reset: () => dispatch(actions.resetAddons()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));