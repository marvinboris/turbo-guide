import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Wrapper from '../Wrapper';



class Description extends Component {
    render() {
        const {
            content: {
                cms: { pages: { frontend: { restaurants: { meals } } } }
            },
            frontend: { restaurants: { restaurant = {}, meal = {} } }
        } = this.props;
        const lang = localStorage.getItem('lang');

        return <>
            <Wrapper>
                <div className="mb-3 pb-4 text-300 text-10">{meal.description[lang]}</div>

                {restaurant.must_read[lang] && <div>
                    <div className="text-14 mb-2">{meals.must_read[lang]}</div>

                    <div style={{ padding: '12px 33px', margin: '0px -33px' }} className="bg-orange-10 text-300 text-10">
                        {restaurant.must_read[lang]}
                    </div>
                </div>}
            </Wrapper>
        </>;
    }
}

const mapStateToProps = state => ({ ...state });

export default withRouter(connect(mapStateToProps)(Description));