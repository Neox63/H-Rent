import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Annonces from "./pages/annonces";
import CreateAnnonce from "./pages/annonces/create-annonce";
import Annonce from "./pages/annonces/[id]";
import FavoriteAnnonces from "./pages/favorites";
import Home from "./pages/home";
import Login from "./pages/login";
import Page404 from "./pages/page-404";
import Profil from "./pages/profil";
import Requests from "./pages/reservation-requests";
import Reservations from "./pages/reservations";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/annonces">
        <Annonces />
      </Route>

      <Route exact path="/favoris">
        <FavoriteAnnonces />
      </Route>

      <Route exact path="/annonce/:id">
        <Annonce />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <PrivateRoute exact path="/create">
        <CreateAnnonce />
      </PrivateRoute>

      <PrivateRoute exact path="/profil">
        <Profil />
      </PrivateRoute>

      <PrivateRoute exact path="/reservation-request">
        <Requests />
      </PrivateRoute>

      <PrivateRoute exact path="/reservations">
        <Reservations />
      </PrivateRoute>

      <Route exact path="/404">
        <Page404 />
      </Route>

      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};

export default MainRouter;
