import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "views/Landing";
import Outlet from "views/Outlet";
import ProductDetail from "views/ProductDetail";

import "./App.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/outlet" component={Outlet} />
        <Route exact path="/product/detail" component={ProductDetail} />
      </Switch>
    </Router>
  );
};

export default App;
