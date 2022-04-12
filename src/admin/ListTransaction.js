import { React, useState, useEffect, useContext } from "react";
import { NavbarComponent, FooterComponent } from "../components";
import { Container, Table } from "react-bootstrap";
import "../assets/stylesheet/profile.css";
import { API } from "../config/api";
import "../assets/stylesheet/table.css";
import ModalApprove from "../components/ModalApprove";

function ListTransaction() {
  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    try {
      const response = await API.get("/transactions");

      setTransactions(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <>
      <NavbarComponent />
      <div className="header" />
      <Container fluid="true" className="profile mx-auto">
        <div className="container text-start pt-5">
          <h3>Incoming Transaction</h3>
          <Table
            id="Table"
            className="bg-light"
            striped
            bordered
            hover
            size="sm"
          >
            <thead>
              <th>No</th>
              <th>User</th>
              <th>Trip</th>
              <th>Transfer Proof</th>
              <th>Status Payment</th>
              <th>Action</th>
            </thead>
            <tbody>
              {transactions?.map((item, index) => (
                <ModalApprove item={item} key={index} />
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
      <FooterComponent />
    </>
  );
}

export default ListTransaction;
