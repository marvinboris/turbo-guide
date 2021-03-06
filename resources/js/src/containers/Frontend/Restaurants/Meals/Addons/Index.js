import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import Wrapper from '../Wrapper';

import Addon from '../../../../../components/UI/Food/Addon';

import * as actionTypes from '../../../../../store/actions/frontend';

class Addons extends Component {
    async componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const {
            content: {
                cms: { pages: { frontend: { restaurants: { meals } } } },
                currencies,
            },
            frontend: { restaurants: { restaurant = {}, total = 0, addons = [], currency, position } }
        } = this.props;

        const currencyObj = currencies.find(c => c.cc === currency);
        const symbol = currencyObj && currencyObj.cc;
        const lang = localStorage.getItem('lang');

        const addonsContent = addons.map(addon => <Addon key={addon.id + Math.random()} symbol={symbol} position={position} {...{ ...addon, name: addon.name[lang], description: addon.description[lang] }} add={() => this.props.add(addon.id)} sub={() => this.props.sub(addon.id)} />);

        return <>
            {restaurant.caution[lang] && <Wrapper className="pb-4 mb-2">
                <div className="rounded-8 bg-soft py-2 px-3 text-10">
                    {restaurant.caution[lang]}
                </div>
            </Wrapper>}

            <div>
                {addonsContent}
            </div>

            <div className="mb-3">
                <div style={{ margin: '0px -22px' }} className="bg-green-10">
                    <div className="row align-items-center">
                        <div className="col-6 pl-5 text-14">
                            {meals.addons.your_cart_cost_is}
                        </div>

                        <div className="col-6 rounded-4 bg-green text-white p-4 rounded-right-0 text-20 text-montserrat">
                            <FontAwesomeIcon icon={faShoppingBasket} className="mr-3" />

                            {position == 0 && <span className="text-10 mr-1">{symbol}</span>}
                            <span className="text-700">{total.toFixed(2)}</span>
                            {position == 1 && <span className="text-10 ml-1">{symbol}</span>}
                        </div>
                    </div>
                </div>
            </div>
        </>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    add: id => dispatch(actionTypes.addAddon(id)),
    sub: id => dispatch(actionTypes.subAddon(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Addons));