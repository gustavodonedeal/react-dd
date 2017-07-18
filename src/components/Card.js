import React from 'react';
import { Link } from 'react-router-dom';
import MediaPreview from './MediaPreview';
import PriceTag from './PriceTag';

class Card extends React.Component{

  render(){
    const ad = this.props.ad;

    return (
        <li className="card-item">
          <Link className="card__link" to={`/ad/${ad.id}`}>
            <div className="card">
              <MediaPreview ad={ad} />
              <div className="card__body">
                <div className="card__body-top">
                  <p className="card__body-title">{ad.header}</p>
                  <ul className="card__body-keyinfo">
                    <li>{ad.age}</li>
                    <li>{ad.county}</li>
                  </ul>
                </div>
                <div className="card__body-lower">
                  <PriceTag ad={ad} />
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
