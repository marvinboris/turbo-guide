import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Wrapper from '../Wrapper';



class Description extends Component {
    render() {
        const { frontend: { restaurants: { meal = {} } } } = this.props;

        return <>
            <Wrapper>
                <div className="mb-3 pb-4 text-300 text-10">{meal.description}</div>

                <div>
                    <div className="text-14 mb-2">Must Read</div>

                    <div style={{ padding: '12px 33px', margin: '0px -33px' }} className="bg-orange-10 text-300 text-10">
                        Dear customers, we would love to make available more food items
                        but unfortunately kindly note that some of the addons mentioned
                        below might not be available. For special request, please contact us.
                        Thanks for understanding.
                    </div>
                </div>
            </Wrapper>
        </>;
    }
}

const mapStateToProps = state => ({ ...state });

export default withRouter(connect(mapStateToProps)(Description));