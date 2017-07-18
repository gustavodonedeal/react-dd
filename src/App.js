import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import history from './history';
import Search from './components/Search';
import View from './components/View';
import Header from './components/Header';

class App extends Component  {

  constructor(){
      super();

      // start the state
      this.state = {
        ads: []
      };
  }

  componentDidMount() {
    const cors = 'https://cors-anywhere.herokuapp.com/';

    this.serverRequest = axios.post(`${cors}https://www.donedeal.ie/search/api/v4/find/`, {
        adType: 'forsale',
        max: 30,
        sections: 'cars',
        sort: 'relevance desc',
      }).then((response) => {
        //console.log(response);
        this.setState({
          ads: response.data.ads
        });
      }).catch((error) => {
        console.error(error);
      });
  }

  // componentWillUnmount() {
  //   this.serverRequest.abort();
  // }

  render(){
    return(
      <Router history={history}>
        <div>
          <Header />
          <Route exact path='/' component={() => <Search ads={this.state.ads}/>}/>
          <Route path='/ad/:adId' component={View}/>
        </div>
      </Router>
    )
  }
}

export default App;
