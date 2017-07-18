import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import history from './history';
import Search from './components/Search';
import View from './components/View';
import Header from './components/Header';

class App extends Component  {

  constructor() {
    super();

    this.updateState = this.updateState.bind(this);

    this.state = {
      ads: [],
      loading: true
    }
  }

  updateState(newState){
    this.setState(newState);
  }

  render(){
    return(
      <Router history={history}>
        <div>
          <Header />
          <Route exact path='/' component={(props) => <Search {...props} {...this.state} updateState={this.updateState} />}/>
          <Route exatc path='/ad/:adId' component={View}/>
          <Route exact path='/:section' component={Search}/>
        </div>
      </Router>
    )
  }
}

export default App;
