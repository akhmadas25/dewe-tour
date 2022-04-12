import { React, useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import palm from "../assets/palm.png";
import hibiscus from "../assets/hibiscus.png";
import { UserContext } from "../context/userContext";
import { API } from "../config/api";
import { useHistory } from "react-router";
import swal from "sweetalert";

function ModalSignup() {
  const [signup, setSignup] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [state, dispatch] = useContext(UserContext);
  const history = useHistory;
  const handleShowSign = () => setSignup(true);
  const handleCloseSign = () => setSignup(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const { email, password, name, phone, address } = form;

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify(form);

      const response = await API.post("/register", body, config);
      console.log(response);
      // Checking process
      if (response?.status === 200) {
        // Send data to useContext

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });
      }

      swal({
        title: "Successfully registered!",
        icon: "success",
        button: "ok",
      });
      // Status check
      if (response.data.data.role === "admin") {
        // history.push("/admin/list-transaction");
        window.location = "/admin/list-transaction"
      } else {
        // history.push("/");
        window.location = "/"
      }
    } catch (error) {
      console.log(error);
    }
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
          <form onSubmit={handleSubmit}>
            <div className="form-group my-3">
              <input
                className="form-control"
                type="text"
                placeholder="Full Name"
                value={name}
                name="name"
                onChange={onChange}
              />
            </div>
            <div className="form-group my-3">
              <input
                className="form-control"
                type="email"
                placeholder="E-mail"
                value={email}
                name="email"
                onChange={onChange}
              />
            </div>
            <div className="form-group my-3 text-center">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChange}
              />
            </div>
            <div className="form-group my-3 text-center">
              <input
                type="number"
                className="form-control"
                placeholder="Telephone"
                value={phone}
                name="phone"
                onChange={onChange}
              />
            </div>
            <div className="form-group my-3 text-center">
              <textarea
                type="text"
                className="form-control"
                placeholder="Adress"
                value={address}
                name="address"
                onChange={onChange}
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
