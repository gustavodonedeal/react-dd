import React, { Component } from 'react';
import { getSellersPhoneNumber } from '../api/ads';


const PhoneButton = ({ onButtonClick, isPhoneable }) => (
  <button 
    className="show-number"
    id="show-number-btn"
    onClick={onButtonClick}
    title="Click to show phone number"
  >
    { isPhoneable ? `Seller can't be phoned` : `Show phone number` }
  </button>
);

const PhoneNumber = ({ phoneNumber }) => (
  <div className="contact-seller-method-content number">
    <a href={`tel:${phoneNumber}`}
        className="contact-seller-phone-call-btn">
      <span className="contact-seller-method-cta-text">Call </span>
      <span className="dynamic-seller-number">{phoneNumber}</span>
    </a>
  </div>
);

class ShowPhoneNumber extends Component {

  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: null,
    }
  };

  getNum = () => {
    const { id } = this.props;
    getSellersPhoneNumber(id)
      .then(phoneNumber => this.setState(prevState => ({ phoneNumber })))
  }

  renderPhoneButton() {
    const { phoneNumber } = this.state;
    const { isPhoneable } = this.props;
    return !phoneNumber ? (
        <PhoneButton
          onButtonClick={this.getNum}
          isPhoneable={isPhoneable}
        />
    ) : <PhoneNumber phoneNumber={phoneNumber} />;
  }

  render(){    
    return (
      <div className="contact-seller-method contact-seller-by-phone">
        <div className="btn contact-seller-by-phone-btn input-btn">
          { this.renderPhoneButton() }
        </div>
      </div>
    );
  }
}

export default ShowPhoneNumber;
