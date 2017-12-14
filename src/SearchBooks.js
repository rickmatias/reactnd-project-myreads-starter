import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBooksBar from './SearchBooksBar'
import SearchBooksResults from './SearchBooksResults'
import PropTypes from 'prop-types';


class SearchBooks extends Component {
    static propTypes = {
        myBooks: PropTypes.array.isRequired
    }
    state = {
        searchResultBooks: []
    }

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
                console.log(res)
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
                    console.log(resultBooks)
                    this.setState({searchResultBooks: resultBooks})
                }
            })
        }
    }

    render(){
        const { searchResultBooks } = this.state

        return (
            <div className="search-books">
                <SearchBooksBar onUpdateQuery={(query) => this.updateSearchResultBooks(query)}/>
                <SearchBooksResults searchResultBooks={searchResultBooks} onChangeBookShelf={this.props.onChangeBookShelf}/>
            </div>
        )
    }
    
}

export default SearchBooks