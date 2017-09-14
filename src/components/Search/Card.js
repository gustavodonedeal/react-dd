import React from 'react';
import cardStyles from './Card.css';
import { Link } from 'react-router-dom';

const CurrencySign = ({ currency }) => {
  switch (currency) {
    case 'EUR':
    default:
      return <span>€</span>;
  }
};

const Price = ({ currency, children }) => (
  <div>
    <CurrencySign currency={currency} /> {children}
  </div>
);

const Card = ({ header, age, county, price, currency, photos, id }) => (
  <Link to={`/ad/${id}`} className={cardStyles.cardContainer}>
    <img src={photos ? photos[0].large : ''} className={cardStyles.cardImage} />
    <h3 className={cardStyles.cardHeader}>{header}</h3>
    <div className={cardStyles.cardInfo}>{`${age} | ${county}`}</div>
    <h4 className={cardStyles.price}>
      <Price currency={currency}>{price}</Price>
    </h4>
  </Link>
);

export default Card;
