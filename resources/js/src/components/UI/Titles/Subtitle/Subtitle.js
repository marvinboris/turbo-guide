import React from 'react';

export default ({ children, className, dark = false }) =>
    <div className={`text-${dark ? "light" : "secondary"} text-18 text-300 ${className}`}>
        {children}
    </div>;