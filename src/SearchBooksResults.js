import PropTypes from 'prop-types';
import BookGrid from './BookGrid';
import React from 'react';

const SearchBooksResults = (props) => {
  return (
    <div className="search-books-results">
      {(props.searchResultBooks.length > 0) && (
        <span>Foram encontrado(s) {props.searchResultBooks.length} livro(s).</span>
      )}
      {(props.searchResultBooks.length === 0 && props.query !== '') && (
        <span>Não foi encontrado nenhum livro com a palavra chave '{props.query}'.</span>
      )}
      <BookGrid
        books={props.searchResultBooks}
        onChangeBookShelf={props.onChangeBookShelf}
      />
    </div>
  );
}
SearchBooksResults.propTypes = {
  searchResultBooks: PropTypes.array.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
}

export default SearchBooksResults;