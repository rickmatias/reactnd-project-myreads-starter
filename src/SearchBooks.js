import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';


class SearchBooks extends Component {
  constructor(props){
    super(props);
    this.updateSearchResultBooks = debounce(this.updateSearchResultBooks, 400);
  }
  static propTypes = {
    myBooks: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
  }
  state = {
    searchResultBooks: [],
    query: ''
  }

  /*
  This method returns the shelfId of a book by giving it the book id. It is
  necessary because when we search a book, the server do not return its shelf.
  We must check by the array of all books in the App.
  */
  getBookShelfById(bookId){
    let shelf = 'none';

    this.props.myBooks.forEach(book => {
      if(book.id === bookId){
        shelf = book.shelf;
      }
    })

    return shelf;
  }

  updateSearchResultBooks(query){
    if(query){
      BooksAPI.search(query).then((res) => {
        console.log(res.error);
        if(res.length > 0){
          const resultBooks = res.map((book) => {
            let thumbnail = '';
            if(book.imageLinks){
                thumbnail = book.imageLinks.thumbnail;
            }
            return ({
              id: book.id,
              title: book.title,
              author: book.author,
              shelf: this.getBookShelfById(book.id),
              imageLinks: {thumbnail}
            });
          })
          this.setState({searchResultBooks: resultBooks});
        }else if(res.error){
           this.setState({searchResultBooks: [], query: query});
        }
      });
    }else{
      this.setState({searchResultBooks: [], query: query});
    }
  }

  render(){
    const { searchResultBooks } = this.state;

    return (
      <div className="search-books">
        <SearchBooksBar
          query={this.state.query}
          onUpdateQuery={(query) => this.updateSearchResultBooks(query)}
        />
        <SearchBooksResults
          query={this.state.query}
          searchResultBooks={searchResultBooks}
          onChangeBookShelf={this.props.onChangeBookShelf}
        />
      </div>
    );
  }
}

export default SearchBooks;