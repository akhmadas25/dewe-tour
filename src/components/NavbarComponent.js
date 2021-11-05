import { React, useState, useContext } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../assets/stylesheet/navbar.css";
import ModalLogin from "./ModalLogin";
import logo from "../assets/logo.png";
import ModalSignup from "./ModalSignup";
import { UserContext } from "../context/userContext";

function NavbarComponent() {
  const [state, dispatch] = useContext(UserContext);
  console.log(state.isLogin);
  // var isLogin = state.isLogin;
  // let element = "";
  // if ((isLogin = false)) {
  //   element = (
  //     <NavDropdown title="Dropdown" id="basic-nav-dropdown">
  //       <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
  //       <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
  //       <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
  //       <NavDropdown.Divider />
  //       <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  //     </NavDropdown>
  //   );
  // } else {
  //   element = (
  //     <>
  //       <ModalLogin />
  //       <ModalSignup />
  //     </>
  //   );
  // }

  return (
    <div>
      <div>
        <Navbar
          scrolling="true"
          expand="md"
          fixed="top"
          className="navbar ps-5"
        >
          <Navbar.Brand className="text-warning">
            <img src={logo} className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-5">
              <ModalLogin />
              <ModalSignup />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
export default NavbarComponent;
