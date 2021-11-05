import {NavbarComponent, FooterComponent, CountComponent} from "../components";
import numberWithCommas from "../utils/utils";
import React from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";
import "../assets/stylesheet/detail.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class DetailTrip extends React.Component {
  state = {
    count: 1,
    trip: {
      name: "",
      country: "",
      acomodation: "",
      eat: "",
      transportation: "",
      duration: "",
      date: "",
      price: "",
    },
    picture: {},
    duration: {},
  };

  componentDidMount() {
    const tripID = this.props.match.params.id;

    axios
      .get(API_URL + "trip/" + tripID)
      .then((res) => {
        const trip = res.data;
        const picture = res.data.picture;
        const duration = res.data.duration;
        this.setState({
          trip: {
            name: trip.name,
            country: trip.country,
            acomodation: trip.acomodation,
            eat: trip.eat,
            transportation: trip.transportation,
            duration: trip.duration,
            date: trip.date,
            price: trip.price,
          },
          picture,
          duration,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { trip } = this.state;
    const { picture } = this.state;
    const { duration } = this.state;
    const total = this.state.count * trip.price;
    return (
      <>
        <NavbarComponent />
        <div className="header" />
        <Container fluid="true" className="detail">
          <Container>
            <h3 className="pt-3">{trip.name}</h3>
            <p className="text-secondary">{trip.country}</p>
            <img
              src={"/images/" + picture.picture1}
              className="picture container"
            />
            <div className="row mt-2">
              <div className="col mb-2 md-3 text-center">
                <img
                  src={"/images/" + picture.picture2}
                  className="smallPicture"
                />
              </div>
              <div className="col mb-2 md-3 text-center">
                <img
                  src={"/images/" + picture.picture3}
                  className="smallPicture"
                />
              </div>
              <div className="col mb-2 md-3 text-center">
                <img
                  src={"/images/" + picture.picture4}
                  className="smallPicture"
                />
              </div>
            </div>
            <h4 className="mt-5">Information Trip</h4>
            <div className="row">
              <div className="col md-6 xs-3 text-secondary">
                <p>Acomodation</p>
                <p className="text-dark">
                  <i class="fas fa-hotel fw-bold me-2"></i>
                  {trip.acomodation}
                </p>
              </div>
              <div className="col md-6 xs-3 text-secondary">
                <p>Transportation</p>
                <p className="text-dark">
                  <i class="fas fa-plane fw-bold me-2"></i>
                  {trip.transportation}
                </p>
              </div>
              <div className="col md-6 xs-3 text-secondary">
                <p>Eat</p>
                <p className="text-dark">
                  <i class="fas fa-utensils fw-bold me-2"></i>
                  {trip.eat}
                </p>
              </div>
              <div className="col md-6 xs-3 text-secondary">
                <p>Duration</p>
                <p className="text-dark">
                  <i class="far fa-clock fw-bold me-2"></i>
                  {duration.day} Day {duration.night} Night
                </p>
              </div>
              <div className="col md-6 xs-3 text-secondary">
                <p>Date</p>
                <p className="text-dark">
                  <i class="fas fa-calendar-alt fw-bold me-2"></i>
                  {trip.date}
                </p>
              </div>
            </div>
            <h4 className="mt-5">Description</h4>
            <p className="text-secondary">lorem ipsum dolor sit amet</p>
            <div className="row">
              <div className="col">
                <p className="h2 text-warning">
                  IDR.{numberWithCommas(trip.price)}
                  <span className="h2 text-dark">/person</span>
                </p>
              </div>
              <div className="col text-end">
                <CountComponent />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col">
                <p className="h2">Total:</p>
              </div>
              <div className="col">
                <p className="h2 text-warning text-end">
                  IDR.
                  {numberWithCommas(total)}
                </p>
              </div>
            </div>
            <hr />
            <div className="row mt-3 text-end">
              <div className="col md-6">
                <Link to="/chart" className="btn btn-warning px-3 fw-bold text-light">
                  BOOK NOW
                </Link>
              </div>
            </div>
          </Container>
        </Container>
        <FooterComponent />
      </>
    );
  }
}

export default DetailTrip;
