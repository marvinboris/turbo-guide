import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, DropdownItem, DropdownMenu, DropdownToggle, Modal, ModalBody, ModalHeader, UncontrolledDropdown } from 'reactstrap';
import { faBox, faCog, faMoneyBillWave, faPowerOff, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ cms, prefix }) => {
    return <>
        <UncontrolledDropdown inNavbar>
            <DropdownToggle nav className="text-24 p-0 m-0">
                <FontAwesomeIcon icon={faCog} className="text-secondary" />
            </DropdownToggle>

            <DropdownMenu right>
                <Link className="dropdown-item text-decoration-none text-reset" to={prefix + "/plans/purchase"}><FontAwesomeIcon fixedWidth icon={faBox} className="mr-2 text-orange" />{cms.menu.plans.purchase}</Link>

                <Link className="dropdown-item text-decoration-none text-reset" to={prefix + "/recharges"}><FontAwesomeIcon fixedWidth icon={faMoneyBillWave} className="mr-2 text-orange" />{cms.menu.recharges.title}</Link>
            </DropdownMenu>
        </UncontrolledDropdown>
    </>;
}