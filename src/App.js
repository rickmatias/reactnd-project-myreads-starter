import React from 'react';
import { Route } from 'react-router-dom';
import ShelfBooks from './ShelfBooks';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';


// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    shelfBooks: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((shelfBooks) => {
      this.setState({shelfBooks});

      console.log(shelfBooks);
    });
  }

  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => (
            <ShelfBooks shelfBooks={this.state.shelfBooks}/>
          )}/>
          <Route path='/search' render={() => (
            <SearchBooks shelfBooks={this.state.shelfBooks}/>
          )}/>
      </div>
    )
  }
}

export default BooksApp
