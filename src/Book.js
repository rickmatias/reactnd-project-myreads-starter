import React from 'react';
import PropTypes from 'prop-types';
import BookSelector from './BookSelector';

const Book = (props) => {
  const book = props.book;

  const updateBookShelf = (shelfId) => {
    props.onChangeBookShelf(book, shelfId);
  }

  return(
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
          <BookSelector
            chosenCategory={book.shelf}
            onChangeBookShelf={(shelfId) => updateBookShelf(shelfId)}
          />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.author}</div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired
}
export default Book;
