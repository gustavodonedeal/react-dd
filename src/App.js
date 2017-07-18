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
      this.loadAds = this.loadAds.bind(this);
      this.updateAds = this.updateAds.bind(this);

      // start the state
      this.state = {
        ads: [],
        filters: {}
      };
  }

  componentDidMount() {
    this.loadAds();
  }


  loadAds(filters = null) {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const params = Object.assign({},{
      adType: 'forsale',
      max: 30,
      sections: 'cars',
      sort: 'relevance desc',
    },filters) ;

    this.serverRequest = axios.post(`${cors}https://www.donedeal.ie/search/api/v4/find/`, params)
      .then((response) => {
        this.setState({
          ads: response.data.ads
        })
      }).catch((error) => {
        console.error(error);
        return [];
      });
  }

  updateAds(filter) {
    this.setState({
      ads: []
    });
    this.loadAds(filter);
  }

  render(){
    return(
      <Router history={history}>
        <div>
          <Header />
          <Route exact path='/' component={() => <Search ads={this.state.ads} updateAds={this.updateAds} />}/>
          <Route path='/ad/:adId' component={View}/>
        </div>
      </Router>
    )
  }
}

export default App;
