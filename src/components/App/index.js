import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import Header from '../Header';
import routes from './routes';

const App = () =>
  <div>
    <Header />
    <Switch>
      {routes.map(route => <Route key={route.path} {...route} />)}
    </Switch>
  </div>;

export default class extends Component {
  render() {
    return <App />;
  }
}
