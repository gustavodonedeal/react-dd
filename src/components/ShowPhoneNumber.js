import React, { Component } from 'react';
import axios from 'axios';

const corsUrlPrefix = 'https://cors-anywhere.herokuapp.com/';
const getPhoneNumberApiUrl = `${corsUrlPrefix}https://www.donedeal.ie/cadview/api/v3/view/ad/`;

class ShowPhoneNumber extends Component {

  constructor() {
    super();

    this.state = {
      num: null,
    }
    this.getNum = this.getNum.bind(this);
  };

  getNum(){
    const id = this.props.ad.id;
    this.serverRequest = axios.post(`${corsUrlPrefix}${getPhoneNumberApiUrl}${id}/phone`)
      .then((response) =>{
        this.setState({
          num: response.data.phone,
        });
      }).catch((error) =>{
        console.error(error);
      });
  }

  render(){

    const ad = this.props.ad;
    const num = this.state.num;

    const showNumText = (!ad.phoneResponse) ? `Seller can't be phoned` : `Show phone number`;
    let contactActionHTML = null;
    if (!num) {
      contactActionHTML =
        <button className="show-number" id="show-number-btn" onClick={this.getNum}
                title="Click to show phone number">
          {showNumText}
        </button>
    } else {
      contactActionHTML = <div className="contact-seller-method-content number">
        <a href={`tel:${num}`}
           className="contact-seller-phone-call-btn">
          <span className="contact-seller-method-cta-text">Call </span>
          <span className="dynamic-seller-number">{num}</span>
        </a>
      </div>
    }

    return (
      <div className="contact-seller-method contact-seller-by-phone">
        <div className="btn contact-seller-by-phone-btn input-btn">
          {contactActionHTML}
        </div>
      </div>
    );
  }
}

export default ShowPhoneNumber;
