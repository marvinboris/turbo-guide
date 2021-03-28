import React from 'react';

export default ({ children, className, dark = false }) =>
    <div className={`text-30 mb-1 text-${dark ? "light" : "secondary"} ${className}`}>
        {children}
    </div>;