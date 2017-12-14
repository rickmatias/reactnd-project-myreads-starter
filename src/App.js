import React from 'react'
import { Route } from 'react-router-dom'
import BookShelves from './BookShelves'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksApp extends React.Component {
  state = {
    myBookss: []
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
    BooksAPI.getAll().then((myBookss) => {
      this.setState({myBookss})
    })
  }

  removeBook(bookId){
     const updatedBooks = this.state.myBookss.filter((book) => book.id !== bookId)
     this.setState({myBookss: updatedBooks})
  }

  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => (
            <BookShelves myBookss={this.state.myBookss} onChangeBookShelf={(book, shelfId) => this.updateBookShelf(book, shelfId)}/>
          )}/>
          <Route path='/search' render={() => (
            <SearchBooks myBookss={this.state.myBookss} onChangeBookShelf={(book, shelfId) => this.updateBookShelf(book, shelfId)}/>
          )}/>
      </div>
    )
  }
}

export default BooksApp