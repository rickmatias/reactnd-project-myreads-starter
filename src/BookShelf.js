import React, {Component} from 'react';
import BookGrid from './BookGrid';
import PropTypes from 'prop-types';

class BookShelf extends Component{
  static propTypes = {
    myBooks: PropTypes.array.isRequired,
    shelfCategory: PropTypes.object.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
  }

  render(){
    const {id, title} = this.props.shelfCategory;

    const properBooks =  this.props.myBooks.filter(
        (book) => book.shelf === id
    );

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BookGrid
            books={properBooks}
            onChangeBookShelf={this.props.onChangeBookShelf}
          />
        </div>
      </div>
    );
  }
}

export default BookShelf;