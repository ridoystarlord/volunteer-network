import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/common/Footer/Footer";
import Register from "./components/common/UserAuthentication/Register/Register";
import Header from "./components/common/Header/Header";
import AuthProvider from "./context/Authprovider";
import NotFound from "./components/NotFound/NotFound";
import Myevents from "./components/Myevents/Myevents";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RegisterEvent from "./components/RegisterEvent/RegisterEvent";
import EventsList from "./components/EventsList/EventsList";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/events">
              <EventsList></EventsList>
            </Route>
            <PrivateRoute path="/my-events">
              <Myevents></Myevents>
            </PrivateRoute>
            <PrivateRoute path="/registerevent/:id">
              <RegisterEvent></RegisterEvent>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
