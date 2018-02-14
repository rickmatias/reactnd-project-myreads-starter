import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchBooksBar = (props) => {
  const {query} = props.query;

  const updateQuery = (q) => {
    props.onUpdateQuery(q);
  }

  return(
    <div className="search-books-bar">
      <Link to='/' className="close-search">Close</Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          value={query}
          onChange={(e) => updateQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

SearchBooksBar.propTypes = {
  onUpdateQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
}

export default SearchBooksBar;