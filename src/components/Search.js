import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import Card from './Card';
import Filters from './Filters';

class Search extends Component {

  constructor(){
      super();
      this.loadAds = this.loadAds.bind(this);
      this.updateAds = this.updateAds.bind(this);

      // start the state
      this.state = {
        ads: []
      };
  }

  componentDidMount() {
    this.loadAds();
  }


  loadAds(filters = null) {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const section = this.props.match.params.section || 'cars';
    const params = Object.assign({},{
      adType: 'forsale',
      max: 30,
      section: section,
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

  render() {
    return (
      <div className="App">
        <h1>Search Results</h1>
        <p><Filters updateAds={this.updateAds} /></p>
        <ul>
          {this.state.ads.map((ad) =>
            <Card ad={ad} key={ad.id} />
          )}
        </ul>
      </div>
    );
  }
}

export default Search;
