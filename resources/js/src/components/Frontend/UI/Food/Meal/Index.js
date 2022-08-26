import React from 'react';

import Food from '..';

import './Meal.scss';

export default function Meal(props) {
    return <Food meal {...props}>
        <div className='time'>
            <div className='icon'>
                <i className="fas fa-clock" />
            </div>

            <div className='value'><span>{props.time}</span> min</div>
        </div>
    </Food>;
}