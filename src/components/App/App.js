import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import Search from '../Search';
import View from '../View';
import Header from '../Header';
import './App.css';

class App extends Component  {
  render(){
    return(
      <Router history={createBrowserHistory()}>
        <div>
          <Header />
          <Route exact path='/' component={Search} />
          <Route exact path='/ad/:adId' component={View} />
          <Route exact path='/:section' component={Search}/>
        </div>
      </Router>
    )
  }
}

export default App;
