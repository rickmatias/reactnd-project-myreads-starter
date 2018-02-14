import React, {Component} from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class BookGrid extends Component{
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
  }

  render(){
    const books = this.props.books;

    return (
      <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <Book
              book={book}
              onChangeBookShelf={this.props.onChangeBookShelf}
            />
          </li>
        ))}
      </ol>
    );
  }
}

export default BookGrid;