import React, { Component } from 'react';
import Card from '../Card';
import Filters from '../Filters';
import { getAds } from '../../api/ads';

const CardList = ({ ads }) => (
  <ul>
    { ads.map((ad) => <Card ad={ad} key={ad.id} />) }
  </ul>
);

class Search extends Component {

  constructor() {
    super();
    this.state = { section: 'cars' };
  }

  componentDidMount() {
    setTimeout(() => {
      if (this.props.loading && !this.props.ads.length) {
        getAds().then(ads => this.props.updateState({ ads, loading: false }));
      }
    }, 0);
  }

  updateAds = filter => {
    this.props.updateState({
      ads: [],
      loading: true,
      filter: filter
    });
  }

  render() {
    const { ads, loading } = this.props;
    const { section } = this.state;

    if (loading) {
      return (<p>Loading...</p>)
    }

    return (
      <div className="App">
        <Filters updateAds={this.updateAds} />
        <h1>{section.toUpperCase()}</h1>
        { ads ? <CardList ads={ads} /> : <p>{`No results for your search 😞`}</p> }
      </div>
    );
  }
}

export default Search;
