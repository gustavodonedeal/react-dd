import React from 'react';
import styles from './Card.css';

const SearchInput = () => <input type="text" />;

const SearchButton = () => <button>Search</button>;

const SearchBar = () =>
  <div>
    <h2>Filters</h2>
    <span>Search</span>
    <SearchInput />
    <SearchButton />
  </div>;

const SearchResult = () =>
  <div className={styles.card}>
    <img />
    <h3>Vroom</h3>
    <span>16 days | Tipp</span>
    <h4>Expensive</h4>
  </div>;

const SearchResults = ({ results }) =>
  <div>
    <h2>Cars</h2>
    <div>
      {results.map(result => <SearchResult {...result} />)}
    </div>
  </div>;

const Search = ({ results }) =>
  <div>
    <SearchBar />
    <SearchResults results={results} />
  </div>;

export default Search;
