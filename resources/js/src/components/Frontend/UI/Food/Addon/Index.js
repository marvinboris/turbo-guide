import React, { Component } from 'react';
import { connect } from 'react-redux';

import Food from '..';

import './Addon.scss';

class Addon extends Component {
    render() {
        const { content: { cms: { pages: { frontend: { restaurants: { meal: { add } } } } } } } = this.props;

        return <Food addon {...this.props}>
            <div className="add">
                <button onClick={this.props.add} className={`btn btn-${window.COLOR_PRIMARY}`}>
                    <i className='fas fa-plus' />{add}
                </button>
            </div>
        </Food>;
    }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Addon);