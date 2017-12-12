import React, {Component} from 'react'
import BooksApp from './App'
import PropTypes from 'prop-types'


class BookSelector extends Component{
    static propTypes = {
        chosenCategory: PropTypes.string.isRequired
    }

    render(){
        return (
            <div className="book-shelf-changer">
                <select defaultValue={this.props.chosenCategory} onChange={()=> this.setState([])}>
                    <option value="none" disabled>Move to...</option>
                    {BooksApp.shelfCategories.map((shelfCategory) => (
                        <option key={shelfCategory.id}
                        value={shelfCategory.id}>
                        {shelfCategory.title}
                        </option>
                    ))}
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default BookSelector