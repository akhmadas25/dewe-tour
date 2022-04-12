import React, { useState } from "react";
import { API } from "../config/api";
import { Modal } from "react-bootstrap";
import { InvoiceComponent } from ".";
import swal from "sweetalert";

function ModalApprove({ item }) {
  const [transaction, setTransaction] = useState([]);
  const [form, setForm] = useState({
    status: "",
  });
  const [show, setShow] = useState(false);
  const handleHide = () => setShow(false);

  const handleTransaction = async (e) => {
    try {
      e.preventDefault();
      setShow(true);
      const id = item.id;

      const response = await API.get(`/transaction/${id}`);
      setTransaction(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleApprove = async () => {
    try {
      const id = item.id;

      const data = { status: "aproved" };

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify(data);

      const response = await API.patch(`/transactionAdmin/${id}`, body, config);
      swal({
        title: "payment successfully approved",
        icon: "success",
      });
      handleHide();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = async () => {
    try {
      const id = item.id;

      const data = { status: "canceled" };

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify(data);

      const response = await API.patch(`/transactionAdmin/${id}`, body, config);
      swal({
        title: "payment canceled",
        icon: "warning",
      });
      handleHide();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <tr>
        <td>{item.user.name}</td>
        <td>{item.trip.title}</td>
        <td>
          <img
            src={"http://localhost:5000/uploads/" + item.attachment}
            style={{ height: "80px" }}
          />
        </td>
        <td>{item.status}</td>
        <td className="text-center">
          <form onSubmit={handleTransaction}>
            <button
              className="fas fa-search text-primary"
              id="icon"
              type="submit"
            />
          </form>
        </td>
      </tr>
      <Modal dialogClassName="aprovement py-0" show={show} onHide={handleHide}>
        {transaction?.map((item, index) => (
          <>
            <InvoiceComponent item={item} key={index} />
            <div className="container text-end py-3">
              <button className="btn btn-danger mx-3" onClick={handleCancel}>
                cancel
              </button>
              <button className="btn btn-success" onClick={handleApprove}>
                approve
              </button>
            </div>
          </>
        ))}
      </Modal>
    </>
  );
}

export default ModalApprove;
