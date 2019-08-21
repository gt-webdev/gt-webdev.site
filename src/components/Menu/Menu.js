import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap';
var Navbar = require("react-bootstrap/lib/Navbar");
var Nav = require("react-bootstrap/lib/Nav");
var NavItem = require("react-bootstrap/lib/NavItem");
var MenuItem = require("react-bootstrap/lib/MenuItem");
var NavDropdown = require("react-bootstrap/lib/NavDropdown");

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
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <h1 className="sr-only">GT-WebDev</h1>
                        <Link to="/"><span className="webdev-logo">&lt;<span className="webdev-logo-gt">gt</span><span className="webdev-logo-hyphen">-</span><span className="webdev-logo-webdev">webdev</span>/&gt;</span></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
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
