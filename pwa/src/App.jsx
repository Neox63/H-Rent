import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Annonces from "./pages/annonces";
import CreateAnnonce from "./pages/annonces/create-annonce";
import Annonce from "./pages/annonces/[id]";
import Home from "./pages/home";
import Page404 from "./pages/page-404";
import Profil from "./pages/profil";
import Login from "./pages/login";
import PrivateRoute from "./components/PrivateRoute";
import UserProvider from "./providers/user";

const App = () => {
  return (
    <UserProvider>
      <Navbar />

      <main className="p-6">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/annonces" component={Annonces} />
            <Route exact path="/annonce/:id" component={Annonce} />

            <PrivateRoute exact path="/annonce/create">
              <CreateAnnonce />
            </PrivateRoute>

            <PrivateRoute exact path="/profil">
              <Profil />
            </PrivateRoute>

            <Route exact path="/login" component={Login} />
            <Route component={Page404} />
          </Switch>
        </Router>
      </main>

      <Footer />
    </UserProvider>
  );
};

export default App;
