import React from 'react';
import { Link } from 'react-router-dom';
import PriceTag from './PriceTag';

class Card extends React.Component{

  render(){
    const ad = this.props.ad;

    let adPhoto = (ad.photos && ad.photos.length > 0 ? ad.photos[0].small2 : undefined);

    return (

        <li className="card-item">
          <Link className="card__link" to={`/ad/${ad.id}`}>
            <div className="card">
              <div className="card__media">
                <div className="card__photo">
                  <img src={adPhoto} alt={ad.header} />
                </div>
                <div className="card__media-count">
                  <i className="icon-camera"></i>
                  1/{ad.mediaCount}
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
                  <PriceTag ad={ad}/>

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
