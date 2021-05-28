import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "views/Dealer/Homepage";
import Landing from "views/Outlet/Landing";

import "./App.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/outlet" component={Landing} />
      </Switch>
    </Router>
  );
};

export default App;
