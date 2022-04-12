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
import PageNotFound from "../components/PageNotFound";
import { PrivateRoute, AdminRoute } from "../components";
import { UserContext } from "../context/userContext";
import { API, setAuthToken } from "../config/api";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const Routes = () => {
  let history = useHistory();
  const [state, dispatch] = useContext(UserContext);
  console.clear();

  useEffect(() => {
    console.log(state);
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

      // Get user data
      let payload = response.data.data;

      // Get token from local storage
      payload.token = localStorage.token;
      if (payload.role === "admin") {
        dispatch({
          type: "ADMIN_SUCCESS",
          payload,
        });
      } else {
        dispatch({
          type: "USER_SUCCESS",
          payload,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: "AUTH_ERROR",
      });
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  if (state.isLoading) {
    return (
      <>
        <p>loading</p>
      </>
    );
  }
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/404" exact component={PageNotFound} />
      <PrivateRoute path="/profile" exact component={Profile} />
      <PrivateRoute path="/chart" exact component={Chart} />
      <Route path="/trip/:id" exact component={DetailTrip} />
      <AdminRoute path="/admin" exact component={Index} />
      <AdminRoute
        path="/admin/list-transaction"
        exact
        component={ListTransaction}
      />
      <AdminRoute path="/admin/add-trip" exact component={AddTrip} />
    </Switch>
  );
};

export default Routes;
