import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBooksBar from './SearchBooksBar'
import SearchBooksResults from './SearchBooksResults'
import PropTypes from 'prop-types';


class SearchBooks extends Component {
  static propTypes = {
    myBooks: PropTypes.array.isRequired
    //TODO: adicionar onChangeBookShelf
  }
  state = {
    searchResultBooks: []
  }

  /*
  This method returns the shelfId of a book by giving it the book id. It is
  necessary because when we search a book, the server do not return its shelf.
  We must check by the array of all books in the App. 
  */
  getBookShelfById(bookId){
    let shelf = 'none'

    this.props.myBooks.forEach(book => {
      if(book.id === bookId){
        shelf = book.shelf
      }
    })

    return shelf
  }

  updateSearchResultBooks(query){
    if(query){
      BooksAPI.search(query).then((res) => {
        if(res.length > 0){
          const resultBooks = res.map((book) => {
            let thumbnail = ''
            if(book.imageLinks){
                thumbnail = book.imageLinks.thumbnail
            }
            return ({
              id: book.id, 
              title: book.title, 
              author: book.author, 
              shelf: this.getBookShelfById(book.id),
              imageLinks: {thumbnail}
            })
          })
          this.setState({searchResultBooks: resultBooks})
        }
      })
    }
  }

  render(){
    const { searchResultBooks } = this.state

    return (
      <div className="search-books">
        <SearchBooksBar 
          onUpdateQuery={(query) => this.updateSearchResultBooks(query)}
        />
        <SearchBooksResults 
          searchResultBooks={searchResultBooks} 
          onChangeBookShelf={this.props.onChangeBookShelf}
        />
      </div>
    )
  }
}

export default SearchBooks