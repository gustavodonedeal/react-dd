import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";
import routes from "./routes";

const App = () =>
  <div>
    <nav>
      <Link to="/test">Hello</Link>
    </nav>
    <Switch>
      {routes.map(route => <Route key={route.path} {...route} />)}
    </Switch>
  </div>;

export default class extends Component {
  render() {
    return <App />;
  }
}
