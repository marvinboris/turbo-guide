import React from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';

export default ({ languages, language, set }) => {
    const dropdownItems = languages.map(l => <DropdownItem onClick={() => set(l.id)} key={JSON.stringify(l) + Math.random()} className="px-3">
        <span className={`flag-icon flag-icon-${l.flag.toLowerCase()}`} /> {l.abbr.toUpperCase()}
    </DropdownItem>);

    return <UncontrolledDropdown className="Languages">
        <DropdownToggle className="position-relative d-flex justify-content-around align-items-center bg-orange-90 rounded-pill border-0 p-2 m-0" style={{ boxShadow: 'none' }} caret>
            <span className="language-flag shadow-lg mr-2 overflow-hidden d-inline-flex justify-content-center align-items-center position-relative">
                <span className={`flag-icon position-absolute flag-icon-${language && language.flag.toLowerCase()}`} />
            </span>

            <span className="text-700">{language && language.abbr.toUpperCase()}</span>
        </DropdownToggle>

        <DropdownMenu style={{ minWidth: '5rem' }}>
            {dropdownItems}
        </DropdownMenu>
    </UncontrolledDropdown>;
}