import React from 'react'
import { Route } from 'react-router-dom'
import BookShelves from './BookShelves'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    allBooks: []
  }

  static shelfCategories = [
    {id: "wantToRead", title: "Want to Read"}, 
    {id: "currentlyReading", title: "Currently Reading"}, 
    {id: "read", title: "Read"}
  ]

  

  componentDidMount(){
    BooksAPI.getAll().then((allBooks) => {
      this.setState({allBooks})
    })
  }

  updateBookShelf(bookUpdated, shelfId){
    BooksAPI.update(bookUpdated, shelfId).then((allUpdatedBooks) => {
      if(allUpdatedBooks[shelfId].indexOf(bookUpdated.id) >= 0){
        this.setState({
          allBooks: this.state.allBooks.map((book) => {
          if(book.id === bookUpdated.id){
            book.shelf = shelfId
          }
          return book
        })})
      }
    })
  }
        


  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => (
            <BookShelves allBooks={this.state.allBooks} onChangeBookShelf={(book, shelfId) => this.updateBookShelf(book, shelfId)}/>
          )}/>
          <Route path='/search' render={() => (
            <SearchBooks allBooks={this.state.allBooks}/>
          )}/>
      </div>
    )
  }
}

export default BooksApp