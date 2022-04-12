// import necessary utility from rrd
import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../context/userContext";

// create component here
const AdminRoute = ({ component: Component, ...rest }) => {
  // create statement for validation (by hardcode first)
  const [state, dispatch] = useContext(UserContext);
  const isAdmin = state.isAdmin;

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          isAdmin ? <Component {...props} /> : <Redirect to="/404" />
        }
      />
    </>
  );
};

export default AdminRoute;
