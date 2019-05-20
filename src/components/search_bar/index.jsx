import React, { Component, Fragment } from 'react';
import './search.scss';

class SearchBar extends Component {
  render() {
    return (
      <Fragment>
        <form>
          <input placeholder='Search' className='search'/>
        </form>
      </Fragment>
    );
  }
}
export default SearchBar;