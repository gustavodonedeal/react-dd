import React, {Component} from 'react';
import ShowPhoneNumber from '../ShowPhoneNumber';

const SellerContactDetails = ({ name, id, sellerIsPhoneable }) => (
  <div className="contact-seller-container">
    <div className="contact-seller-header">
      <span className="contact-seller-image icon-user_tick"></span>

      <div className="contact-seller-title">
        <span className="contact-seller-name">{ name }</span>
      </div>
    </div>

    <div className="contact-seller-method contact-seller-by-message disabled">
      <div className="contact-seller-method-content">
        <button
          className="btn contact-seller-message-submit-btn"
          id="contact-seller-send-btn-main"
          disabled="disabled">
          Seller can't be messaged
        </button>
      </div>
    </div>

    <ShowPhoneNumber
      id={id}
      sellerIsPhoneable={sellerIsPhoneable}
    />
  </div>
);

const SellerProperties = ({ sellerProperties }) => (
  <div>
    {sellerProperties.map(({ label, value }) => (
      <dl className="seller-detail" key={label}>
        <dt className="seller-detail-label">{ label }</dt>
        <dd className="seller-detail-value">{ value }</dd>
      </dl>
    ))}
  </div>
);

const SellerVerifications = () => (
  <div className="seller-details-container">
    <div className="seller-details-content">
      <div className="seller-verification-status">
        <span className="verification-credential email">
          <span className="verified"><i className="icon icon-tick_green"></i>Email Verified</span>
        </span>

        <span className="verification-credential phone">
          <span className="verified"><i className="icon icon-tick_green"></i>Phone Verified</span>
        </span>
      </div>
    </div>
  </div>
);

class SellerDetails extends Component {

  getSellerProperties = () => {
    const { ad } = this.props;
    return [{
      label: 'Location',
      value: (<address>{ad.seller ? ad.seller.county : '---'}</address>)
    }, {
      label: 'DoneDealing since',
      value: '2018'
    }, {
      label: 'Listed ads',
      value: ad.seller ? ad.seller.adCount : ''
    }];
  }

  render() {
    const { ad } = this.props;
    return (
      <div className="seller-interaction-container">
        <SellerContactDetails
          name={ad.seller ? ad.seller.name : ''}
          id={ad.id}
          sellerIsPhoneable={ad.phoneResponse}
        />
        <SellerProperties
          sellerProperties={this.getSellerProperties()}
        />
        <SellerVerifications />
      </div>
    );
  }
}

export default SellerDetails;
