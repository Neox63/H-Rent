import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import { UserProvider } from "./providers/user";
import MainRouter from "./MainRouter";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnwindowFocus: false,
      retry: 0,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default App;
