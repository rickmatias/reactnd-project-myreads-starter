import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import {Link} from 'react-router-dom';
import BooksApp from './App';

const Bookcase = (props) => {
  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {BooksApp.shelfCategories.map((category) => (
            <BookShelf key={category.id}
              myBooks={props.myBooks}
              shelfCategory={category}
              onChangeBookShelf={props.onChangeBookShelf}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  );
}

Bookcase.propTypes = {
  myBooks: PropTypes.array.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired
}

export default Bookcase;
