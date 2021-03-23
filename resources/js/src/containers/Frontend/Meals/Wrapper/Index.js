import React from 'react';

export default ({ children, className }) => <div className={className} style={{ paddingLeft: 11, paddingRight: 11 }}>
    {children}
</div>;