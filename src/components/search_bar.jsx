import React, { Component } from 'react';

class SearchBar extends Component {
  handleSearch = (event) => {
    // console.log(event.target.value)
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <div>
        <input onChange={this.handleSearch} className="form-search" type="text" placeholder="Search here..." />
      </div>
      )
  }
}

export default SearchBar;
