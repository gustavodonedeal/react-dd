import React, { Component } from 'react';

class PriceTag extends Component {

  render() {
    const injectHTML = (markup) =>{
      return {__html: markup};
    };

    const ad = this.props.ad;
    const isWantedAd = ad.wanted === true;

    let price;
    let currencySymbolMarkup;
    currencySymbolMarkup = (typeof ad.price !== 'undefined' && ad.price !== '') ? (ad.currency === 'GBP' ? '&#163;' : '&#128;') : 'No Price';
    if (isWantedAd){
      price = <span>WANTED</span>
    } else{
      price = <span>
          <span dangerouslySetInnerHTML={injectHTML(currencySymbolMarkup)}></span>
        {(typeof ad.price !== 'undefined' && ad.price !== '') ? ad.price : ''}
      </span>;
    }

    return (
      <p className={'card__price' + (isWantedAd ? ' card__price--wanted' : '')}>{price}</p>
    );
  }
}

export default PriceTag;
