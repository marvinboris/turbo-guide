import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, FormGroup, Input, Row } from 'reactstrap';
import { faBook, faCheckCircle, faFileImage, faListAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import Form from '../../../../components/Backend/UI/Food/Form';
import Save from '../../../../components/Backend/UI/Food/Form/Save';
import FormInput from '../../../../components/UI/Input/Input';
import Feedback from '../../../../components/Feedback/Feedback';

import * as actions from '../../../../store/actions';
import { updateObject } from '../../../../shared/utility';

const initialState = {
    name: {},
    description: {},
    is_active: '1',
    photo: '',

    translate: '',

    add: false,
};

class Add extends Component {
    state = { ...initialState }



    // Component methods
    saveHandler = e => {
        e.preventDefault();
        if (this.props.edit) this.props.patch(this.props.match.params.id, e.target);
        else this.props.post(e.target);
    }

    saveAddHandler = () => this.setState({ add: true }, () => this.props.post(document.querySelector('form')))

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        if (files) this.readURL(e.target);
        if (name.includes('[')) {
            const { translate } = this.state;
            const stateName = name.split('[')[0];
            const element = this.state[stateName];
            element[translate] = value;
            return this.setState({ [stateName]: element });
        }
        this.setState({ [name]: files ? files[0] : value });
    }

    readURL = input => {
        if (input.files && input.files[0]) {
            const file = input.files[0];
            const reader = new FileReader();

            reader.onload = function (e) {
                document.getElementById(`embed-${input.name}`).style.backgroundImage = `url('${e.target.result}')`;
                document.getElementById(`embed-${input.name}`).style.backgroundSize = "cover";
                document.getElementById(`embed-${input.name}`).querySelector(".file-selected").innerHTML = file.name;
            }

            reader.readAsDataURL(file); // convert to base64 string
        }
    }

    fileUpload = () => document.getElementById('photo').click()



    // Lifecycle methods
    componentDidMount() {
        this.props.reset();
        if (this.props.edit) this.props.get(this.props.match.params.id);
        this.setState({ translate: this.props.auth.data.main_language });
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.backend.categories.message && this.props.backend.categories.message && this.props.backend.categories.message.type === 'success' && !this.props.edit) {
            if (this.state.add) this.setState({ ...initialState, translate: this.props.auth.data.main_language });
            else this.props.history.push({
                pathname: '/restaurant/categories',
                state: {
                    message: this.props.backend.categories.message,
                },
            });
        }
        if (!prevProps.backend.categories.category && this.props.backend.categories.category) {
            const { backend: { categories: { category } } } = this.props;
            this.setState({ ...category });
        }
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { form: { active, inactive } }, backend: { pages: { categories: { title, subtitle, instructions, add, edit, index, form } } } }
                }
            },
            backend: { categories: { loading, error, message, category } },
            auth: { data: { languages } }
        } = this.props;
        let { name, description, is_active, photo, translate } = this.state;
        let content = null;
        let errors = null;

        const languagesOptions = languages.sort((a, b) => a.name > b.name).map(language => <option key={JSON.stringify(language)} value={language.abbr}>{language.name}</option>);

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            content = (
                <>
                    <Col xl={9}>
                        <Feedback message={message} />

                        {this.props.edit && <input type="hidden" name="_method" defaultValue="PATCH" />}

                        <div className="shadow-lg rounded-8 bg-white px-4 px-sm-5 py-3 py-sm-4">
                            <Row className="my-2 my-sm-3">
                                <div className="mb-3 text-14 col-12">{instructions}</div>

                                <div className="col-lg-9">
                                    <div className="row">
                                        {languages.map(l => <Fragment key={'language-' + l.abbr}>
                                            <FormInput type="text" id={"name-" + l.abbr} className={"col-md-6" + (l.abbr === translate ? "" : " d-none")} icon={faBook} onChange={this.inputChangeHandler} value={name[l.abbr]} name={"name[" + l.abbr + "]"} required placeholder={form.name} />
                                            <FormInput type="text" id={"description-" + l.abbr} className={"col-md-6" + (l.abbr === translate ? "" : " d-none")} icon={faPencilAlt} onChange={this.inputChangeHandler} value={description[l.abbr]} name={"description[" + l.abbr + "]"} placeholder={form.description} />
                                        </Fragment>)}
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <FormGroup>
                                        <Input type="select" name="translate" onChange={this.inputChangeHandler} value={translate}>
                                            {languagesOptions}
                                        </Input>
                                    </FormGroup>
                                </div>

                                <div className="col-12 mb-3">
                                    <hr />
                                </div>

                                <div className="col-lg-9">
                                    <Row>
                                        <FormInput type="select" className="col-md-6" icon={faPencilAlt} onChange={this.inputChangeHandler} value={is_active} name="is_active" required>
                                            <option>{form.select_status}</option>
                                            <option value={1}>{active}</option>
                                            <option value={0}>{inactive}</option>
                                        </FormInput>
                                    </Row>
                                </div>

                                <div className="col-lg-3">
                                    <FormGroup>
                                        <div id="embed-photo" className="embed-responsive embed-responsive-1by1 bg-soft rounded-8 d-flex justify-content-center align-items-center position-relative" style={{
                                            cursor: 'pointer',
                                            backgroundImage: photo && `url("${photo}")`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            overflow: 'visible',
                                        }} onClick={this.fileUpload}>
                                            {this.props.edit
                                                ? photo && (photo !== category.photo) && <div className="text-center text-green w-100">
                                                    <div className="position-absolute" style={{ top: 0, right: 0, transform: 'translate(50%,-50%)' }}><FontAwesomeIcon icon={faCheckCircle} fixedWidth size="2x" /></div>

                                                    <div className="position-absolute file-selected text-truncate w-100 pt-3" style={{ top: '100%', left: 0 }} />
                                                </div>
                                                : photo ? <div className="text-center text-green w-100">
                                                    <div className="position-absolute" style={{ top: 0, right: 0, transform: 'translate(50%,-50%)' }}><FontAwesomeIcon icon={faCheckCircle} fixedWidth size="2x" /></div>

                                                    <div className="position-absolute file-selected text-truncate w-100 pt-3" style={{ top: '100%', left: 0 }} />
                                                </div> : <div className="text-center text-light w-100 overflow-hidden px-3">
                                                    <div><FontAwesomeIcon icon={faFileImage} fixedWidth size="4x" /></div>

                                                    <div className="mt-3 mb-1 text-center text-12 text-truncate">{form.upload}</div>

                                                    <div className="text-center text-12 text-truncate">{form.size}</div>
                                                </div>}
                                        </div>
                                    </FormGroup>
                                </div>

                                <Save edit={this.props.edit} saveAddHandler={this.saveAddHandler} />
                            </Row>
                        </div>

                    </Col>
                </>
            );
        }

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb items={this.props.edit && [{ to: '/restaurant/categories', content: index }]} main={this.props.edit ? edit : add} icon={faListAlt} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{this.props.edit ? edit : add}</Subtitle>
                </TitleWrapper>
                <div>
                    {errors}
                    <Row>
                        <Form onSubmit={this.saveHandler} icon={faListAlt} title={this.props.edit ? edit : add} subtitle={subtitle} list={index} link="/restaurant/categories" innerClassName="row justify-content-center">
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
    get: id => dispatch(actions.getCategory(id)),
    post: data => dispatch(actions.postCategories(data)),
    patch: (id, data) => dispatch(actions.patchCategories(id, data)),
    reset: () => dispatch(actions.resetCategories()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));