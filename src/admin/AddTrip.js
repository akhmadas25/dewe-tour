import React from "react";
import { FooterComponent, NavbarComponent } from "../components";
import { Container, Form, Button, InputGroup } from "react-bootstrap";

function AddTrip() {
  return (
    <div>
      <NavbarComponent />
      <div className="header" />
      <Container fluid="true" className="mx-auto pt-5 profile">
        <div className="container">
          <h3>Add Trip</h3>
          <Form>
            <Form.Group className="mb-3" controlId="addTrip">
              <Form.Label>Title Trip</Form.Label>
              <Form.Control type="text" placeholder="" />

              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="" />

              <Form.Label>Acomodation</Form.Label>
              <Form.Control type="text" placeholder="" />

              <Form.Label>Transportation</Form.Label>
              <Form.Control type="text" placeholder="" />

              <Form.Label>Eat</Form.Label>
              <Form.Control type="text" placeholder="" />
              <Form.Group className="mb-3" controlId="duration">
                <Form.Label>Duration</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Form.Group>
            <Button variant="warning">add trip</Button>
          </Form>
        </div>
      </Container>
      <FooterComponent />
    </div>
  );
}

export default AddTrip;
