import {
  NavbarComponent,
  InvoiceComponent,
  FooterComponent,
} from "../components";
import "../assets/stylesheet/profile.css";
import { Form, Container, Card } from "react-bootstrap";

function Profile() {
  return (
    <>
      <NavbarComponent />
      <div className="header" />
      <Container fluid="true" className="text-center profile py-3">
        <Container className="mx-auto">
          <Card className="mx-auto cardProfile">
            <div className="row">
              <div className="col ">
                <h2>Profile Info</h2>
                <div className="row text-start mx-2">
                  <p>
                    <i class="fas fa-user-circle"></i>
                    <span className="mx-2">User name</span>
                  </p>
                  <p>
                    <i class="fas fa-envelope"></i>
                    <span className="mx-2">user@mail.com</span>
                  </p>
                  <p>
                    <i class="fas fa-phone-alt"></i>
                    <span className="mx-2">08958736493</span>
                  </p>
                  <p>
                    <i class="fas fa-map-marker-alt"></i>
                    <span className="mx-2">jalanin aja dulu</span>
                  </p>
                </div>
              </div>
              <div className="col">
                <img
                  src="https://static.onecms.io/wp-content/uploads/sites/14/2015/11/12/111215-ryan-reynolds-2-2000.jpg"
                  className="imageprofile mt-3"
                />
                <a className="btn btn-warning px-5 mt-2 text-light">
                  change profile
                </a>
              </div>
            </div>
          </Card>
          <h3 className="mt-5 text-start">History Trip</h3>
          <InvoiceComponent />
        </Container>
      </Container>
      <auth />
      <FooterComponent />
    </>
  );
}

export default Profile;
