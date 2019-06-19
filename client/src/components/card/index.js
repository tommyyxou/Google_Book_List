import React, { Component } from 'react';
import Save from "../SaveButton";
import API from "../../utils/API";
import "./style.css"

class Card extends Component {
    saveBook(props) {
        //console.log (props)
        API.saveBook({

            title: props.title,
            authors: props.authors,
            description: props.description,
            image: props.image,
            link: props.link
            
        })
        alert("Book Saved")
    }
    render () {
        
    let book = this.props.book;
    
    let authors = "";
    let image = "";
    let description = "";
    if (book.volumeInfo.description) {
        description = book.volumeInfo.description.slice(0,301) + "... ...";
    } else {
        description = "No Description available"
    }

    if (book.volumeInfo.imageLinks !== undefined) {
        image = book.volumeInfo.imageLinks.thumbnail
    } else { image = "http://www.iconarchive.com/download/i99376/dtafalonso/android-lollipop/Play-Books.ico"};
    
    let infoLink = book.volumeInfo.infoLink
    if (book.volumeInfo.authors !== undefined && book.volumeInfo.authors.length >= 1) {
        for (let i = 0; i < book.volumeInfo.authors.length; i++ ) {
            if (i === 0) {
                authors = book.volumeInfo.authors[i]
            } else {
                authors = authors + ", " + book.volumeInfo.authors[i]  
            };
        };
    };

    

    // console.log (book.volumeInfo)
    
        return(
            <div className="card">
                <div className="row">
                    <img src={image} alt="Book Cover" className="col-2 image" />
                    <div className="col-10">
                        <h3>{book.volumeInfo.title}</h3>
                        <h5>Author: {authors}</h5>
                        <h5>Description: {description}</h5>
                        <a href={infoLink} target="_blank" rel="noopener noreferrer"> View in Google Book </a> 
                        <Save 
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                        image={book.volumeInfo.imageLinks}
                        link={book.volumeInfo.infoLink}
                        saveBook={this.saveBook}/>
                    </div>
                </div>
            </div>
        );
    }
};

export default Card;