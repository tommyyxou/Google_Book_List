import React, { Component } from 'react';
import API from "../../utils/API";
import "./style.css"

class SavedCard extends Component {

    deleteBook(props) {
        API.deleteBook(props.id)
        alert("Book Deleted ID:" + props.id)
    }

    render () {
    
    let book = this.props.book;
    let authors = "";
    let image = "";
    if (book.image !== undefined) {
        image = book.image.thumbnail
    } else { image = "http://www.iconarchive.com/download/i99376/dtafalonso/android-lollipop/Play-Books.ico"};
    
    let infoLink = book.link
    if (book.authors !== undefined && book.authors.length >= 1) {
        for (let i = 0; i < book.authors.length; i++ ) {
            if (i === 0) {
                authors = book.authors[i]
            } else {
                authors = authors + ", " + book.authors[i]  
            }
        }
    }
        return(
            <div className="savedCard col-11">
                <div className="row">
                <img src={image} alt="Book Cover" className="col-2 image"/>
                <div className="col-9">
                    <h3>Book Title: {book.title}</h3>
                    <h5>Author: </h5><span>{authors}</span>
                    <h5>Description: </h5>
                    <p>{book.description}</p>
                    <a href={infoLink} target="_blank" rel="noopener noreferrer"> View in Google Book </a> 
                </div>
                </div>
            </div>  
        );
    }
};

export default SavedCard;