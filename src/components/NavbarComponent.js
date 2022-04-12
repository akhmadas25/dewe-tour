import { React, useState, useContext } from "react";
import { Nav, Navbar, NavDropdown, Dropdown } from "react-bootstrap";
import "../assets/stylesheet/navbar.css";
import ModalLogin from "./ModalLogin";
import logo from "../assets/logo.png";
import ModalSignup from "./ModalSignup";
import { UserContext } from "../context/userContext";
import { Link, useHistory } from "react-router-dom";
import user from "../assets/icons/user2.png";
import journey from "../assets/icons/journey.png";
import logout from "../assets/icons/logout.png";
import profile from "../assets/icons/profile.png";
import chart from "../assets/icons/bill.png";

function NavbarComponent() {
  const [state, dispatch] = useContext(UserContext);
  const [navbar, setnavbar] = useState(false)
  const history = useHistory();
  const Logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
  };

  const SignInButton = () => {
    const status = state.user.role;
    const login = state.isLogin;
    if(state.isLoading){
      return (
        <p>Loading</p>
      )
    }
    if (!login) {
      return (
        <>
          <ModalLogin />
          <ModalSignup />
        </>
      );
    } else if (status == "user") {
      return (
        <>
          <img
            src={"http://localhost:5000/uploads/" + state.user.profile}
            className="rounded-circle"
            alt=""
            style={{ height: "40px", width:"40px" }}
          />
          <NavDropdown title="" id="basic-nav-dropdown" className="me-5">
            <NavDropdown.Item className="me-5">
              <Link
                to="/chart"
                style={{ textDecoration: "none" }}
                className="text-dark"
              >
                <img src={chart} alt="" /> Cart
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                to="/profile"
                style={{ textDecoration: "none" }}
                className="text-dark"
              >
                <img src={user} alt="" />
                Profile
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={Logout}>
              <img src={logout} alt="" />
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </>
      );
    } else if (status == "admin") {
      return (
        <>
          <img src={profile} alt="" style={{ height: "40px" }} className="rounded-circle" />
          <NavDropdown id="basic-nav-dropdown" className="me-5 pe-3">
            <NavDropdown.Item className="me-5">
              <Link
                to="/admin/list-transaction"
                style={{ textDecoration: "none" }}
                className="text-dark"
              >
                <img src={chart} alt="" />
                Transactions
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                to="/admin"
                style={{ textDecoration: "none" }}
                className="text-dark"
              >
                <img src={journey} alt="" />
                Trip
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={Logout}>
              <img src={logout} alt="" /> Logout
            </NavDropdown.Item>
          </NavDropdown>
        </>
      );
    }
  };

  const changeBackground = () =>{
    if(window.scrollY >= 40){
      setnavbar(true)
    } else {
      setnavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <div>
      <div>
        <Navbar scrolling fixed="top" className={navbar ? 'navbar active ps-5' : 'navbar ps-5' }>
          <Navbar.Brand className="text-warning">
            <Link to="/" style={{ textDecoration: "none" }}>
            <img src={logo} className="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-5">
              <SignInButton />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
export default NavbarComponent;
