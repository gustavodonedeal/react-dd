import React from 'react';
import cardStyles from './Card.css';
import searchStyles from './Search.css';

const SearchInput = ({onFilter}) => <input onChange={onFilter} type="text"/>;

const SearchButton = () => <button className={searchStyles.searchButton}>Search</button>;

const SearchBar = ({onFilter}) => <div>
  <h2>Filters</h2>
  <div className={searchStyles.searchBar}>
    <label className={searchStyles.searchLabel}>Search</label>
    <SearchInput onFilter={onFilter}/>
    <SearchButton/>
  </div>
</div>;

const CurrencySign = ({currency}) => {
  switch (currency) {
    case 'EUR':
    default:
      return <span>€</span>;
  }
}

const Price = ({currency, children}) => (
  <div>
    <CurrencySign currency={currency}/> {children}
  </div>
);

const SearchResult = ({
  header,
  age,
  county,
  price,
  currency,
  photos
}) => (
  <div className={cardStyles.cardContainer}>
    <img
      src={photos
      ? photos[0].large
      : ''}
      className={cardStyles.cardImage}/>
    <h3 className={cardStyles.cardHeader}>{header}</h3>
    <div className={cardStyles.cardInfo}>{`${age} | ${county}`}</div>
    <h4 className={cardStyles.price}>
      <Price currency={currency}>{price}</Price>
    </h4>
  </div>
);

const SearchResults = ({results}) => (
  <div>
    <h2>Cars</h2>
    <div className={searchStyles.cardList}>
      {results.length > 0
        ? results.map(result => <SearchResult {...result}/>)
        : <h2>No results found. 🙈</h2>}
    </div>
  </div>
);

const Search = ({results, onFilter}) => (
  <div>
    <SearchBar onFilter={onFilter}/>
    <SearchResults results={results}/>
  </div>
);

export default Search;
