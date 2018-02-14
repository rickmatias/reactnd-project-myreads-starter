import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const BookGrid = (props) => {
  const books = props.books;
  return(
    <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <Book
              book={book}
              onChangeBookShelf={props.onChangeBookShelf}
            />
          </li>
        ))}
      </ol>
  );
}

BookGrid.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired
}

export default BookGrid;