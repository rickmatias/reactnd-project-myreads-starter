import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchBooksBar extends Component{
  static propTypes = {
    onUpdateQuery: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired
  }

  updateQuery = (query) => {
    this.props.onUpdateQuery(query);
  }

  render(){
    const {query} = this.props.query;

    return(
      <div className="search-books-bar">
        <Link to='/' className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(e) => this.updateQuery(e.target.value)}
          />
        </div>
      </div>
    );
 }
}

export default SearchBooksBar;