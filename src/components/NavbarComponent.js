import { React, useState } from "react";
import { Nav, Navbar, Modal } from "react-bootstrap";
import "../assets/stylesheet/navbar.css";

import logo from "../assets/logo.png";
import palm from "../assets/palm.png";
import hibiscus from "../assets/hibiscus.png";
import { useHistory } from "react-router";

function NavbarComponent() {
  const [signup, setSignup] = useState(false);
  const [Login, setLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const handleShowSign = () => setSignup(true);
  const handleShowLogin = () => setLogin(true);
  const handleCloseSign = () => setSignup(false);
  const handleCloseLogin = () => setLogin(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const onChangeName = (e) => {
    const value = e.target.value;
    setData({ ...data, name: value });
  };

  const onChangeEmail = (e) => {
    const value = e.target.value;
    setData({ ...data, email: value });
  };

  const onChangePhone = (e) => {
    const value = e.target.value;
    setData({ ...data, phone: value });
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    setData({ ...data, password: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    let user = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
      isAdmin: data.isAdmin,
    };
    let oldData = localStorage.getItem("formdata");
    if (oldData == null) {
      oldData = [];
      oldData.push(user);
      localStorage.setItem("formdata", JSON.stringify(oldData));
    } else {
      let oldArr = JSON.parse(oldData);
      oldArr.push(user);
      localStorage.setItem("formdata", JSON.stringify(oldArr));
    }
    console.log(isLogin);
    window.location.href="/"
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const data = document.getElementById=("email").value

    let oldData = localStorage.getItem("formdata");
    let oldArr = JSON.parse(oldData);
    oldArr.map((arr) => {
      // if (data.email.length > 0 && data.password.length > 0) {
      //   if (arr.email == data.email && arr.password == data.password) {
      //     console.log(data.email);
      //     setIsLogin(true);
      //   } else {(
      //     alert("wrong email or password")
      //   )}
      // } else {(
      //   alert ("wrong")
      // )}
      console.log(data);
    });
    console.log(isLogin);
    console.log(data);
  };

  return (
    <div>
      <div>
        <Navbar
          scrolling="false"
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
              <Nav.Link
                className="btn btn-outline-light text-light px-3"
                onClick={handleShowLogin}
              >
                Login
              </Nav.Link>
              <Nav.Link
                className="btn btn-warning text-light ms-3 px-3"
                onClick={handleShowSign}
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

        {/* modal signup */}
        <Modal show={signup} onHide={handleCloseSign}>
          <div className="modal-body signup">
            <div className="row">
              <div className="col ms-0 text-start">
                <img src={palm} />
              </div>
              <div className="col">
                <h2 className="text-center">Register</h2>
              </div>
              <div className="col text-end">
                <img src={hibiscus} />
              </div>
            </div>
            <form onSubmit={handleSignup}>
              <div className="form-group my-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Full Name"
                  value={data.name}
                  onChange={onChangeName}
                />
              </div>
              <div className="form-group my-3">
                <input
                  className="form-control"
                  type="email"
                  placeholder="E-mail"
                  value={data.email}
                  onChange={onChangeEmail}
                />
              </div>
              <div className="form-group my-3 text-center">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={data.password}
                  onChange={onChangePassword}
                />
              </div>
              <div className="form-group my-3 text-center">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Telephone"
                  value={data.phone}
                  onChange={onChangePhone}
                />
              </div>
              <div className="row mx-2">
                <button type="submit" className="btn btn-warning text-light">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </Modal>

        {/* modal login */}
        <Modal show={Login} onHide={handleCloseLogin}>
          <div className="modal-body signup">
            <div className="row">
              <div className="col ms-0 text-start">
                <img src={palm} />
              </div>
              <div className="col">
                <h2 className="text-center">Login</h2>
              </div>
              <div className="col text-end">
                <img src={hibiscus} />
              </div>
            </div>
            <form onSubmit={handleLogin}>
              <div className="form-group my-3">
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  placeholder="E-mail"
                  // value={data.email}
                  // onChange={onChangeEmail}
                />
              </div>
              <div className="form-group my-3 text-center">
                <input
                  type="password"
                  name="pass"
                  className="form-control"
                  placeholder="Password"
                  // value={data.password}
                  // onChange={onChangePassword}
                />
              </div>
              <div className="row mx-2">
                <button type="submit" className="btn btn-warning text-light">
                  Login
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
}
export default NavbarComponent;
