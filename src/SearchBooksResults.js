import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookGrid from './BookGrid';

class SearchBooksResults extends Component{

  static propTypes = {
    searchResultBooks: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired,
    query: PropTypes.string
  }

  render(){
    const {searchResultBooks, query} = this.props;

    return(
      <div className="search-books-results">
        {(searchResultBooks.length > 0) && (
          <span>Foram encontrado(s) {searchResultBooks.length} livro(s).</span>
        )}
        {(searchResultBooks.length === 0 && query !== '') && (
          <span>Não foi encontrado nenhum livro com a palavra chave '{query}'.</span>
        )}
        <BookGrid
          books={searchResultBooks}
          onChangeBookShelf={this.props.onChangeBookShelf}
        />
      </div>
    );
  }
}

export default SearchBooksResults;