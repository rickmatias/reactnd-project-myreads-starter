import React from 'react';
import { Route } from 'react-router-dom';
import Bookcase from './Bookcase';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';


class BooksApp extends React.Component {
  state = {
    myBooks: []
  }

  /*
  Here you can specify all possible categories for the shelves as objects
  containing a id and a title
  */
  static shelfCategories = [
    {id: "wantToRead", title: "Want to Read"},
    {id: "currentlyReading", title: "Currently Reading"},
    {id: "read", title: "Read"}
  ]

  componentDidMount(){
    this.refreshAllBooks();
  }

  updateBookShelf(bookUpdated, shelfId){
    BooksAPI.update(bookUpdated, shelfId).then(() => this.refreshAllBooks());
  }

  /*
  Here I decided to get all books from the server every time I update a book from shelf
  because I thing it's safier and more practical.
  DOUBT: is this a bad practise? Should I manipulate the array of books already in the App?
  */
  refreshAllBooks(){
    BooksAPI.getAll().then(myBooks => this.setState({myBooks}));
  }

  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => (
            <Bookcase myBooks={this.state.myBooks} onChangeBookShelf={(book, shelfId) => this.updateBookShelf(book, shelfId)}/>
          )}/>
          <Route path='/search' render={() => (
            <SearchBooks myBooks={this.state.myBooks} onChangeBookShelf={(book, shelfId) => this.updateBookShelf(book, shelfId)}/>
          )}/>
      </div>
    );
  }
}

export default BooksApp;