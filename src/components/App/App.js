import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import Search from '../Search';
import View from '../View';
import Header from '../Header';
import './App.css';

class App extends Component  {

  constructor() {
    super();

    this.state = {
      ads: [],
      loading: true,
      filter: {}
    }
  }

  updateState = newState => this.setState(newState);

  searchComponent(props){
    return (<Search {...props} {...this.state} updateState={this.updateState} />)
  }

  render(){
    return(
      <Router history={createBrowserHistory()}>
        <div>
          <Header />
          <Route exact path='/' component={(props) => this.searchComponent(props)} />
          <Route exact path='/ad/:adId' component={View} />
          <Route exact path='/:section' component={(props) => this.searchComponent(props)}/>
        </div>
      </Router>
    )
  }
}

export default App;
