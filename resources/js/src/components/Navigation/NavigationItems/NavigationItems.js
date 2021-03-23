import React from 'react';
import { Container, Navbar, Collapse, Nav } from 'reactstrap';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBook, faGraduationCap, faHome } from '@fortawesome/free-solid-svg-icons';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ({ isAuth, name, logoutHandler, role, cartItemsNumber, notifications, light = false, font }) => {
    return (
        <Navbar className="pb-0" dark={!light} light={light} expand>
            <Container>
                <Collapse navbar>
                    <Nav className="d-block d-lg-flex align-items-center text-uppercase" navbar>
                        <NavigationItem font={font} href="/">Home</NavigationItem>
                        <NavigationItem font={font} href="/about-us">About Us</NavigationItem>
                        <NavigationItem font={font} href="/store">Store</NavigationItem>
                        <NavigationItem font={font} href="/blog">Blog</NavigationItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default navigationItems;