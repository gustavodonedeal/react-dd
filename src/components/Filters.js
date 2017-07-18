import React from 'react';

class Filters extends React.Component{

  constructor(){
    super();
    this.runFilters = this.runFilters.bind(this);
  }

  runFilters(e) {
    e.preventDefault();
    const filter = {
      word: this.word.value
    }
    this.props.updateAds(filter);
  }

  render(){
    return (
      <form ref={(form) => this.filterForm = form} onSubmit={(e) => this.runFilters(e)}>
        <h2>Filters</h2>
        <p>
          Search: <input type="text" ref={(input) => this.word = input} />
        </p>
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default Filters;
