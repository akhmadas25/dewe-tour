import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes";
import { UserContextProvider } from "../src/context/userContext";

ReactDOM.render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </UserContextProvider>,

  document.getElementById("root")
);
