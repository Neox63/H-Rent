import { Redirect, Route } from "react-router-dom";
import { useUser } from "../../providers/user";

function PrivateRoute({ children, ...rest }) {
  const { isLogged } = useUser();

  return (
    <Route
      {...rest}
      render={() => (isLogged ? children : <Redirect to={"/login"} />)}
    />
  );
}

export default PrivateRoute;
