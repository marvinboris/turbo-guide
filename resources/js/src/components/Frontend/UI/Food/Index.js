import React from 'react';
import { faExclamationCircle, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import './Food.scss';

export default function Food({ photo, name, price, position, symbol, reference, meal, addon, qty, add, sub, id, slug, children }) {
    const content = <div className='wrapper'>
        <div className="img">
            <div className="embed-responsive embed-responsive-4by3" style={{ backgroundImage: `url("${photo}")` }} />

            {meal && reference && <div className='reference'>{reference}</div>}
        </div>

        <div className="name">
            {name}
        </div>

        <div className='details'>
            <div className='price'>
                {position == 0 && <span>{symbol}{' '}</span>}
                <span className="value">{price}</span>
                {position == 1 && <span>{' '}{symbol}</span>}
            </div>

            <div>{children}</div>
        </div>
    </div>;

    return <div className={`UI Food${meal ? " Meal" : ""}${addon ? " Addon" : ""}`}>
        {meal ? <Link to={`/restaurants/${slug}/meals/${id}`}>
            {content}
        </Link> : content}
    </div>;
}