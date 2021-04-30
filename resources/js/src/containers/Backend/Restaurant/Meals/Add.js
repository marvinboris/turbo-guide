import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, FormGroup, Row } from 'reactstrap';
import { faBook, faCheckCircle, faClock, faCookie, faDrumstickBite, faFileImage, faMinusCircle, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
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

import './Meals.css';

const initialState = {
    name: '',
    category_id: '',
    description: '',
    price: '',
    time: '',
    reference: '',
    is_active: '1',
    photo: '',

    addons: [],

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
        if (name === 'select_addon') {
            const addons = [...this.state.addons];
            const addon = this.props.backend.meals.allAddons.find(a => +a.id === +value);
            addons.push(addon);
            return this.setState({ addons });
        }
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

    onClick = id => this.setState(prevState => ({ addons: prevState.addons.filter(a => +a.id !== +id) }))

    fileUpload = () => document.getElementById('photo').click()



    // Lifecycle methods
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.backend.meals.meal && prevState.name === '') {
            const { backend: { meals: { meal } } } = nextProps;
            return updateObject(prevState, { ...meal });
        }
        return prevState;
    }

    componentDidMount() {
        this.props.reset();
        if (this.props.edit) this.props.get(this.props.match.params.id);
        else this.props.info();
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.backend.meals.message && this.props.backend.meals.message && this.props.backend.meals.message.type === 'success' && !this.props.edit) {
            if (this.state.add) this.setState({ ...initialState });
            else this.props.history.push({
                pathname: '/restaurant/meals',
                state: {
                    message: this.props.backend.meals.message,
                },
            });
        }
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { form: { selected_file, active, inactive } }, backend: { pages: { meals: { title, subtitle, instructions, add, edit, index, form } } } }
                },
                currencies,
            },
            backend: { meals: { loading, error, message, meal, categories = [], allAddons = [] } },
            auth: { data: { currency } }
        } = this.props;
        let { name, category_id, description, price, reference, time, is_active, photo, addons } = this.state;
        let content = null;
        let errors = null;

        if (!categories) categories = [];
        const categoriesOptions = categories.sort((a, b) => a.name > b.name).map(category => <option key={JSON.stringify(category)} value={category.id}>{category.name}</option>);

        const addonsOptions = allAddons.sort((a, b) => a.name > b.name).filter(addon => !addons.map(a => a.id).includes(addon.id)).map(addon => <option key={JSON.stringify(addon)} value={addon.id}>{addon.name}</option>);

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
                    <Col xl={9}>
                        <Feedback message={message} />

                        {this.props.edit && <input type="hidden" name="_method" defaultValue="PATCH" />}

                        <div className="shadow-lg rounded-8 bg-white px-4 px-sm-5 py-3 py-sm-4">
                            <Row className="my-2 my-sm-3">
                                <div className="mb-3 text-14 col-12">{instructions}</div>

                                <div className="col-lg-9">
                                    <Row>
                                        <FormInput type="text" className="col-md-6" icon={faDrumstickBite} onChange={this.inputChangeHandler} value={name} name="name" required placeholder={form.name} />
                                        <FormInput type="select" className="col-md-6" icon={faBook} onChange={this.inputChangeHandler} value={category_id} name="category_id" required>
                                            <option>{form.select_category}</option>
                                            {categoriesOptions}
                                        </FormInput>
                                        <FormInput type="select" className="col-md-6" icon={faCookie} onChange={this.inputChangeHandler} name="select_addon" required>
                                            <option>{form.select_addon}</option>
                                            {addonsOptions}
                                        </FormInput>
                                        <FormGroup className="col-md-6">
                                            <div className="addons border border-soft rounded-6 p-1" style={{ height: 53.33, overflowX: 'auto' }}>
                                                <div className="text-truncate h-100" style={{ overflow: 'visible' }}>
                                                    {addons.map(addon => <div className="mr-1 bg-blue-10 rounded-4 p-2 position-relative h-100 d-inline-flex align-items-center" key={Math.random() + JSON.stringify(addon)}>
                                                        <div className="mx-3 text-300 text-12">{addon.name}</div>
                                                        <input type="hidden" name="addons[]" defaultValue={addon.id} />

                                                        <FontAwesomeIcon icon={faMinusCircle} className="text-red text-10 position-absolute" style={{ top: 6, right: 6, cursor: 'pointer' }} onClick={() => this.onClick(addon.id)} />
                                                    </div>)}
                                                </div>
                                            </div>
                                        </FormGroup>
                                        <FormGroup className="col-12 text-14">
                                            {form.total_addons}: <span className="text-700 text-orange">{addons.length}</span>
                                        </FormGroup>
                                        <FormInput type="text" className="col-md-6" icon={faPencilAlt} onChange={this.inputChangeHandler} value={description} name="description" required placeholder={form.description} />
                                        <FormInput type="number" className="col-md-6" addon={<div className="text-center text-light" style={{ margin: '0 -10px' }}>{symbol}</div>} onChange={this.inputChangeHandler} value={price} name="price" required placeholder={form.price} />
                                        <FormInput type="text" className="col-md-6" icon={faPencilAlt} onChange={this.inputChangeHandler} value={reference} name="reference" required placeholder={form.reference} />
                                        <FormInput type="number" className="col-md-6" icon={faClock} onChange={this.inputChangeHandler} value={time} name="time" required placeholder={form.time} />
                                        <FormInput type="select" className="col-md-6" icon={faPencilAlt} onChange={this.inputChangeHandler} value={is_active} name="is_active" required>
                                            <option>{form.select_status}</option>
                                            <option value={1}>{active}</option>
                                            <option value={0}>{inactive}</option>
                                        </FormInput>
                                    </Row>
                                </div>

                                <div className="col-lg-3">
                                    <FormGroup>
                                        <div id="embed-photo" className="embed-responsive embed-responsive-1by1 bg-soft rounded-8 d-flex justify-content-center align-items-center" style={{
                                            cursor: 'pointer',
                                            backgroundImage: photo && `url("${photo}")`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover'
                                        }} onClick={this.fileUpload}>
                                            {this.props.edit
                                                ? photo && (photo !== meal.photo) && <div className="text-center text-green w-100">
                                                    <div><FontAwesomeIcon icon={faCheckCircle} fixedWidth size="5x" /></div>

                                                    <div className="mt-3">{selected_file}</div>
                                                </div>
                                                : photo ? <div className="text-center text-green w-100">
                                                    <div><FontAwesomeIcon icon={faCheckCircle} fixedWidth size="5x" /></div>

                                                    <div className="mt-3">{selected_file}</div>
                                                </div> : <div className="text-center text-light w-100 overflow-hidden px-3">
                                                    <div><FontAwesomeIcon icon={faFileImage} fixedWidth size="5x" /></div>

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
                    <Breadcrumb main={this.props.edit ? edit : add} icon={faDrumstickBite} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{this.props.edit ? edit : add}</Subtitle>
                </TitleWrapper>
                <div className="Meals">
                    {errors}
                    <Row>
                        <Form onSubmit={this.saveHandler} icon={faDrumstickBite} title={this.props.edit ? edit : add} subtitle={subtitle} list={index} link="/restaurant/meals" innerClassName="row justify-content-center">
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
    get: id => dispatch(actions.getMeal(id)),
    info: () => dispatch(actions.getMealsInfo()),
    post: data => dispatch(actions.postMeals(data)),
    patch: (id, data) => dispatch(actions.patchMeals(id, data)),
    reset: () => dispatch(actions.resetMeals()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));