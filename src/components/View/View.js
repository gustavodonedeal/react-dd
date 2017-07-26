import React from 'react';
import PriceTag from '../PriceTag';
import MediaPreview from '../MediaPreview';
import SellerDetails from '../SellerDetails';
import { getAd } from '../../api/ads';

class View extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ad: {}
    }
  };

  componentDidMount() {
    const { adId } = this.props.match.params;
    getAd(adId).then(ad => 
      this.setState(prevState => ({ ad }))
    );
  };

  render() {
    const { ad } = this.state;
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
