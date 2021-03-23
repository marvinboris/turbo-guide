import React from 'react';

import Food from '..';

export default props => <Food addon {...props}>
    <div className="d-flex align-items-center">
        <div>
            <span className="text-700">{props.price.toFixed(2)}</span> <span className="text-8">XAF / Portion</span>{' '}

            {props.free && <span className="text-green text-300 text-8">Free portion included</span>}
        </div>
    </div>
</Food>;