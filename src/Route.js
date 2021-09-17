import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Contact from "./Contact/Contact";

const Routing = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routing;
