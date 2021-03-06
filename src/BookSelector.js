import React from 'react';
import BooksApp from './App';
import PropTypes from 'prop-types';


const BookSelector = (props) => {
  return (
    <div className="book-shelf-changer">
      <select defaultValue={props.chosenCategory}
        onChange={(e) => props.onChangeBookShelf(e.target.value)}>
        <option value="none" disabled>Move to...</option>
        {BooksApp.shelfCategories.map((shelfCategory) => (
          <option
            key={shelfCategory.id}
            value={shelfCategory.id}>
            {shelfCategory.title}
          </option>
        ))}
        <option value="none">None</option>
      </select>
    </div>
  );
}

BookSelector.propTypes = {
  chosenCategory: PropTypes.string.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired
}

export default BookSelector;