import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Food from '..';
import Stars from '../../Stars';

export default props => <Food meal {...props}>
    <div className="d-flex align-items-center">
        <div>
            {props.position == 0 && <span className="text-8 mr-1">{props.symbol}</span>}
            <span className="text-700">{props.price}</span>
            {props.position == 1 && <span className="text-8 ml-1">{props.symbol}</span>}
        </div>

        <div className="mx-2">
            <div className="rounded-pill text-10 px-1 bg-orange-30 text-orange d-flex align-items-center" style={{ paddingTop: 1, paddingBottom: 1 }}>
                <FontAwesomeIcon icon={faClock} className="text-6 mr-1" />

                <span className="text-5">{props.time} Min</span>
            </div>
        </div>

        <div className="d-flex align-items-center">
            <div className="text-8">Ratings</div>

            <div className="mx-1">
                <Stars readOnly lg mark={props.mark} />
            </div>

            <div className="text-orange text-6 text-700">
                ({props.mark.toFixed(1)})
            </div>
        </div>
    </div>
</Food>;