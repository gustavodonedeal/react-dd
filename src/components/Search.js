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
        ads: [],
        loading: true,
        error: null
      };
      this.error = null;
  }

  componentDidMount() {
    setTimeout(() => {
      this.section = this.props.match.params.section || 'cars';
      this.loadAds();
    },0);
  }


  loadAds(filters = null) {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const params = Object.assign({},{
      adType: 'forsale',
      max: 30,
      section: this.section,
      sort: 'relevance desc',
    },filters) ;

    this.serverRequest = axios.post(`${cors}https://www.donedeal.ie/search/api/v4/find/`, params)
      .then((response) => {
        this.setState({
          ads: response.data.ads,
          loading: false
        });
      }).catch((error) => {
        this.setState({
          error: error
        });
      });
  }

  updateAds(filter) {
    this.setState({
      ads: []
    });
    this.loadAds(filter);
  }

  render() {
    const { loading, error } = this.state;

    if(loading && !error) {
      return (<p>Loading...</p>)
    } else if(error){
      return (<p><b>Error:</b> <i>{error}</i></p>)
    }

    return (
      <div className="App">
        <Filters updateAds={this.updateAds} />
        <h1>{this.section.toUpperCase()}</h1>
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
