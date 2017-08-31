import React from 'react';
import {connect} from 'react-redux';
import Search from './Search';
import {selectors, fetchSearchResults} from './reducer';

const mapStateToProps = state => ({
  results: selectors.getSearchAds(state.search)
});

const mapDispatchToProps = dispatch => ({
  onFilter: event => dispatch(fetchSearchResults(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
