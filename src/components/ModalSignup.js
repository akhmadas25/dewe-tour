import { React, useState } from "react";
import { Modal } from "react-bootstrap";
import palm from "../assets/palm.png";
import hibiscus from "../assets/hibiscus.png";

function ModalSignup() {
  const [signup, setSignup] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const handleShowSign = () => setSignup(true);
  const handleCloseSign = () => setSignup(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    phone: "",
    address: "",
    profile: "",
  });
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <button
        className="btn btn-warning text-light ms-3 px-3"
        onClick={handleShowSign}
      >
        signup
      </button>

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
          <form>
            <div className="form-group my-3">
              <input
                className="form-control"
                type="text"
                placeholder="Full Name"
                // value={name}
                // name="name"
              />
            </div>
            <div className="form-group my-3">
              <input
                className="form-control"
                type="email"
                placeholder="E-mail"
                // value={email}
                // name="email"
              />
            </div>
            <div className="form-group my-3 text-center">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                // value={password}
                // name="password"
              />
            </div>
            <div className="form-group my-3 text-center">
              <input
                type="number"
                className="form-control"
                placeholder="Telephone"
                // value={phone}
                // name="phone"
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
    </div>
  );
}

export default ModalSignup;
