import React from 'react';

class Filters extends React.Component{

  constructor(){
    super();
    this.runFilters = this.runFilters.bind(this);
  }

  runFilters(event) {
    event.preventDefault();
    const filter = {
      words: this.word.value
    }
    this.props.updateAds(filter);
  }

  render(){
    return (
      <div>
        <form ref={(form) => this.filterForm = form} onSubmit={(e) => this.runFilters(e)}>
          <h2>Filters</h2>
          <p>
            Search: <input type="text" ref={(input) => this.word = input} /> <button type="submit">Search</button>
          </p>

        </form>
      </div>
    )
  }
}

export default Filters;
