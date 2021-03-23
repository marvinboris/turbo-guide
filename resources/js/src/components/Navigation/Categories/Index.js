import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ items = [] }) => <div className="d-flex justify-content-between">
    {items.map(({ to = '/', icon, text }, index) => <>
        <Link to={to} className="d-flex align-items-center mx-4 text-decoration-none text-reset my-3 text-large">
            <FontAwesomeIcon icon={icon} fixedWidth className="mr-3" />

            <div className="text-uppercase">{text}</div>
        </Link>

        {index < items.length - 1 && <div className="border-left border-border-50" style={{ height: '100px !important' }} />}
    </>)}
</div>;