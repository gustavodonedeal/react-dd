import React, { Component } from 'react';

const Price = ({ currencySign, price }) => (
  <span>
    <span>{ currencySign }</span>
    { price }
  </span>
);

class PriceTag extends Component {

  getCurrencySign() {
    const { ad, price, currency } = this.props;
    return !!price ? (currency === 'GBP' ? '£' : '€') : 'No Price';
  }

  render() {
    const { price, isWantedAd } = this.props;
    return (
      <p className={'card__price' + (isWantedAd ? ' card__price--wanted' : '')}>
        { isWantedAd ? 
          <span>WANTED</span> :
          <Price currencySign={this.getCurrencySign()} price={price} /> }
      </p>
    );
  }
}

export default PriceTag;
