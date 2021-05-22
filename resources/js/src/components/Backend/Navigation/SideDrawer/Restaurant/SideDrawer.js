import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { faCog, faPlus, faThLarge, faListAlt, faDrumstickBite, faCookie, faList, faPowerOff, faTimes, faComment, faEdit, faArrowLeft, faBell } from '@fortawesome/free-solid-svg-icons';

import SideDrawerItem from './SideDrawerItem/SideDrawerItem';
import Logo from '../../../../UI/Logo/Logo';

import './SideDrawer.css';

export default ({ data, toggle, logoutHandler, selectItem, selectedItem, cms, dark = false }) => {
    const [modal, setModal] = useState(false);

    const modalToggle = () => setModal(!modal);

    let { name, photo, plan } = data;

    if (!photo) photo = "//placehold.it/100x100";

    let sideDrawerItems = null;
    const {
        pages: {
            backend: {
                header: { logout, close: close_, sure_logout },
                sidebar: {
                    menu: {
                        dashboard, meals, categories, addons, settings, comments, history, notifications }
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
        {plan && !!plan.reviews && sideDrawerItem(comments, null, faComment, "/restaurant/comments")}
        {sideDrawerItem(history, null, faList, "/restaurant/history")}
        <SideDrawerItem id={notifications} sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faBell} href="/restaurant/notifications">
            {notifications}{' '}
            {data.notifications.filter(notification => !notification.read_at).length > 0 && <Badge color="green" className="position-relative rounded-circle text-x-small text-700 d-inline-flex justify-content-center align-items-center" style={{ width: 18, height: 18, top: -2, left: 2 }}><b className="text-white">{data.notifications.filter(notification => !notification.read_at).length}</b></Badge>}
        </SideDrawerItem>
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
        <div className={`Restaurant SideDrawer nav-left-sidebar bg-soft shadow-sm position-fixed`}>
            <div className={`vh-100 d-flex flex-column bg-${dark ? "grayblue text-white border-right border-darkblue" : "orange-10 text-secondary"}`}>
                <div className="p-4 border-bottom border-light">
                    <div className="my-2 mx-3 d-flex justify-content-between align-items-center">
                        <Logo sm />

                        <div className="d-md-none">
                            <FontAwesomeIcon icon={faArrowLeft} cursor="pointer" className="text-21" onClick={toggle} />
                        </div>
                    </div>
                </div>

                <div className="p-4 mt-3 mt-md-5 flex-fill">
                    <div className="mt-2 mx-3">
                        <div className="mb-3 d-flex align-items-center">
                            <div className="pr-3 pr-md-0">
                                <img src={photo} className="rounded-circle" style={{ width: 62, height: 62, objectFit: 'cover', objectPosition: 'center' }} alt="User profile" />
                            </div>

                            <div className="text-montserrat text-18 d-md-none">
                                Hello, <span className="text-700">{name}</span>
                            </div>
                        </div>

                        <div className="text-montserrat text-18 mb-1 d-none d-md-block">
                            Hello, <span className="text-700">{name}</span>
                        </div>

                        <div className="text-14 text-300 mb-3 mb-md-5">
                            {plan ? <>Your Plan : <span className="text-500 text-orange">{plan.name}</span></> : <>No Plan</>}

                            <Link to="/restaurant/plans/purchase" onClick={toggle} className="text-decoration-none text-reset text-16 ml-3">
                                <FontAwesomeIcon icon={faEdit} />
                            </Link>
                        </div>

                        <div className="mb-4 mb-md-5">
                            <Link to="/restaurant/meals/add" className="btn btn-orange btn-block pl-4 pr-3 py-3 text-500 text-14 rounded-4 shadow-sm">
                                <div className="pl-3 pr-1 py-1 d-flex justify-content-between align-items-center">
                                    <div>{meals.add}</div>

                                    <div><FontAwesomeIcon icon={faPlus} /></div>
                                </div>
                            </Link>
                        </div>

                        <div className="px-3">
                            <ul className="navbar-nav flex-column pr-3 scrollbar-orange">
                                {sideDrawerItems}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="backdrop bg-soft-50 position-fixed d-md-none" onClick={toggle} style={{ top: 0, zIndex: -1 }} />
        </div>
    )
};