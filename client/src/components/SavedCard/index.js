import React, { Component } from 'react';

class SavedCard extends Component {
    
    

    render () {
    console.log (this.props)
    

    // console.log (book.volumeInfo)
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
            <div style={{margin:'10px'}}>
                <h3>{book.title}</h3>
                <p>Author: {authors}</p>
                <img src={image} alt="Book Cover"/>
                <a href={infoLink} target="_blank" rel="noopener noreferrer"> View in Google Book </a> 

            </div>
        );
    }
};

export default SavedCard;