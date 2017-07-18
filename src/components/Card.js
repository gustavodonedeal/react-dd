import React from 'react';
import history from '../history';
import { Link } from 'react-router-dom';

class Card extends React.Component{

  render(){

    const injectHTML = (markup) =>{
      return {__html: markup};
    };

    const ad = this.props.ad;
    let cardPrice;
    let price;
    let currencySymbolMarkup;
    let adPhoto = (ad.photos && ad.photos.length > 0 ? ad.photos[0].small2 : undefined);
    if(typeof ad.nativeAdParameters === 'undefined'){
      currencySymbolMarkup = (typeof ad.price !== 'undefined' && ad.price !== '') ? (ad.currency === 'GBP' ? '&#163;' : '&#128;') : 'No Price';
      if(ad.wanted === true){
        price = <span>WANTED</span>
      } else{
        price = <span>
          <span dangerouslySetInnerHTML={injectHTML(currencySymbolMarkup)}></span>
          {(typeof ad.price !== 'undefined' && ad.price !== '') ? ad.price : ''}</span>;
      }
      cardPrice = <p className={'card__price' + (ad.wanted === true ? ' card__price--wanted' : '')}>{price}</p>
    }

    return (

        <li className="card-item">
          <Link className="card__link" to={`/ad/${ad.id}`}>
            <div className="card">
              <div className="card__media">
                <div className="card__photo">
                  <img src={adPhoto}/>
                </div>
                <div className="card__media-count">
                  <i className="icon-camera"></i>
                  1/8
                </div>
              </div>
              <div className="card__body">
                <div className="card__body-top">
                  <p className="card__body-title">{ad.header}</p>
                  <ul className="card__body-keyinfo">
                    <li>{ad.age}</li>
                    <li>{ad.county}</li>
                  </ul>
                </div>
                <div className="card__body-lower">
                  {cardPrice}

                  <div className="card__actions">
                    <i className="manual-false-page card-actions__save icon icon-save-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </li>
    )
  }
}

export default Card;
