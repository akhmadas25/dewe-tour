import { NavbarComponent, FooterComponent } from "../components";
import InvoiceComponent from "../components/InvoiceComponent";
import "../assets/stylesheet/profile.css";

import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { API } from "../config/api";

function Chart() {
  const [chart, setChart] = useState([]);

  const getTransaction = async () => {
    try {
      const response = await API.get("/transaction");
      setChart(response.data.data);
      console.log(chart);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransaction();
  }, []);

  return (
    <div>
      <NavbarComponent />
      <div className="header" />
      <Container fluid="true" className="text-center profile py-2">
        <Container className="mx-auto">
          <div className="row">
            {chart?.map((item, index) => {
              if (item.status === "waiting for payment") {
                return <InvoiceComponent item={item} key={index} />;
              }
            })}
          </div>
        </Container>
      </Container>
      <FooterComponent />
    </div>
  );
}

export default Chart;
