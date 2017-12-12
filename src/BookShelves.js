import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import {Link} from 'react-router-dom';
import BooksApp from './App';

class BookShelves extends Component{
    static propTypes = {
        allBooks: PropTypes.array.isRequired
    }
    render(){

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {BooksApp.shelfCategories.map((category) => (
                            <BookShelf key={category.id} 
                            allBooks={this.props.allBooks} 
                            shelfCategory={category} 
                            shelfCategories={this.props.shelfCategories}/>      
                        ))} 
                    </div>
                </div>
                <div className="open-search">
                <Link to='/search'>Add a book</Link>
                </div>
            </div>
        );
    }
}

export default BookShelves;
