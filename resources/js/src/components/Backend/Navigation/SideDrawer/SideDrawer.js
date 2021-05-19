import React, { useState } from 'react';
import { Col, Badge, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faCog, faUserTag, faTools, faUser, faUserCog, faLanguage, faBell, faWrench, faArrowLeft, faPowerOff, faTimes, faHome, faBox, faMoneyBillWaveAlt, faThList } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

import SideDrawerItem from './SideDrawerItem/SideDrawerItem';
import Logo from '../../../UI/Logo/Logo';

import './SideDrawer.css';

export default ({ data, role = 'user', logoutHandler, toggle, selectItem, selectedItem, cms, dark = false }) => {
    const [modal, setModal] = useState(false);

    const modalToggle = () => setModal(!modal);

    let { name, photo, role: role_ } = data;

    if (!photo) photo = "//placehold.it/100x100";

    let addOns = null;
    let sideDrawerItems = null;
    const {
        pages: {
            backend: {
                header: { logout, close: close_, sure_logout },
                sidebar: {
                    user, admin,
                    menu: {
                        dashboard, admins, users, roles, features, languages, cms: cms_, notifications, settings,
                        restaurants, plans, recharges, methods
                    }
                }
            }
        }
    } = cms;

    const roles_ = {
        user,
        admin,
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

    const sideDrawerItem = (fixed = false, id = null, dropdown = null, icon, path, custom = false, addon = []) => {
        if (id) return <SideDrawerItem id={id} sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={icon} href={path}>{id}</SideDrawerItem>;

        if (fixed) {
            let items = [];

            if (!custom) {
                items.push({ link: '/add', text: dropdown.add });
                items.push({ link: '/', text: dropdown.index });
                items = items.concat(addon);
            }
            else items = custom;

            return <SideDrawerItem id={dropdown.title} sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={icon} dropdown path={path} items={items}>{dropdown.title}</SideDrawerItem>;
        }

        const feature = role_.features.find(f => '/user/' + f.prefix === path);

        if (!feature) return null;
        let { permissions } = feature;
        let items = [];

        if (!custom) {
            if (permissions && permissions.includes('c')) items.push({ link: '/add', text: dropdown.add });
            items.push({ link: '/', text: dropdown.index });
            items = items.concat(addon);
        }
        else items = custom;

        return <SideDrawerItem id={dropdown.title} sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={icon} dropdown path={path} items={items}>{dropdown.title}</SideDrawerItem>;
    };

    switch (role) {
        case 'user':
            addOns = <div className="text-left">
                <div className="text-orange small"><FontAwesomeIcon icon={faCircle} size="sm" fixedWidth className="mr-1" />{role_.name}</div>
            </div>;
            sideDrawerItems = <>
                <div className="text-border text-16 px-3 py-2 mb-1">MENU</div>
                {sideDrawerItem(true, dashboard, null, faTachometerAlt, "/user/dashboard")}
                {sideDrawerItem(false, null, users, faUser, "/user/users")}
                {sideDrawerItem(false, null, roles, faUserTag, "/user/roles")}
                {sideDrawerItem(false, null, features, faTools, "/user/features")}
                {sideDrawerItem(false, null, languages, faLanguage, "/user/languages")}

                <div className="text-border text-16 px-3 py-2 mb-1 mt-4">RESOURCES</div>
                {sideDrawerItem(false, null, restaurants, faHome, "/user/restaurants")}
                {sideDrawerItem(false, null, plans, faBox, "/user/plans", [
                    { link: '/add', text: plans.add },
                    { link: '/bought', text: plans.bought },
                    { link: '/', text: plans.index },
                ])}
                {sideDrawerItem(false, null, recharges, faMoneyBillWaveAlt, "/user/recharges")}
                {sideDrawerItem(false, null, methods, faThList, "/user/methods")}

                <div className="text-border text-16 px-3 py-2 mb-1 mt-4">OTHERS</div>
                {sideDrawerItem(false, null, cms_, faWrench, "/user/cms", [
                    { link: '/global', text: cms_.global },
                    { link: '/general', text: cms_.general },
                    { link: '/messages', text: cms_.messages },
                    { link: '/components', text: cms_.components },
                    { link: '/auth', text: cms_.auth },
                    { link: '/backend', text: cms_.backend },
                    { link: '/frontend', text: cms_.frontend },
                ])}
                <SideDrawerItem id={notifications} sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faBell} href="/user/notifications">
                    {notifications}{' '}
                    {data.notifications.filter(notification => !notification.read_at).length > 0 && <Badge color="green" className="position-relative rounded-circle text-x-small text-700 d-inline-flex justify-content-center align-items-center" style={{ width: 18, height: 18, top: -2, left: 2 }}><b className="text-white">{data.notifications.filter(notification => !notification.read_at).length}</b></Badge>}
                </SideDrawerItem>
                {sideDrawerItem(true, null, settings, faCog, "/user/settings", [
                    { link: '/language', text: settings.language },
                ])}

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
            break;

        case 'admin':
            sideDrawerItems = <>
                <div className="text-border text-16 px-3 py-2 mb-1">MENU</div>
                {sideDrawerItem(true, dashboard, null, faTachometerAlt, "/admin/dashboard")}
                {sideDrawerItem(true, null, admins, faUserCog, "/admin/admins")}
                {sideDrawerItem(true, null, users, faUser, "/admin/users")}
                {sideDrawerItem(true, null, roles, faUserTag, "/admin/roles")}
                {sideDrawerItem(true, null, features, faTools, "/admin/features")}
                {sideDrawerItem(true, null, languages, faLanguage, "/admin/languages")}

                <div className="text-border text-16 px-3 py-2 mb-1 mt-4">RESOURCES</div>
                {sideDrawerItem(true, null, restaurants, faHome, "/admin/restaurants")}
                {sideDrawerItem(true, null, plans, faBox, "/admin/plans", [
                    { link: '/add', text: plans.add },
                    { link: '/bought', text: plans.bought },
                    { link: '/', text: plans.index },
                ])}
                {sideDrawerItem(true, null, recharges, faMoneyBillWaveAlt, "/admin/recharges")}
                {sideDrawerItem(false, null, methods, faThList, "/admin/methods")}

                <div className="text-border text-16 px-3 py-2 mb-1 mt-4">OTHERS</div>
                {sideDrawerItem(true, null, cms_, faWrench, "/admin/cms", [
                    { link: '/global', text: cms_.global },
                    { link: '/general', text: cms_.general },
                    { link: '/messages', text: cms_.messages },
                    { link: '/components', text: cms_.components },
                    { link: '/auth', text: cms_.auth },
                    { link: '/backend', text: cms_.backend },
                    { link: '/frontend', text: cms_.frontend },
                ])}
                <SideDrawerItem id={notifications} sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faBell} href="/admin/notifications">
                    {notifications}{' '}
                    {data.notifications.filter(notification => !notification.read_at).length > 0 && <Badge color="green" className="position-relative rounded-circle text-x-small text-700 d-inline-flex justify-content-center align-items-center" style={{ width: 18, height: 18, top: -2, left: 2 }}><b className="text-white">{data.notifications.filter(notification => !notification.read_at).length}</b></Badge>}
                </SideDrawerItem>
                {sideDrawerItem(true, null, settings, faCog, "/admin/settings", [
                    { link: '/language', text: settings.language },
                ])}

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
            break;
    }



    return (
        <div className={`App SideDrawer nav-left-sidebar bg-soft shadow-sm position-fixed`}>
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
                        <div className="mb-4 mb-md-5 d-flex align-items-center">
                            <div className="pr-3 pr-md-0">
                                <img src={photo} className="rounded-circle" style={{ width: 62, height: 62, objectFit: 'cover', objectPosition: 'center' }} alt="User profile" />
                            </div>

                            <div className="text-montserrat text-18 d-md-none">
                                Hello, <span className="text-700">{name}</span>
                                <Col xs={12} className="p-0 text-300">{roles_[role]}</Col>
                                {addOns}
                            </div>
                        </div>

                        <div className="text-montserrat text-18 mb-4 mb-md-5 d-none d-md-block">
                            Hello, <span className="text-700">{name}</span>
                            <Col xs={12} className="p-0 text-300">{roles_[role]}</Col>
                            {addOns}
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