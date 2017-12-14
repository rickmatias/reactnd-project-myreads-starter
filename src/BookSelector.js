import React, {Component} from 'react'
import BooksApp from './App'
import PropTypes from 'prop-types'


class BookSelector extends Component{
  static propTypes = {
    chosenCategory: PropTypes.string.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
  }

  render(){
    return (
      <div className="book-shelf-changer">
        <select defaultValue={this.props.chosenCategory} onChange={(e) => this.props.onChangeBookShelf(e.target.value)}>
          <option value="none" disabled>Move to...</option>
          {BooksApp.shelfCategories.map((shelfCategory) => (
            <option
            //TODO: REMOVE LINE
              key={shelfCategory.id}
              value={shelfCategory.id}>
              {shelfCategory.title}
            </option>
          ))}
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookSelector