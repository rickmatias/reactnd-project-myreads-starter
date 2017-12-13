import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Book from './Book'

class SearchBooksResults extends Component{

    static propTypes = {
        searchResultBooks: PropTypes.array.isRequired
    }

    render(){
        const {searchResultBooks} = this.props

        return(
<           div className="search-books-results">
                {searchResultBooks.length > 0 && (
                <span>Foram encontrado(s) {searchResultBooks.length} livro(s)</span>
                )}
                <ol className="books-grid">
                    {searchResultBooks.map((book) => (
                        <li key={book.id}>
                            <Book
                            book={book}
                            shelfCategories={book.shelf}
                            onChangeBookShelf={this.props.onChangeBookShelf}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        )
        
    }
}
                
export default SearchBooksResults   