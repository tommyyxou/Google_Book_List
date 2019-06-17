import React, { Component } from 'react';
import API from "../../utils/API";
import SavedCard from '../SavedCard';

// Destructuring the type, className, children and onClick props, applying them to the button element

class SaveBook extends Component{
    state = {
        books: [],
      };
    
    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        console.log ("load book")
        API.getBooks()
          .then(res => this.setState({ books: res.data }))
          .catch(err => console.log(err));
      };

    render () {
        return (
            <div>
                {this.state.books.map((book, index)  => (
                    <SavedCard key={index} book={book} reload={this.loadBooks}/>
                ))}
            </div>
        );
    }
}

export default SaveBook;