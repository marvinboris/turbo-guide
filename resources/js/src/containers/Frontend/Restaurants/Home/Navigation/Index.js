import React from 'react';

import './CategoryTitle.css';

const CategoryTitle = ({ children, active }) => <div className="CategoryTitle pr-2 text-truncate d-inline-block">
    <a href="#" className={`rounded-pill d-block border border-orange text-decoration-none text-10 text-truncate ${active ? "active" : ""}`}>{children}</a>
</div>;

export default ({ categories = [] }) => <>
    {categories.map(({ name, active }) => <CategoryTitle key={name + Math.random()} active={active}>{name}</CategoryTitle>)}
</>;

