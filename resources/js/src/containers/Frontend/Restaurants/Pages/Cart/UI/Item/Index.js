import React from 'react';

import './Item.scss';

export default function Item({ item, symbol, position, add, sub }) {
    return <div className={`UI Item${item.type === 'meal' ? ' meal' : ''}`}>
        <div className='photo'>
            <div style={{ backgroundImage: `url("${item.photo}")` }} />
        </div>

        <div className='name-qty'>
            <div className='name'>{item.name}</div>

            <div className='qty'>x{item.qty}</div>
        </div>

        <div className='price-qty'>
            <div className='price'>{!position && <span>{`${symbol} `}</span>}{item.qty * item.price}{position && <span>{` ${symbol}`}</span>}</div>

            <div className='qty'>
                <div className='minus' onClick={sub}><i className='fas fa-minus' /></div>

                {item.qty}

                <div className='plus' onClick={add}><i className='fas fa-plus' /></div>
            </div>
        </div>
    </div>;
}