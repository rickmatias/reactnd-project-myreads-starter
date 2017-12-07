import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

class BookShelves extends Component{
    static propTypes = {
        allBooks: PropTypes.array.isRequired
    }
    render(){
        return (
            <BookShelf allBooks={this.props.allBooks} shelfCategory="wantToRead"/>
        );
    }
}

export default BookShelves;
