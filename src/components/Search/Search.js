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

  constructor(props) {
    super(props);
    this.state = {
      section: 'cars',
      ads: [],
      loading: true,
      filter: {}
    };
  }

  componentDidMount() {
    const { loading, ads, section, filter } = this.state;
    if (loading && !ads.length) {
      getAds(section, filter).then(
        ads => this.setState(prevState => ({ ads, loading: false }))
      );
    }
  }

  updateAds = filter => {
    this.setState({
      ads: [],
      loading: true,
      filter
    });
  }

  render() {
    const { section, ads, loading } = this.state;

    return !loading ? (
      <div className="App">
        <Filters updateAds={this.updateAds} />
        <h1>{section.toUpperCase()}</h1>
        { ads ? <CardList ads={ads} /> : <p>{`No results for your search 😞`}</p> }
      </div>
    ) : (<p>Loading...</p>);
  }
}

export default Search;
