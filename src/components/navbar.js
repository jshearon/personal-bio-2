import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar expand="lg" expanded={expanded}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}>
        <FontAwesomeIcon icon={faBars} />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" dimension="width">
        <Nav>
          <Nav.Link onClick={() => setTimeout(() => {setExpanded(false)}, 150)} as={NavLink} to="/home" className="text-left">HOME</Nav.Link>
          <Nav.Link onClick={() => setTimeout(() => {setExpanded(false)}, 150)} as={NavLink} to="/about" className="text-left">ABOUT</Nav.Link>
          <Nav.Link onClick={() => setTimeout(() => {setExpanded(false)}, 150)} as={NavLink} to="/projects" className="text-left">PROJECTS</Nav.Link>
          <Nav.Link onClick={() => setTimeout(() => {setExpanded(false)}, 150)} as={NavLink} to="/skills" className="text-left">SKILLS</Nav.Link>
          <Nav.Link onClick={() => setTimeout(() => {setExpanded(false)}, 150)} as={NavLink} to="/contact" className="text-left">CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
