import React from 'react';

import './Layout.scss';

export default function Layout({ children }) {
    return <div className='Layout Order'>
        {children}
    </div>;
}