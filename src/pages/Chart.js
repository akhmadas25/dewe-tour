import {
  NavbarComponent,
  InvoiceComponent,
  FooterComponent,
} from "../components";
import "../assets/stylesheet/profile.css";

import {React} from "react";
import { Container } from "react-bootstrap";

function Chart() {


  return (
    <div>
      <NavbarComponent />
      <div className="header" />
      <Container fluid="true" className="text-center profile py-3">
        <Container className="mx-auto">
          <InvoiceComponent />
          <div className="text-end mt-3">
              <button className="btn btn-warning px-5">pay</button>
          </div>
        </Container>
      </Container>
      <FooterComponent />
    </div>
  );
}

export default Chart;
