import React, { Component } from 'react';
import '../App.css';
import Card from './Card';
import Filters from './Filters';

class Search extends Component {

  render() {
    return (
      <div className="App">
        <h1>Search Results</h1>
        <Filters updateAds={this.props.updateAds} />
        <ul>
          {this.props.ads.map((ad) =>
            <Card ad={ad} key={ad.id} />
          )}

        </ul>

      </div>
    );
  }
}

export default Search;
