import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MyNavbar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <FontAwesomeIcon icon={faBars} />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link as={NavLink} to="/home">HOME</Nav.Link>
        <Nav.Link as={NavLink} to="/about">ABOUT</Nav.Link>
        <Nav.Link as={NavLink} to="/projects">PROJECTS</Nav.Link>
        <Nav.Link as={NavLink} to="/skills">SKILLS</Nav.Link>
        <Nav.Link as={NavLink} to="/contact">CONTACT</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
