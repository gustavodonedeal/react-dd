import React, { Component } from 'react';
import ShowPhoneNumber from './ShowPhoneNumber';

class SellerDetails extends Component {

  render(){

    const ad = this.props.ad;

    const sellerDetailsHTML =
          <div className="seller-interaction-container">
            <div className="contact-seller-container">
              <div className="contact-seller-header">
                <span className="contact-seller-image icon-user_tick"></span>

                <div className="contact-seller-title">
                  <span className="contact-seller-name">{ad.seller && ad.seller.name || ''}</span>
                </div>
              </div>

              <div className="contact-seller-method contact-seller-by-message disabled">
                <div className="contact-seller-method-content">
                  <button className="btn contact-seller-message-submit-btn" id="contact-seller-send-btn-main"
                          disabled="disabled">
                    Seller can't be messaged
                  </button>
                </div>
              </div>

              <ShowPhoneNumber ad={ad} />
            </div>

            <div className="seller-details-container">
              <div className="seller-details-content">
                <dl className="seller-detail">
                  <dt className="seller-detail-label">Location</dt>
                  <dd className="seller-detail-value">
                    <address>{ad.seller && ad.seller.county || '---'}</address>
                  </dd>
                </dl>
                <dl className="seller-detail">
                  <dt className="seller-detail-label">DoneDealing since</dt>
                  <dd className="seller-detail-value">2018</dd>
                </dl>
                <dl className="seller-detail">
                  <dt className="seller-detail-label">Listed ads</dt>
                  <dd className="seller-detail-value">{ad.seller && ad.seller.adCount || ''}</dd>
                </dl>

                <div className="seller-verification-status">
                <span className="verification-credential email">
                  <span className="verified">
                    <i className="icon icon-tick_green"></i>Email Verified
                  </span>
                </span>

                <span className="verification-credential phone">
                  <span className="verified">
                    <i className="icon icon-tick_green"></i>Phone Verified
                  </span>
                </span>
                </div>
              </div>
            </div>
          </div>

    return (
      sellerDetailsHTML
    );
  }
}

export default SellerDetails;
