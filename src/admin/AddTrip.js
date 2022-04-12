import React, { useState, useEffect } from "react";
import { FooterComponent, NavbarComponent } from "../components";
import { Container, Form, Button, InputGroup } from "react-bootstrap";
import attach from "../assets/icons/attach.png";
import { API } from "../config/api";
import swal from "sweetalert";
import { useHistory } from "react-router";

function AddTrip() {
  const history = useHistory()
  const [countries, setCountries] = useState([]);
  const [form, setForm] = useState({
    title: "",
    idCountry: "",
    accomodation: "",
    transportation: "",
    eat: "",
    day: "",
    night: "",
    date: "",
    price: "",
    quota: "",
    desc: "",
    image: "",
    available: 0
  });

  const getCountry = async () => {
    try {
      const response = await API.get("/countries");
      setCountries(response.data.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountry();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const images = [];
      for (let i = 0; i < form.image.length; i++) {
        console.log(form.image[i].name);
        images.push(form.image[i].name);
      }
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
      console.log(form);
      
      const formData = new FormData();
      if (form.image) {
        for (let i = 0; i < form.image.length; i++) {
          console.log(form.image[i].name);
          formData.append("image", form.image[i], form.image[i].name);
        }
      }
      formData.set("title", form.title);
      formData.set("accomodation", form.accomodation);
      formData.set("transportation", form.transportation);
      formData.set("eat", form.eat);
      formData.set("day", form.day);
      formData.set("night", form.night);
      formData.set("date", form.date);
      formData.set("price", form.price);
      formData.set("idCountry", form.idCountry);
      formData.set("desc", form.desc);
      formData.set("quota", form.quota);
      formData.set("available", form.available);

      const response = await API.post("/trip", formData, config);
      console.log(response);
      swal({
        title: "succesfully added new trip",
        icon: "success",
      });
      history.push("/")
    } catch (error) {
      console.log(error.message);
      swal({
        title: "505",
        text: "server error",
        icon: "warning",
      });
    }
  };

  return (
    <div>
      <NavbarComponent />
      <div className="header" />
      <Container fluid="true" className="mx-auto pt-5 profile">
        <div className="container">
          <h3>Add Trip</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mt-3 mb-3 ms-5" controlId="addTrip">
              <Form.Label>Title Trip</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="mb-3 "
                name="title"
                onChange={handleChange}
              />

              <Form.Label>Country</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="mb-3"
                name="idCountry"
                onChange={handleChange}
              >
                {countries &&
                  countries.map((country) => (
                    <>
                      <option value={country.id}>{country.name}</option>
                    </>
                  ))}
              </Form.Select>

              <Form.Label>Accomodation</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="mb-3"
                name="accomodation"
                onChange={handleChange}
              />

              <Form.Label>Transportation</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="mb-3"
                name="transportation"
                onChange={handleChange}
              />

              <Form.Label>Eat</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="mb-3"
                name="eat"
                onChange={handleChange}
              />
              <Form.Group className="mb-3" controlId="duration">
                <Form.Label>Duration</Form.Label>
                <div className="row">
                  <div className="col-lg-2">
                    <Form.Control
                      type="text"
                      placeholder=""
                      style={{ width: "150px" }}
                      name="day"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-1">Day</div>
                  <div className="col-lg-2">
                    <Form.Control
                      type="text"
                      placeholder=""
                      style={{ width: "150px" }}
                      name="night"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-1">Night</div>
                </div>
              </Form.Group>
              <Form.Label>Date Trip</Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                className="mb-3"
                name="date"
                onChange={handleChange}
              />

              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="mb-3"
                name="price"
                onChange={handleChange}
              />

              <Form.Label>Quota</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="mb-3"
                name="quota"
                onChange={handleChange}
              />

              <Form.Label>Desc</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="mb-3"
                name="desc"
                onChange={handleChange}
              />

              <Form.Label>Image</Form.Label>
              <p>
                <label className="btn btn-light text-warning pe-2">
                  attach here <img src={attach} className="ms-5" />
                  <input
                    type="file"
                    multiple
                    name="image"
                    onChange={handleChange}
                  />
                </label>
              </p>
            </Form.Group>
            <div className="text-center">
              <Button
                variant="warning"
                type="submit"
                className="mt-5 px-5 text-light"
              >
                add trip
              </Button>
            </div>
          </Form>
        </div>
      </Container>
      <FooterComponent />
    </div>
  );
}

export default AddTrip;
