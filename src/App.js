import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import history from './history';
import Search from './components/Search';
import View from './components/View';
import Header from './components/Header';

class App extends Component  {

  render(){
    return(
      <Router history={history}>
        <div>
          <Header />
          <Route exact path='/' component={Search}/>
          <Route path='/ad/:adId' component={View}/>
          <Route path='/:section' component={Search}/>
        </div>
      </Router>
    )
  }
}

export default App;
