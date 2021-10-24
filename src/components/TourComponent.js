import React from "react";
import { Container } from "react-bootstrap";

import axios from "axios";
import { API_URL } from "../utils/constants";
import numberWithCommas from "../utils/utils";

export default class TourComponent extends React.Component {
  state = {
    trips: [],
  };

  componentDidMount() {
    axios
      .get(API_URL + "trip")
      .then((res) => {
        const trips = res.data;
        this.setState({ trips });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { trips } = this.state;
    return (
      <Container className="text-center">
        <div className="row">
          {trips &&
            trips.map((trip) => (
              <div className="col md-2 xs-3">
                <div className="card tour">
                  <div className="card-body py-0 text-center">
                    <img
                      className="thumbnail my-3"
                      src={"/images/" + trip.picture.picture1}
                    />
                    <h5 className="card-title">{trip.name}</h5>
                    <p className="card-text text-warning">
                      Rp.{numberWithCommas(trip.price)}
                      <span className="text-secondary ms-3">
                        {trip.country}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Container>
    );
  }
}
