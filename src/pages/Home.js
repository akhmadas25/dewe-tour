import "../assets/stylesheet/home.css";
import { Form, Container } from "react-bootstrap";
import { NavbarComponent, TourComponent, FooterComponent } from "../components";
import Guarantee from "../assets/icons/guarantee.png";
import Love from "../assets/icons/love.png";
import Travel from "../assets/icons/travel.png";
import Support from "../assets/icons/support.png";

const Card = () => {
  return (
    <Container className="mx-auto">
      <div className="row">
        <div className="col md-2 xs-3">
          <div className="card mx-3">
            <div className="card-body">
              <img className="icons my-3" src={Guarantee} />
              <h5 className="card-title">Best Price Guarantee</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col md-3 xs-6">
          <div className="card mx-3">
            <div className="card-body">
              <img className="icons my-3" src={Love} />
              <h5 className="card-title">Travelers Love Us</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col md-3 xs-6">
          <div className="card mx-3">
            <div className="card-body">
              <img className="icons my-3" src={Travel} />
              <h5 className="card-title">Best Travel Agent</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col md-3 xs-6">
          <div className="card mx-3">
            <div className="card-body">
              <img className="icons my-3" src={Support} />
              <h5 className="card-title">Our Dedicated Support</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

function Home() {
  return (
    <>
      <NavbarComponent />
      <Container fluid="true mx-auto">
        <div className="header" />
        <Container className="display">
          <h1 className="Bold fw-bold text-light">Explore</h1>
          <h1 className="Light text-light fw-light">
            your amazing city together
          </h1>
          <Form>
            <label htmlFor="search" className="mt-5 text-light">
              find great place to holiday
            </label>
            <input type="text" id="search" className="Search" />
            <div className="d-flex flex-row-reverse">
              <button
                type="submit"
                className="searchbutton btn btn-warning text-light"
              >
                search
              </button>
            </div>
          </Form>
          <Card />
        </Container>
        <h1 className="text-center mt-3">Group Tour</h1>
        <div className="container mx-auto">
          <TourComponent />
        </div>
      </Container>
      <FooterComponent />
    </>
  );
}

export default Home;
