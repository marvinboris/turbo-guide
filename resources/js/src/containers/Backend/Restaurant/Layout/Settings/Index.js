import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, DropdownItem, DropdownMenu, DropdownToggle, Modal, ModalBody, ModalHeader, UncontrolledDropdown } from 'reactstrap';
import { faBox, faCog, faMoneyBillWave, faPowerOff, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Settings.css';

export default ({ cms, logoutHandler }) => {
    const [modal, setModal] = useState(false);

    const modalToggle = () => setModal(!modal);

    const logoutContent = <>
        <ModalHeader toggle={modalToggle}>{cms.header.logout}</ModalHeader>

        <ModalBody className="text-center">
            <p>{cms.header.sure_logout}?</p>

            <div>
                <Button color="green" onClick={logoutHandler}>{cms.header.logout} <FontAwesomeIcon icon={faPowerOff} fixedWidth /></Button>{' '}
                <Button color="red" onClick={modalToggle}>{cms.header.close} <FontAwesomeIcon icon={faTimes} fixedWidth /></Button>
            </div>
        </ModalBody>
    </>;

    return <UncontrolledDropdown className="Settings">
        <DropdownToggle className="text-24 text-secondary bg-transparent border-0 p-0 m-0">
            <FontAwesomeIcon icon={faCog} />
        </DropdownToggle>

        <DropdownMenu>
            <DropdownItem className="text-secondary"><Link className="text-decoration-none text-reset" to="/restaurant/plans/purchase"><FontAwesomeIcon fixedWidth icon={faBox} className="mr-2 text-orange" />{cms.menu.plans.purchase}</Link></DropdownItem>

            <DropdownItem className="text-secondary"><Link className="text-decoration-none text-reset" to="/restaurant/recharges"><FontAwesomeIcon fixedWidth icon={faMoneyBillWave} className="mr-2 text-orange" />{cms.menu.recharges.title}</Link></DropdownItem>

            <DropdownItem className="text-secondary" onClick={modalToggle}><FontAwesomeIcon fixedWidth icon={faPowerOff} className="mr-2 text-orange" />{cms.header.logout}</DropdownItem>

            <Modal isOpen={modal} toggle={modalToggle}>
                {logoutContent}
            </Modal>
        </DropdownMenu>
    </UncontrolledDropdown>;
}