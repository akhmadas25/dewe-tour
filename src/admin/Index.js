import React from "react";
import { Container } from "react-bootstrap";
import {TourComponent, FooterComponent,NavbarComponent} from "../components";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div>
      <NavbarComponent />
      <div className="header" />
      <Container fluid="true" className="mx-auto pt-5 profile">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Incoming Trip</h3>
            </div>
            <div className="col text-end">
              <Link to="/admin/add-trip" className="btn btn-warning text-light">
                add trip
              </Link>
            </div>
          </div>
        </div>
        <TourComponent />
      </Container>
      <FooterComponent />
    </div>
  );
}

export default Index;
