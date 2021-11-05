import React from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/logo.png";
import "../assets/stylesheet/profile.css";
import proof from "../assets/transfer.png";

function InvoiceComponent() {
  return (
    <Container>
      <div className="card container invoice">
        <div className="card-body">
          <div className="row">
            <div className="col text-start">
              <img src={logo} />
            </div>
            <div className="col text-end">
              <h3 className="fw-bold">Booking</h3>
              <p className="text-secondary">Saturday, 24 agustus</p>
            </div>
          </div>
          <div className="row">
            <div className="col-5 text-start">
              <h2 className="fw-bold">4D 6N Japan Trip</h2>
              <p className="text-secondary">Japan</p>
              <p className="btn alert text-warning">waiting for aprove</p>
            </div>
            <div className="col text-start">
              <h4>Date Trip</h4>
              <p className="text-secondary">26 Agustus 2020</p>
              <h4 className="mt-5">Acomodation</h4>
              <p className="text-secondary">Hotel 4 night</p>
            </div>
            <div className="col text-start">
              <h4>Duration</h4>
              <p className="text-secondary">4 Day 6 Night</p>
              <h4 className="mt-5">Transportation</h4>
              <p className="text-secondary">Qatar Airway</p>
            </div>
            <div className="col text-end">
              <img src={proof} />
              <p className="text-secondary">upload payment proof</p>
            </div>
          </div>
          <div className="row mt-3">
            <table className="table text-start">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Phone</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Male</td>
                  <td>08954656</td>
                  <th scope="row">Qty</th>
                  <th scope="row">: 1</th>
                </tr>
                <tr>
                  <th></th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <th scope="row">Total</th>
                  <th scope="row" className="text-danger">
                    : IDR.12,999,999
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default InvoiceComponent;
