import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Book extends Component{
    static propTypes = {
        book: PropTypes.Object
      }
    render(){
        const book = this.props.book;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.backgroundImage}}></div>
                    <BookSelector/>
                </div>
                <div className="book-title">${book.title}</div>
                <div className="book-authors">${book.author}</div>
        </div>
        );
    }
}
