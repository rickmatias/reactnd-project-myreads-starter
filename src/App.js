import React from 'react';
import { Route } from 'react-router-dom';
import BookShelves from './BookShelves';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';


// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    allBooks: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((allBooks) => {
      console.log(allBooks);
      this.setState({allBooks});
    });
  }

  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => (
            <BookShelves allBooks={this.state.allBooks}/>
          )}/>
          <Route path='/search' render={() => (
            <SearchBooks allBooks={this.state.allBooks}/>
          )}/>
      </div>
    )
  }
}

export default BooksApp
