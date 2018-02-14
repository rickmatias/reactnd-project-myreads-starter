import React from 'react';
import BookGrid from './BookGrid';
import PropTypes from 'prop-types';

const BookShelf = (props) => {
  const {id, title} = props.shelfCategory;
  const properBooks =  props.myBooks.filter(
      (book) => book.shelf === id
  );
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BookGrid
          books={properBooks}
          onChangeBookShelf={props.onChangeBookShelf}
        />
      </div>
    </div>
  );
}

BookShelf.propTypes = {
  myBooks: PropTypes.array.isRequired,
  shelfCategory: PropTypes.object.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired
}

export default BookShelf;