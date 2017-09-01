import React from 'react';
import { compose, branch, renderComponent } from 'recompose';
import Card from './Card';
import searchStyles from './Search.css';

const SearchInput = ({ onFilter, filterValue }) => (
  <input onChange={onFilter} value={filterValue} type="text" />
);

const SearchButton = () => (
  <button className={searchStyles.searchButton}>Search</button>
);

const SearchBar = ({ onFilter, filterValue }) => (
  <div>
    <h2>Filters</h2>
    <div className={searchStyles.searchBar}>
      <label className={searchStyles.searchLabel}>Search</label>
      <SearchInput onFilter={onFilter} filterValue={filterValue} />
      <SearchButton />
    </div>
  </div>
);

const Loading = () => <h2>Loading...</h2>;
const NoResults = () => <h2>No results found. 😾</h2>;
const isLoading = ({ loading }) => loading;
const hasNoResults = ({ results }) => results.length === 0;

const withLoadingIndicator = branch(isLoading, renderComponent(Loading));
const withNoResultsFound = branch(hasNoResults, renderComponent(NoResults));

const ResultsList = withNoResultsFound(({ results }) => (
  <div className={searchStyles.cardList}>
    {results.map(result => <Card {...result} key={result.id} />)}
  </div>
));

const SearchResults = withLoadingIndicator(({ results }) => (
  <div>
    <h2>Cars</h2>
    <ResultsList results={results} />
  </div>
));

const Search = ({ results, onFilter, filter, loading }) => (
  <div>
    <SearchBar onFilter={onFilter} filterValue={filter} />
    <SearchResults results={results} loading={loading} />
  </div>
);

export default Search;
