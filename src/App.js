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
      loading: true,
      filter: {}
    }
  }

  updateState(newState){
    this.setState(newState);
  }

  searchComponent(props){
    return (<Search {...props} {...this.state} updateState={this.updateState} />)
  }

  render(){
    return(
      <Router history={history}>
        <div>
          <Header />
          <Route exact path='/' component={(props) => this.searchComponent(props)}/>
          <Route exact path='/ad/:adId' component={View}/>
          <Route exact path='/:section' component={(props) => this.searchComponent(props)}/>
        </div>
      </Router>
    )
  }
}

export default App;
