import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/logo.png";
import "../assets/stylesheet/home.css";
import numberWithCommas from "../utils/utils";
import "../assets/stylesheet/detail.css";
import { API } from "../config/api";
import swal from "sweetalert";
import { useHistory } from "react-router";

function InvoiceComponent({ item }) {
  const [preview, setPreview] = useState(null);
  const history = useHistory();
  const [form, setForm] = useState({
    attachment: "",
    status: "waiting for approved",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
    // preview attachment
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  // upload attachment & update status
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const id = item.id;
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      if (form.attachment) {
        formData.set(
          "attachment",
          form?.attachment[0],
          form?.attachment[0]?.name
        );
      }
      formData.set("status", form.status);

      const response = await API.patch(`/transaction/${id}`, formData, config);
      swal({
        title: "Book Succes!",
        text: "your order will proceed between 24hour",
        icon: "success",
        button: "ok!",
      });

      console.log(response);
    } catch (error) {
      console.log(error);
      swal({
        title: "failed!",
        text: "please upload payment proof!",
        icon: "warning",
        button: "ok!",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Container>
          <div className="card container invoice">
            <div className="card-body">
              <div className="row">
                <div className="col text-start">
                  <img src={logo} />
                </div>
                <div className="col text-end">
                  <h3 className="fw-bold">Booking</h3>
                  <p className="text-secondary">{item.trip.date}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-5 text-start">
                  <h2 className="fw-bold">{item.trip.title}</h2>
                  <p className="text-secondary">{item.trip.country.name}</p>
                  <p className="btn alert text-primary">{item.status}</p>
                </div>
                <div className="col text-start">
                  <h4>Date Trip</h4>
                  <p className="text-secondary">{item.trip.date}</p>
                  <h4 className="mt-5">Acomodation</h4>
                  <p className="text-secondary">{item.trip.accomodation}</p>
                </div>
                <div className="col text-start">
                  <h4>Duration</h4>
                  <p className="text-secondary">
                    {item.trip.day} Day {item.trip.night} Night
                  </p>
                  <h4 className="mt-5">Transportation</h4>
                  <p className="text-secondary">{item.trip.transportation}</p>
                </div>
                <div className="col text-center">
                  {preview ? (
                    <div>
                      <img
                        src={preview}
                        style={{
                          maxWidth: "150px",
                          maxHeight: "150px",
                          objectFit: "cover",
                        }}
                        alt="preview"
                      />
                    </div>
                  ) : (
                    <>
                      {item.attachment === null ? (
                        <>
                          <label className="mt-5">
                            <i class="fas fa-paperclip fa-3x"></i>
                            <input
                              type="file"
                              name="attachment"
                              onChange={handleChange}
                            />
                          </label>
                        </>
                      ) : (
                        <img className="attachment"
                          src={
                            "http://localhost:5000/uploads/" + item.attachment
                          }
                        />
                      )}
                    </>
                  )}
                  <p className="text-secondary mt-3">upload payment proof</p>
                </div>
              </div>
              <div className="row mt-3">
                <table className="table text-start">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Full Name</th>
                      <th scope="col"></th>
                      <th scope="col">Phone</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>{item.user.name}</td>
                      <td></td>
                      <td>{item.user.phone}</td>
                      <th scope="row">Qty</th>
                      <th scope="row">: {item.qty}</th>
                    </tr>
                    <tr>
                      <th></th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <th scope="row">Total</th>
                      <th scope="row" className="text-danger">
                        : IDR.{numberWithCommas(item.total)}
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
        {item.status === "waiting for payment" ? (
          <>
            <div className="container text-end mt-3">
              <button type="submit" className="btn btn-warning px-5">
                pay
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
      </form>
    </>
  );
}

export default InvoiceComponent;
