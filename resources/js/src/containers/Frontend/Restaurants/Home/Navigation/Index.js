import React from 'react';

import './CategoryTitle.css';

const CategoryTitle = ({ children, onClick, active }) => <div className="CategoryTitle pr-2 text-truncate d-inline-block">
    <div style={{ cursor: 'pointer' }} onClick={onClick} className={`rounded-pill d-block border border-orange text-decoration-none text-10 text-truncate ${active ? "active" : ""}`}>{children}</div>
</div>;

export default ({ categories = [], onClick }) => <>
    {categories.map(({ name, id, active }) => <CategoryTitle key={name + Math.random()} onClick={() => onClick(id)} active={active}>{name}</CategoryTitle>)}
</>;

