import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navigationItem = ({ icon, children, href, className = '', different, font }) => (
    <NavItem className="px-2">
        <NavLink className={`nav-link text-large ${'text-' + font} ${className}`} to={href} exact activeClassName={!different ? "text-darkgreen active text-500 text-large" : ""}>{icon ? <FontAwesomeIcon icon={icon} className="mr-1" /> : null}{children}</NavLink>
    </NavItem>
);

export default navigationItem;