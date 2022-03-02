import { Redirect, Route } from "react-router-dom";

import { useUser } from "../../hooks/user";

function PrivateRoute({ children, ...rest }) {
  const { isLogged } = useUser();

  console.log("Route :", isLogged);
  return (
    <Route
      {...rest}
      render={() => (isLogged ? children : <Redirect to={"/login"} />)}
    />
  );
}

export default PrivateRoute;
