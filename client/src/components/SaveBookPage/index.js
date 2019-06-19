import React, { Component } from 'react';
import API from "../../utils/API";
import SavedCard from '../SavedCard';
import DeleteButton from '../deleteButton'

// Destructuring the type, className, children and onClick props, applying them to the button element

class SaveBook extends Component{
    state = {
        books: [],
      };
    
    deleteBook = (props) => {
    
        API.deleteBook(props.id).then(() =>
            this.loadBooks()
        )    
    };

    componentDidMount() {
        this.loadBooks();
    };

    loadBooks = () => {
        console.log ("load book")
        API.getBooks()
          .then(res => this.setState({ books: res.data }))
          .catch(err => console.log(err));
      };

    render () {
        return (
            <div className="container">
                {this.state.books.map((book, index)  => (
                    <div key={index} className="row">
                        <SavedCard book={book} reload={this.loadBooks}/>
                        <DeleteButton id={book._id} deleteBook={this.deleteBook}/>
                    </div>
                ))}
            </div>
        );
    }
}

export default SaveBook;