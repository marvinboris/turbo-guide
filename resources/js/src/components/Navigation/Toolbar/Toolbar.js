import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faEnvelope, faGamepad, faHeadset, faLaptop, faMicrophoneAlt, faMobileAlt, faPhone, faSearch, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { Badge, Button, Collapse, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

import NavigationItems from '../NavigationItems/NavigationItems';
import Categories from '../Categories';
import Logo from '../../UI/Logo/Logo';

import './Toolbar.css';

import MenuBar from '../../../assets/images/menu-bar.svg';

const Notification = ({ icon, value }) => <div className="position-relative mx-2">
    <FontAwesomeIcon icon={icon} size="2x" fixedWidth />

    <Badge color="red" className="position-absolute rounded-circle d-flex justify-content-center align-items-center"
        style={{ top: 0, right: 0, transform: 'translate(50%,-50%)' }}>
        {value}
    </Badge>
</div>;

export default ({ }) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    const content = <div className="sticky-top">
        <div className="bg-soft">
            <div className="container d-flex justify-content-end align-items-center">
                <div className="mx-4 d-flex align-items-center">
                    <div className="text-darkgreen mr-3 pr-3 border-right border-border-50">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>

                    <div>contact@shopaly.com</div>
                </div>

                <div className="mx-4 d-flex align-items-center">
                    <div className="text-darkgreen mr-3 pr-3 border-right border-border-50">
                        <FontAwesomeIcon icon={faPhone} />
                    </div>

                    <div>+237 694 42 27 23</div>
                </div>

                <div className="ml-5 py-4 px-4 border-left border-right border-border-50 d-flex align-items-center position-relative">
                    <div>XAF</div>

                    <div className="ml-2">
                        <FontAwesomeIcon icon={faAngleDown} style={{ cursor: 'pointer' }} />
                    </div>
                </div>

                <div className="mx-4 d-flex">
                    <Link className="text-reset">REGISTER</Link>
                    <div className="mx-3 text-700">OR</div>
                    <Link className="text-reset">LOGIN</Link>
                </div>
            </div>
        </div>

        <div className="bg-lightgreen-55 py-3">
            <div className="container d-flex align-items-center">
                <div>
                    <Link to="/" className="text-decoration-none"><Logo /></Link>
                </div>

                <div className="d-flex justify-content-between align-items-center ml-auto">
                    <div className="d-none d-lg-block mr-4">
                        <NavigationItems font="dark" toggleNavbar={toggleNavbar} />
                    </div>

                    <div className="mx-4">
                        <InputGroup className="rounded-pill border-none" size="lg">
                            <InputGroupAddon addonType="prepend" className="rounded-pill rounded-right-0">
                                <InputGroupText className="rounded-pill rounded-right-0 bg-white border-none">
                                    <FontAwesomeIcon icon={faSearch} />
                                </InputGroupText>
                            </InputGroupAddon>

                            <Input type="search" name="search" placeholder="Search products here..." className="rounded-pill rounded-left-0 border-none text-small" />
                        </InputGroup>
                    </div>

                    <div className="d-flex align-items-center mx-4">
                        <Notification icon={faHeart} value={3} />

                        <Notification icon={faShoppingBasket} value={3} />
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-soft">
            <div className="container">
                <Categories items={[
                    { icon: faUser, text: 'Mixte' },
                    { icon: faHeadset, text: 'Headphones' },
                    { icon: faLaptop, text: 'Laptops' },
                    { icon: faMobileAlt, text: 'Smartphones' },
                    { icon: faMicrophoneAlt, text: 'Accessories' },
                    { icon: faGamepad, text: 'Games' },
                ]} />
            </div>
        </div>
    </div>;

    return <div className="Toolbar sticky-top">
        <div className="bg-white shadow-sm">
            {content}
        </div>

        <div className="d-lg-none">
            <Collapse isOpen={!collapsed} navbar className="bg-soft shadow-sm">
                <NavigationItems font="dark" toggleNavbar={toggleNavbar} />
            </Collapse>
        </div>
    </div>;
}