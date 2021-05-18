import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, DropdownItem, DropdownMenu, DropdownToggle, Modal, ModalBody, ModalHeader, UncontrolledDropdown } from 'reactstrap';
import { faBox, faCog, faMoneyBillWave, faPowerOff, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

    return <>
        <UncontrolledDropdown inNavbar>
            <DropdownToggle nav className="text-24 p-0 m-0">
                <FontAwesomeIcon icon={faCog} className="text-secondary" />
            </DropdownToggle>

            <DropdownMenu right>
                <Link className="dropdown-item text-decoration-none text-reset" to="/restaurant/plans/purchase"><FontAwesomeIcon fixedWidth icon={faBox} className="mr-2 text-orange" />{cms.menu.plans.purchase}</Link>

                <Link className="dropdown-item text-decoration-none text-reset" to="/restaurant/recharges"><FontAwesomeIcon fixedWidth icon={faMoneyBillWave} className="mr-2 text-orange" />{cms.menu.recharges.title}</Link>

                <div className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => setModal(true)}><FontAwesomeIcon fixedWidth icon={faPowerOff} className="mr-2 text-orange" />{cms.header.logout}</div>
            </DropdownMenu>
        </UncontrolledDropdown>

        <Modal isOpen={modal} toggle={modalToggle}>
            {logoutContent}
        </Modal>
    </>;
}