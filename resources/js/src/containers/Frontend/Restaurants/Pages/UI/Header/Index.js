import React from 'react';
import { useHistory } from 'react-router-dom';

import Cart from '../../../../../../components/Frontend/UI/Cart';

import './Header.scss';

export default function Header({ name }) {
    return <header className='UI Header'>
        <span onClick={useHistory().goBack} className='back'>
            <i className='fas fa-angle-left' />
        </span>

        <div className='meal-name'>
            <div>{name}</div>
        </div>

        <div>
            <Cart />
        </div>
    </header>;
}