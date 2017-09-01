import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import { selectors, setSearchFilter, fetchSearchResults } from './reducer';

class SearchContainer extends Component {
  async componentDidMount() {
    const { results, getSearchResults, filter } = this.props;
    if (results.length === 0) {
      const data = await getSearchResults(filter);
    }
  }

  async componentDidUpdate(prevProps) {
    const { filter, getSearchResults } = this.props;
    if (filter !== prevProps.filter) {
      const data = await getSearchResults(filter);
      console.log(data);
    }
  }

  render() {
    return <Search {...this.props} />;
  }
}

const mapStateToProps = state => ({
  loading: selectors.isLoading(state.search),
  results: selectors.getSearchAds(state.search),
  filter: selectors.getSearchFilter(state.search)
});

const mapDispatchToProps = dispatch => ({
  getSearchResults: () => dispatch(fetchSearchResults()),
  onFilter: event => dispatch(setSearchFilter(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
