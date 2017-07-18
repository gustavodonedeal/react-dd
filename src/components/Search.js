import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import Card from './Card';
import Filters from './Filters';

class Search extends Component {

  constructor() {
    super();
    this.loadAds = this.loadAds.bind(this);
    this.updateAds = this.updateAds.bind(this);

    // start the state
    this.error = null;
    this.section = 'cars';

    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }

  componentDidMount() {
    setTimeout(() => {
      this.section = 'cars';
      //this.section = this.props.match.params.section || 'cars';
      if (this.props.loading && !this.props.ads.length) {
        this.loadAds();
      }
    }, 0);
  }

  loadAds() {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const params = Object.assign({}, {
      adType: 'forsale',
      max: 30,
      section: this.section,
      sort: 'relevance desc',
    }, this.props.filter) ;

    this.serverRequest = axios.post(`${cors}https://www.donedeal.ie/search/api/v4/find/`, params)
      .then((response) => {
        this.props.updateState({
          ads: response.data.ads,
          loading: false
        });
      }).catch((error) => {
        console.error(error);
      });
  }

  updateAds(filter) {
    this.props.updateState({
      ads: [],
      loading: true,
      filter: filter
    });
  }

  render() {
    const { ads, loading } = this.props;
    let cards;

    if(loading) {
      return (<p>Loading...</p>)
    } else if (!ads) {
      cards = (
        <p>{`No results for your search 😞`}</p>)
    } else {
      cards = (
        <ul>
          {ads.map((ad) =>
            <Card ad={ad} key={ad.id} />
          )}
        </ul>
      )
    }

    return (
      <div className="App">
        <Filters updateAds={this.updateAds} />
        <h1>{this.section.toUpperCase()}</h1>
        {cards}
      </div>
    );
  }
}

export default Search;
