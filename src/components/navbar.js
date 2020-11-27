import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';

export const MyNavbar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
        <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
        <Nav.Link as={NavLink} to="/skills">Skills</Nav.Link>
        <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
