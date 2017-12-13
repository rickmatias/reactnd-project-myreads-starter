import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBooksBar from './SearchBooksBar'
import SearchBooksResults from './SearchBooksResults'
import PropTypes from 'prop-types';


class SearchBooks extends Component {
    static propTypes = {
        allBooks: PropTypes.array.isRequired
    }
    state = {
        searchResultBooks: []
    }

    getBookShelfById(bookId){
        let shelf = 'None'

        this.props.allBooks.forEach(book => {
            if(book.id === bookId){
                shelf = book.shelf
            }
        })

        return shelf
    }
    
    updateSearchResultBooks(query){
        BooksAPI.search(query).then((res) => {

            const resultBooks = res.map((book) => {
                return ({
                    id: book.id, 
                    title: book.title, 
                    author: book.author, 
                    shelf: this.getBookShelfById(book.id),
                    imageLinks: {thumbnail: book.imageLinks.thumbnail}
                })
            })
            console.log(resultBooks)
            this.setState({searchResultBooks: resultBooks})
        })
    }

    render(){
        const {searchResultBooks } = this.state

        return (
            <div className="search-books">
                <SearchBooksBar onUpdateQuery={(query) => this.updateSearchResultBooks(query)}/>
                <SearchBooksResults searchResultBooks={searchResultBooks} onChangeBookShelf={this.props.onChangeBookShelf}/>
            </div>
        )
    }
    
}

export default SearchBooks