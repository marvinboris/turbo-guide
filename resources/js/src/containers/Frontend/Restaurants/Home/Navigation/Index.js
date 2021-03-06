import React from 'react';

import './CategoryTitle.css';

const CategoryTitle = ({ children, id }) => <div className="CategoryTitle pr-2 text-truncate d-inline-block nav-item">
    <a href={"#category-" + id} id={"nav-category-" + id} className={`rounded-pill nav-category d-block border border-orange text-decoration-none text-10 text-truncate nav-link`}>{children}</a>
</div>;

export default ({ categories = [] }) => <>
    {categories.map(({ id, name }) => <CategoryTitle key={name + Math.random()} id={id}>{name}</CategoryTitle>)}
</>;

