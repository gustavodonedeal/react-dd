import React from 'react';
import axios from 'axios';
import PriceTag from './PriceTag';
import MediaPreview from './MediaPreview';
import SellerDetails from './SellerDetails';

const corsUrlPrefix = 'https://cors-anywhere.herokuapp.com/';
const viewApiUrl = `${corsUrlPrefix}https://www.donedeal.ie/cadview/api/v3/view/ad/`;

class View extends React.Component {

  constructor() {
    super();

    this.state = {
      ad: {}
    }
  };

  componentDidMount() {
    this.serverRequest = axios.get(viewApiUrl + this.props.match.params.adId)
      .then((response) => {
        this.setState({
          ad: response.data,
        });
      }).catch((error) => {
        console.error(error);
      });
  };

  render() {
    const ad = this.state.ad;

    return (
      <div className="App">
        <h1>Ad Details</h1>

        <h2>{ad.header}</h2>
        <description className="desc">
          {ad.description}
        </description>
        <div>
          <PriceTag ad={ad} />
          {ad.county}
        </div>

        <MediaPreview ad={ad} />

        <SellerDetails ad={ad} />

      </div>
    )
  }
}

export default View;
