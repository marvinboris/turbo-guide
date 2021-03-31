import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Collapse, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { faCog, faPlus, faThLarge, faListAlt, faDrumstickBite, faCookie, faWineBottle, faList, faPowerOff, faTimes } from '@fortawesome/free-solid-svg-icons';

import SideDrawerItem from './SideDrawerItem/SideDrawerItem';
import Logo from '../../../../UI/Logo/Logo';

import './SideDrawer.css';

export default ({ data, toggle, logoutHandler, isOpen, selectItem, selectedItem, cms, dark = false }) => {
    const [modal, setModal] = useState(false);

    const modalToggle = () => setModal(!modal);

    let { name, photo, plan } = data;

    if (!photo) photo = "https://placehold.it/100x100";

    let sideDrawerItems = null;
    const {
        pages: {
            backend: {
                header: { logout, close: close_, sure_logout },
                sidebar: {
                    menu: {
                        dashboard, meals, categories, addons, settings, comments, history }
                }
            }
        }
    } = cms;

    const sideDrawerItem = (id = null, dropdown = null, icon, path, custom = false, addon = []) => {
        if (id) return <SideDrawerItem id={id} sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={icon} href={path}>{id}</SideDrawerItem>;

        let items = [];

        if (!custom) {
            items.push({ link: '/add', text: dropdown.add });
            items.push({ link: '/', text: dropdown.index });
            items = items.concat(addon);
        }
        else items = custom;

        return <SideDrawerItem id={dropdown.title} sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={icon} dropdown path={path} items={items}>{dropdown.title}</SideDrawerItem>;
    };

    const logoutContent = <>
        <ModalHeader toggle={modalToggle}>{logout}</ModalHeader>
        <ModalBody className="text-center">
            <p>{sure_logout}?</p>
            <div>
                <Button color="green" onClick={logoutHandler}>{logout} <FontAwesomeIcon icon={faPowerOff} fixedWidth /></Button>{' '}
                <Button color="red" onClick={modalToggle}>{close_} <FontAwesomeIcon icon={faTimes} fixedWidth /></Button>
            </div>
        </ModalBody>
    </>;

    sideDrawerItems = <>
        <div className="text-border text-16 px-3 py-2 mb-1">MENU</div>
        {sideDrawerItem(dashboard, null, faThLarge, "/restaurant/dashboard")}
        {sideDrawerItem(meals.title, null, faDrumstickBite, "/restaurant/meals")}
        {sideDrawerItem(categories.title, null, faListAlt, "/restaurant/categories")}
        {sideDrawerItem(addons.title, null, faCookie, "/restaurant/addons")}

        <div className="text-border text-16 px-3 py-2 mb-1 mt-4">OTHERS</div>
        {sideDrawerItem(comments, null, faThLarge, "/restaurant/comments")}
        {sideDrawerItem(history, null, faList, "/restaurant/history")}
        {sideDrawerItem(settings.title, null, faCog, "/restaurant/settings")}

        <div className="mt-5 pt-5">
            <div className="py-2 px-3 text-16 text-300 rounded-4" onClick={modalToggle} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon fixedWidth icon={faPowerOff} className="text-orange mr-3" />

                <span className="text">{logout}</span>
            </div>
        </div>

        <Modal isOpen={modal} toggle={modalToggle}>
            {logoutContent}
        </Modal>
    </>;



    return (
        <Collapse isOpen={isOpen} className={`SideDrawer nav-left-sidebar bg-${dark ? "grayblue text-white border-right border-darkblue" : "orange-10 text-secondary"} shadow-sm position-fixed d-md-block`}>
            <div className="p-4 border-bottom border-light">
                <div className="my-2 mx-3">
                    <Logo sm />
                </div>
            </div>

            <div className="p-4 mt-5">
                <div className="mt-2 mx-3">
                    <div className="mb-3">
                        <img src={photo} className="rounded-circle" style={{ width: 62, height: 62, objectFit: 'cover', objectPosition: 'center' }} alt="User profile" />
                    </div>

                    <div className="text-truncate text-ellipsis-1 text-montserrat text-18 mb-1">
                        Hello, <span className="text-700">{name}</span>
                    </div>

                    <div className="text-14 text-300 mb-5">
                        {plan ? <>Your Plan : <span className="text-500 text-orange">{plan && plan.name}</span></> : <>No Plan</>}
                    </div>

                    <div className="mb-5">
                        <Link to="/restaurant/meals/add" className="btn btn-orange btn-block pl-4 pr-3 py-3 text-500 text-14 rounded-4 shadow-sm">
                            <div className="pl-3 pr-1 py-1 d-flex justify-content-between align-items-center">
                                <div>{meals.add}</div>

                                <div><FontAwesomeIcon icon={faPlus} /></div>
                            </div>
                        </Link>
                    </div>

                    <div className="px-3">
                        <ul className="navbar-nav w-100 flex-column">
                            {sideDrawerItems}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="backdrop w-100 bg-soft-50 position-fixed d-md-none" onClick={toggle} style={{ top: 70, zIndex: -1 }} />
        </Collapse>
    )
};