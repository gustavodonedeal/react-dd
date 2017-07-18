import React, { Component } from 'react';

class SellerDetails extends Component {

  render(){

    const ad = this.props.ad;

    const sellerDetailsHTML =
          <div className="seller-interaction-container">
            <div className="contact-seller-container">
              <div className="contact-seller-header">
                <span className="contact-seller-image icon-user_tick"
                ng-className="(adView.ad.seller.verification.email || adView.ad.seller.verification.phone) ? 'icon-user_tick' : 'icon-user_no-tick'"></span>

                <div className="contact-seller-title">
                  <span className="contact-seller-name">{ad.seller && ad.seller.name ? ad.seller.name : ''}</span>
                </div>
                <div className="seller-type-tag trader"
                  ng-if="adView.ad.dealer || adView.ad.traderName"
                ng-className="adView.ad.dealer ? 'dealer' : 'trader'">Trader
                </div>
                <a rel="nofollow" className="see-all-ads-link trackable"
                  target="_self" title="See all of this advertiser's ads" href={'/all?userId=' + (ad.seller && ad.seller.id)}>View all ads</a>
              </div>

              <div className="contact-seller-method contact-seller-by-message disabled"
              ng-className="{disabled: !adView.ad.emailResponse}">
                {/* <div className="contact-seller-status">
                  <div ng-show="contact.conversation" className="message-history ng-hide">
                  <label ng-show="contact.responseStatus == 'sent'" className="ng-hide">Message sent!</label>
                  See <a ng-href="/accounts/messages/conversation/" href="/accounts/messages/conversation/">message history</a>
                  </div>
                </div> */}
                <div className="contact-seller-method-content">
                  <button className="btn contact-seller-message-submit-btn" id="contact-seller-send-btn-main"
                    ng-click="contact.callSendMessage($event, adView.ad)" ng-disabled="!adView.ad.emailResponse"
                  disabled="disabled">
                    Seller can't be messaged
                  </button>
                </div>
              </div>

              <div className="contact-seller-method contact-seller-by-phone"
              ng-className="{disabled: !adView.ad.phoneResponse}">
                <div className="btn contact-seller-by-phone-btn input-btn"
                ng-className="(adView.ad.phoneResponse) ? 'input-btn' : 'disabled'">
                  <button className="show-number" id="show-number-btn"
                    ng-click="contact.showNumber($event, adView.ad)"
                    ng-hide="contact.form.phoneNumber || contact.form.forbidden"
                  title="Click to show phone number">
                    Show Phone Number
                  </button>
                </div>
              </div>
            </div>

            <div className="seller-details-container">
              <div className="seller-details-content">
                <dl className="seller-detail">
                  <dt className="seller-detail-label">Location</dt>
                  <dd className="seller-detail-value">
                    <address>{ad.seller && ad.seller.county ? ad.seller.county : '---'}</address>
                  </dd>
                </dl>
                <dl className="seller-detail">
                  <dt className="seller-detail-label">DoneDealing since</dt>
                  <dd className="seller-detail-value">2018</dd>
                </dl>
                <dl className="seller-detail">
                  <dt className="seller-detail-label">Listed ads</dt>
                  <dd className="seller-detail-value">{ad.seller && ad.seller.adCount ? ad.seller.adCount : ''}</dd>
                </dl>

                <div className="seller-verification-status">
                <span className="verification-credential email">
                  <span className="verified" ng-show="ad.seller.verification.email">
                    <i className="icon icon-tick_green"></i>Email Verified
                  </span>
                </span>

                <span className="verification-credential phone">
                  <span className="verified" ng-show="ad.seller.verification.phone">
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
