import { NavbarComponent, FooterComponent } from "../components";
import numberWithCommas from "../utils/utils";
import React, { useState, useEffect, useContext } from "react";
import "../assets/stylesheet/detail.css";
import { Container } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { API } from "../config/api";
import swal from "sweetalert";
import { UserContext } from "../context/userContext";

function DetailTrip() {
  const [trip, setTrip] = useState([]);
  const [qty, setQty] = useState(1);
  const [state, dispatch] = useContext(UserContext);
  const [form, setForm] = useState({
    qty: "",
    tripId: "",
  });
  const history = useHistory();

  const { id } = useParams();

  const getTrip = async () => {
    try {
      const response = await API.get(`/trip/${id}`);

      setTrip(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const decrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };
  const increment = () => {
    const data = trip[0];
    if (qty < data.quota) {
      setQty(qty + 1);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setForm({
        qty: qty,
        tripId: id,
      });
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(form);
      if (state.isAdmin) {
        swal({
          title: "You're an admin",
          icon: "warning",
        });
      } else {
        const response = await API.post("/transaction", body, config);
        swal({
          title: "Book Succes!",
          text: "your order will proceed between 24hour",
          icon: "success",
          button: "ok!",
        });

        history.push("/chart");
      }
    } catch (error) {
      console.log(error);
      swal({
        title: "You need to login!",
        icon: "warning",
      });
    }
  };

  useEffect(() => {
    getTrip();
  }, []);

  return (
    <div>
      <NavbarComponent />
      <div className="header" />
      <Container fluid="true" className="detail">
        {trip?.map((item, index) => (
          <>
            <Container item={item} key={index}>
              <h3 className="pt-3">{item.title}</h3>
              <p className="text-secondary">{item.country}</p>
              <div className="container">
                <img src={item.image[0]} className="container ps-0" />
                <div className="row mt-2">
                  <div className="col mb-2 md-3 text-center">
                    <img src={item.image[1]} className="smallPicture" />
                  </div>
                  <div className="col mb-2 md-3 text-center">
                    <img src={item.image[2]} className="smallPicture" />
                  </div>
                  <div className="col mb-2 md-3 text-center">
                    <img src={item.image[3]} className="smallPicture" />
                  </div>
                </div>
              </div>
              <h4 className="mt-5">Information Trip</h4>
              <div className="row ms-5">
                <div className="col md-6 xs-3 text-secondary">
                  <p>Acomodation</p>
                  <p className="text-dark">
                    <i class="fas fa-hotel fw-bold me-2"></i>
                    {item.acomodation}
                  </p>
                </div>
                <div className="col md-6 xs-3 text-secondary">
                  <p>Transportation</p>
                  <p className="text-dark">
                    <i class="fas fa-plane fw-bold me-2"></i>
                    {item.transportation}
                  </p>
                </div>
                <div className="col md-6 xs-3 text-secondary">
                  <p>Eat</p>
                  <p className="text-dark">
                    <i class="fas fa-utensils fw-bold me-2"></i>
                    {item.eat}
                  </p>
                </div>
                <div className="col md-6 xs-3 text-secondary">
                  <p>Duration</p>
                  <p className="text-dark">
                    <i class="far fa-clock fw-bold me-2"></i>
                    {item.day} Day {item.night} Night
                  </p>
                </div>
                <div className="col md-6 xs-3 text-secondary">
                  <p>Date</p>
                  <p className="text-dark">
                    <i class="fas fa-calendar-alt fw-bold me-2"></i>
                    {item.date}
                  </p>
                </div>
              </div>
              <h4 className="mt-5">Description</h4>
              <p className="text-secondary">{item.desc}</p>
              <div className="row">
                <div className="col">
                  <p className="h2 text-warning">
                    IDR.{numberWithCommas(item.price)}
                    <span className="h2 text-dark">/person</span>
                  </p>
                </div>
                <div className="col text-end">
                  <div>
                    <div className="row">
                      <div className="col" />
                      <div className="col" />
                      <div className="col" />
                      <div className="col" />
                      <div className="col">
                        <button
                          onClick={decrement}
                          className="btn btn-warning text-light"
                        >
                          -
                        </button>
                      </div>
                      <div className="col">
                        <h4>{qty}</h4>
                      </div>
                      <div className="col">
                        <button
                          onClick={increment}
                          className="btn btn-warning text-light"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
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
                    {numberWithCommas(item.price * qty)}
                  </p>
                </div>
              </div>
              <hr />
              <div className="row mt-3 text-end">
                <div className="col md-6">
                  <form onSubmit={handleSubmit}>
                    <input type="hidden" value={item.id} name="tripId" />
                    <input type="hidden" value={qty} name="quantity" />
                    <button
                      type="submit"
                      className="btn btn-warning px-3 fw-bold text-light"
                    >
                      BOOK NOW
                    </button>
                  </form>
                </div>
              </div>
            </Container>
          </>
        ))}
      </Container>
      <FooterComponent />
    </div>
  );
}

export default DetailTrip;
