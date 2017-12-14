import React, {Component} from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class BookShelf extends Component{
    static propTypes = {
        myBooks: PropTypes.array.isRequired,
        shelfCategory: PropTypes.object.isRequired,
        onChangeBookShelf: PropTypes.func.isRequired
    }

    render(){
        const categoryId = this.props.shelfCategory.id;
        const categoryTitle = this.props.shelfCategory.title;
        
        const myBooks = this.props.myBooks;
        const properBooks =  myBooks.filter((book) => book.shelf === categoryId);
        
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{categoryTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {properBooks.map((book) => (
                            <li key={book.id}>
                                <Book 
                                book={book} 
                                onChangeBookShelf={this.props.onChangeBookShelf}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookShelf;