import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

class Menu extends Component {
    componentDidMount() {
        // Collapse the mobile navbar on click
        const navBar = ReactDOM.findDOMNode(this);
        const collapsibleNav = navBar.querySelector('div.navbar-collapse');
        const btnToggle = navBar.querySelector('button.navbar-toggle');

        navBar.addEventListener('click', (evt) => {
            if (evt.target.tagName !== 'A' || evt.target.classList.contains('dropdown-toggle') || ! collapsibleNav.classList.contains('in')) {
                return;
            }

            btnToggle.click();
        }, false);
    }
    render() {
        return (
            <Navbar inverse="true">
                <Navbar.Brand>
                    <h1 className="sr-only">GT-WebDev</h1>
                    <Link to="/"><span className="webdev-logo">&lt;<span className="webdev-logo-gt">gt</span><span className="webdev-logo-hyphen">-</span><span className="webdev-logo-webdev">webdev</span>/&gt;</span></Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav pullright="true">
                        <IndexLinkContainer to="/"><NavItem>Home</NavItem></IndexLinkContainer>
                        <LinkContainer to="/events"><NavItem>Events</NavItem></LinkContainer>
                        <LinkContainer to="/about"><NavItem>About</NavItem></LinkContainer>
                        <LinkContainer to="/connect"><NavItem>Connect</NavItem></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;
