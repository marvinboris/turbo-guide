import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';

import Delete from '../../Delete/Delete';

import * as actions from '../../../../../store/actions/backend';

import './Drink.css';

const Circle = ({ color, icon }) => <div style={{ height: 38, width: 38 }} className={`bg-white rounded-circle d-flex justify-content-center align-items-center border border-${color} border-2 text-${color}`}>
    <FontAwesomeIcon icon={icon} />
</div>;

class Drink extends Component {
    render() {
        const { id, name, photo, price, is_active } = this.props

        return <div className={`Drink d-flex m-2 rounded-4 bg-white`}>
            <div className={`p-3 text-center bg-${is_active ? "green" : "red"}-10`}>
                <div className="mb-2">
                    <div className="embed-responsive embed-responsive-1by1 rounded-4 shadow-sm" style={{ background: `url('${photo}') no-repeat center`, backgroundSize: 'cover' }} />
                </div>

                <div className="mt-1 mb-2 text-14 text-300 text-truncate overflow-hidden">{name}</div>

                <div className="mb-2 text-16 text-500 d-flex justify-content-center align-items-center text-truncate">
                    <div>{price.toFixed(2)} </div>

                    <div className="text-10 text-300">XAF</div>
                </div>

                <div className="text-10 d-flex justify-content-center">
                    <Link to={`/restaurant/drinks/${id}`} className="text-decoration-none mr-2">
                        <Circle color="green" icon={faEye} />
                    </Link>

                    <Link to={`/restaurant/drinks/${id}/edit`} className="text-decoration-none mr-2">
                        <Circle color="primary" icon={faEdit} />
                    </Link>

                    <div>
                        <Delete deleteAction={() => this.props.delete(id)}>
                            <Circle color="red" icon={faTrash} />
                        </Delete>
                    </div>
                </div>
            </div>
        </div>;
    }
}

const mapDispatchToProps = dispatch => ({
    delete: id => dispatch(actions.deleteDrinks(id)),
});

export default connect(null, mapDispatchToProps)(Drink);