import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookSelector from './BookSelector';

class Book extends Component{
  static propTypes = {
    book: PropTypes.object.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
  }
    
  updateBookShelf(shelfId){
    this.props.onChangeBookShelf(this.props.book, shelfId)
  }
    
  render(){
    const book = this.props.book;
        
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
            <BookSelector 
              chosenCategory={book.shelf}
              onChangeBookShelf={(shelfId) => this.updateBookShelf(shelfId)}
            />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}</div>
      </div>
    )
  }
}

export default Book
