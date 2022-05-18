import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import { UserProvider } from "./providers/user";
import MainRouter from "./MainRouter";
import { APIProvider } from "./utils/queries";

const App = () => {
  return (
    <APIProvider api={"http://localhost:8080/api"}>
      <UserProvider>
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>

            <Route path="*">
              <Navbar />

              <main className="p-6">
                <MainRouter />
              </main>

              <Footer />
            </Route>
          </Switch>
        </Router>
      </UserProvider>
    </APIProvider>
  );
};

export default App;
