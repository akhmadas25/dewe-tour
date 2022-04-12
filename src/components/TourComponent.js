import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import "../assets/stylesheet/detail.css";
import { API } from "../config/api";
import numberWithCommas from "../utils/utils";
import { useHistory } from "react-router";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export default class TourComponent extends React.Component {
  state = {
    trips: [],
  };

  componentDidMount() {
    axios.get(API_URL + "trips").then((res) => {
      const data = res.data.data;
      this.setState({ data });
      console.log(this.state.data);
    });
  }

  render() {
    const { data } = this.state;
    // console.log(trips);
    return (
      <Container>
        <div className="row ms-3">
          {data &&
            data.map((trip) => (
              <div className="col md-2 ">
                <div className="card tour">
                  <div className="card-body py-0">
                    <Link
                      to={`/trip/` + trip.id}
                      style={{ textDecoration: "none" }}
                    >
                      <img className="thumbnail my-3" src={trip.image[0]} />
                      <div className="quota text-end text-light">
                        <h5>
                          {trip.available}/{trip.quota}
                        </h5>
                      </div>
                      <h5 className="card-title mt-5">{trip.title}</h5>
                      <div className="row">
                        <div className="col text-warning text-start">
                          Rp.{numberWithCommas(trip.price)}
                        </div>
                        <div className="col text-secondary text-end">
                          {trip.country}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Container>
    );
  }
}
