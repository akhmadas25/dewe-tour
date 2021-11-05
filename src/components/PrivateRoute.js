// import necessary utility from rrd
import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../context/userContext";

// create component here
const PrivateRoute = ({ component: Component, ...rest }) => {
  // create statement for validation (by hardcode first)
  const [state, dispatch] = useContext(UserContext);
  const isLogin = true

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          isLogin ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </>
  );
};

export default PrivateRoute;
