import { React, useState } from "react";
import {
  NavbarComponent,
  InvoiceComponent,
  FooterComponent,
} from "../components";
import { Container, Modal, Table } from "react-bootstrap";
import "../assets/stylesheet/profile.css";

function ListTransaction() {
  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);
  const handleHide = () => setShow(false);

  return (
    <>
      <NavbarComponent />
      <div className="header" />
      <Container fluid="true" className="profile mx-auto">
        <div className="container text-start pt-5">
          <h3>Incoming Transaction</h3>
          <Table className="bg-light" striped bordered hover size="sm">
            <thead>
              <tr>
                <th>No</th>
                <th>User</th>
                <th>Trip</th>
                <th>Bukti Transfer</th>
                <th>status Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>3D 3N Beutifull Seoul</td>
                <td>invoice.jpg</td>
                <td className="text-warning">pending</td>
                <td className="text-center">
                  <i class="fas fa-search text-primary" onClick={showModal}></i>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>4D 6N Japan Trip</td>
                <td>invoice.jpg</td>
                <td className="text-success">approve</td>
                <td className="text-center">
                  <i class="fas fa-search text-primary"></i>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
      <Modal dialogClassName="aprovement" show={show} onHide={handleHide}>
        <InvoiceComponent />
        <div className="container text-end py-3">
          <button className="btn btn-danger mx-3">cancel</button>
          <button className="btn btn-success">approve</button>
        </div>
      </Modal>

      <FooterComponent />
    </>
  );
}

export default ListTransaction;
