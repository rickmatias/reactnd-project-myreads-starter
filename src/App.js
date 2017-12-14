import React from 'react'
import { Route } from 'react-router-dom'
import BookShelves from './BookShelves'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksApp extends React.Component {
  state = {
    myBooks: []
  }

  static shelfCategories = [
    {id: "wantToRead", title: "Want to Read"}, 
    {id: "currentlyReading", title: "Currently Reading"}, 
    {id: "read", title: "Read"}
  ]

  

  componentDidMount(){
    this.refreshAllBooks()
  }

  updateBookShelf(bookUpdated, shelfId){
    BooksAPI.update(bookUpdated, shelfId).then(() => this.refreshAllBooks())
  }
  
  refreshAllBooks(){
    BooksAPI.getAll().then((myBooks) => {
      this.setState({myBooks})
    })
  }

  removeBook(bookId){
     const updatedBooks = this.state.myBooks.filter((book) => book.id !== bookId)
     this.setState({myBooks: updatedBooks})
  }

  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => (
            <BookShelves myBooks={this.state.myBooks} onChangeBookShelf={(book, shelfId) => this.updateBookShelf(book, shelfId)}/>
          )}/>
          <Route path='/search' render={() => (
            <SearchBooks myBooks={this.state.myBooks} onChangeBookShelf={(book, shelfId) => this.updateBookShelf(book, shelfId)}/>
          )}/>
      </div>
    )
  }
}

export default BooksApp