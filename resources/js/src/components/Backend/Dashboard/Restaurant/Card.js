import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default ({ children, icon, link, color, details }) => <div className="col-xxl-2 col-xl-4 col-lg-6 col-sm-6 col-md-12 pb-3 pb-xxl-0">
    <Link to={link} className={`bg-${color}-10 rounded-8 text-decoration-none text-${color} px-4 py-4 d-flex align-items-center`}>
        <div className="mr-4">
            <FontAwesomeIcon icon={icon} className={`text-33 text-${color}-50`} />
        </div>

        <div>
            <div className="text-montserrat text-700 text-35">{children}</div>

            <div className="text-12 text-300">{details}</div>
        </div>
    </Link>
</div>;