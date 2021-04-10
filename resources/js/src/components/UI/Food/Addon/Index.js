import React from 'react';

import Food from '..';

export default props => <Food addon {...props}>
    <div className="d-flex align-items-center">
        <div>
            {props.position == 0 && <span className="text-8 mr-1">{props.symbol}</span>}
            <span className="text-700">{props.formattedPrice}</span>
            {props.position == 1 && <span className="text-8 ml-1">{props.symbol}</span>}
            <span className="text-8 ml-1">/ Portion</span>
        </div>
    </div>
</Food>;