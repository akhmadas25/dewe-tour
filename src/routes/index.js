import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useEffect, useContext } from "react";
import Home from "../pages/Home";
import DetailTrip from "../pages/DetailTrip";
import Profile from "../pages/Profile";
import Index from "../admin/Index";
import ListTransaction from "../admin/ListTransaction";
import AddTrip from "../admin/AddTrip";
import Chart from "../pages/Chart";
import { PrivateRoute } from "../components";
import { UserContext } from "../context/userContext";
import { API, setAuthToken } from "../config/api";

const Routes = () => {
  let history = useHistory();
  const [state, dispatch] = useContext(UserContext);
  console.clear();
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    // // Redirect Auth
    // if (!state.isLogin) {
    //   history.push("/");
    // } else {
    //   if (state.user.role === "admin") {
    //     history.push("/admin/list-transaction");
    //   } else if (state.user.role === "user") {
    //     history.push("/");
    //   }
    // }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/checkAuth");

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      } 
      console.log(response);
      // Get user data
      let payload = response.data.data;
      console.log(payload);
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(state);

  useEffect(() => {
    checkUser();
  }, []);
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <PrivateRoute path="/profile" exact component={Profile} />
      <Route path="/chart" exact component={Chart} />
      <Route path="/trip/:id" exact component={DetailTrip} />
      <PrivateRoute path="/admin" exact component={Index} />
      <PrivateRoute
        path="/admin/list-transaction"
        exact
        component={ListTransaction}
      />
      <PrivateRoute path="/admin/add-trip" exact component={AddTrip} />
    </Switch>
  );
};

export default Routes;
