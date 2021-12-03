import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Annonces from "./pages/annonces";
import Annonce from "./pages/annonces/[id]";
import Home from "./pages/home";
import Page404 from "./pages/page-404";
import Profil from "./pages/profil";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/annonces" component={Annonces} />
        <Route exact path="/annonce/:id" component={Annonce} />
        <Route exact path="/profil" component={Profil} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
};

export default App;
