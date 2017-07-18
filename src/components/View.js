import React from 'react';
import axios from 'axios';
import PriceTag from './PriceTag';
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
          console.log(response)
        this.setState({
          ad: response.data,
        });
      }).catch((error) => {
        console.error(error);
      });
  };

  render() {
    const ad = this.state.ad;
    const adPhoto = (ad.photos && ad.photos.length > 0 ? ad.photos[0].small2 : null);

    return (
      <div className="App">
        <h1>Ad Details</h1>

        <h2>{ad.header}</h2>
        <description>
          {ad.description}
        </description>
        <div>
          <PriceTag ad={ad} />
          {ad.county}
        </div>

        <div className="card__media">
          <div className="card__photo">
            <img src={adPhoto}/>
          </div>
          <div className="card__media-count">
            <i className="icon-camera"></i>
            1/{ad.mediaCount}
          </div>
        </div>

        <SellerDetails ad={ad}/>

      </div>
    )
  }
}

export default View;
