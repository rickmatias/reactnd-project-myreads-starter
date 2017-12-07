import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

class BookShelves extends Component{
    static propTypes = {
        allBooks: PropTypes.array.isRequired,
        shelfCategories: PropTypes.array.isRequired
    }
    render(){

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {this.props.shelfCategories.map((category) => (
                            <BookShelf key={category.id} allBooks={this.props.allBooks} shelfCategory={category}/>      
                        ))} 
                    </div>
                </div>
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
        );
    }
}

export default BookShelves;
