import { React, useContext, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import palm from "../assets/palm.png";
import hibiscus from "../assets/hibiscus.png";
import { API } from "../config/api";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/userContext";
import swal from "sweetalert";

function ModalLogin() {
  let history = useHistory();
  const [Login, setLogin] = useState(false);
  const handleShowLogin = () => setLogin(true);
  const handleCloseLogin = () => setLogin(false);
  const [state, dispatch] = useContext(UserContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;
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

      // Insert data for login process
      const response = await API.post("/login", body, config);
      console.log(response);
      // Checking process
      if (response?.status === 200) {
        // Send data to useContext

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });
      }

      // Status check
      if (response.data.data.role === "admin") {
        dispatch({
          type: "ADMIN_SUCCESS",
          payload: response.data.data,
        });
        // history.push("/admin/list-transaction");
        window.location = "/admin/list-transaction"
      } else {
        // history.push("/");
        window.location = "/"
      }
    } catch (error) {
      console.log(error);
      swal({
        title: "incorrect",
        text: "email or password doesn't match",
        icon: "warning",
      });
    }
  };

  useEffect(() => {}, [state]);

  return (
    <>
      <div>
        <button
          className="btn btn-outline-light text-light px-3"
          onClick={handleShowLogin}
        >
          login
        </button>

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
            <form onSubmit={handleSubmit}>
              <div className="form-group my-3">
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  placeholder="E-mail"
                  value={email}
                  name="email"
                  onChange={onChange}
                />
              </div>
              <div className="form-group my-3 text-center">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={onChange}
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
    </>
  );
}

export default ModalLogin;
