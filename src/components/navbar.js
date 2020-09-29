import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavItem from "react-bootstrap/NavItem"

import logo from "./../images/logo.png"

const NaviagtionMenu = () => {
  return (
    <Navbar collapseOnSelect expand="md" fixed="top" className="mlNavBg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt="Logo"
            src={logo}
            height="50"
            className="d-inline-block align-top mr-3"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavItem>
              <Nav.Link as={Link} to="/über-mich">
                <span className="mlNavbar">Über Mich</span>
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} to="/kontakt">
                <span className="mlNavbar">Kontakt</span>
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} to="/leistung-preise">
                <span className="mlNavbar">Leistung/Preise</span>
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} to="/patienteninfo">
                <span className="mlNavbar">Patienteninfo</span>
              </Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NaviagtionMenu
