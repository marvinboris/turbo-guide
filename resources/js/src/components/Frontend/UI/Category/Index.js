import React from 'react';

import './Category.scss';

export default function Category({ children, name, id }) {
    return <div id={`category-${id}`} className="UI Category">
        <div className="name">{name}</div>

        <div>
            {children}
        </div>
    </div>;
}