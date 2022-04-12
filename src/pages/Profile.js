import {
  NavbarComponent,
  InvoiceComponent,
  FooterComponent,
} from "../components";
import "../assets/stylesheet/profile.css";
import { Container, Card } from "react-bootstrap";
import { API } from "../config/api";
import { React, useEffect, useState, useContext } from "react";
import user from "../assets/icons/user.png";
import mail from "../assets/icons/mail.png";
import phone from "../assets/icons/phone.png";
import location from "../assets/icons/location.png";
import { UserContext } from "../context/userContext";
import swal from "sweetalert";

function Profile() {
  const [trip, setTrip] = useState([]);
  const [preview, setPreview] = useState(null);
  const [state, dispatch] = useContext(UserContext);
  const [form, setForm] = useState({
    profile: "",
  });

  const getTransaction = async () => {
    try {
      const response = await API.get("/transaction");
      setTrip(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      if (form.profile) {
        formData.set("profile", form?.profile[0], form?.profile[0]?.name);
      }

      const response = await API.patch("/user", formData, config);

      console.log(response);
    } catch (error) {
      console.log(error);
      swal({
        title: "error",
        icon: "warning",
      });
    }
  };

  useEffect(() => {
    getTransaction();
  }, []);

  console.log(state);

  return (
    <>
      <NavbarComponent />
      <div className="header" />
      <Container fluid="true" className="text-center profile py-3">
        <Container className="mx-auto">
          <Card className="mx-auto cardProfile">
          <form onChange={handleSubmit}>
            <div className="row">
              <div className="col mt-3 text-start mt-3 ps-5">
                <h2 className="text-start fw-bold text-dark">Profile Info</h2>
                <div className="row mt-5 ">
                  <div className="col ">
                    <p>
                      <img src={user} alt="" />
                    </p>
                    <p>
                      <img src={mail} alt="" />
                    </p>
                    <p>
                      <img src={phone} alt="" />
                    </p>
                    <p>
                      <img src={location} alt="" />
                    </p>
                  </div>
                  <div className="col text-start">
                    <p className="mb-3">
                      <h6 className="text-dark">{state.user.name}</h6>
                    </p>
                    <p className="mb-3 mt-3">
                      <h6 className="text-dark">{state.user.email}</h6>
                    </p>
                    <p className="mb-3 pt-3">
                      <h6 className="text-dark">{state.user.phone}</h6>
                    </p>
                    <p className="mb-3">
                      <h6 className="text-dark">{state.user.address}</h6>
                    </p>
                  </div>
                  <div className="col text-start" />
                  <div className="col text-start" />
                </div>
              </div>
              <div className="col mt-3">
                {preview ? (
                  <>
                    <div>
                      <img
                        src={preview}
                        style={{
                          maxWidth: "150px",
                          maxHeight: "150px",
                          objectFit: "cover",
                        }}
                        alt="preview"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary px-5 mt-2 text-light"
                    >
                      save
                    </button>
                  </>
                ) : (
                  <>
                    <img
                      src={
                        "http://localhost:5000/uploads/" + state.user.profile
                      }
                      className="imageprofile"
                    />
                    
                      <input
                        type="file"
                        id="profile"
                        name="profile"
                        hidden
                        onChange={handleChange}
                      />
                      <label
                        for="profile"
                        className="btn btn-warning px-5 mt-2 text-light"
                      >
                        change profile
                      </label>
                    
                  </>
                )}
              </div>
            </div>
            </form>
          </Card>
          <h3 className="mt-5 text-start">History Trip</h3>
          {trip?.map((item, index) => {
            if (item.status === "aproved") {
              return (
                <>
                  <InvoiceComponent item={item} key={index} />
                </>
              );
            }
          })}
        </Container>
      </Container>
      <auth />
      <FooterComponent />
    </>
  );
}

export default Profile;
