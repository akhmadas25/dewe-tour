import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar scrolling expand="md" fixed="top" className="ms-5">
      <Navbar.Brand className="text-warning" href="#home">
        Dewe Tour
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto me-5">
          <Nav.Link
            className="btn btn-outline-light text-light px-3"
            href="#home"
          >
            Login
          </Nav.Link>
          <Nav.Link
            className="btn btn-warning text-light ms-3 px-3"
            href="#link"
          >
            Sign up
          </Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavbarComponent;
