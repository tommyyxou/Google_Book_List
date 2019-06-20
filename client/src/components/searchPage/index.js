import React, { Component } from 'react';
import Card from "../card/"


// Destructuring the type, className, children and onClick props, applying them to the button element

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            query: '',
            items: [],
            lastQuery: ''
        };
    }
    search(){
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
        fetch(`${BASE_URL}${this.state.query}`, {method: 'GET'})
        .then(response => response.json())
        .then(json => {
            let {items} = json;
            this.setState({items});
            this.setState({lastQuery : this.state.query });
        });
    }

    render () {
        return (
            <div>
            <form>
                <input 
                    type = "text"
                    className="col-4"
                    placeholder = "Search for a book"
                    onChange = { event => this.setState({query: event.target.value})} 
                    onKeyPress = { event => {
                        if(event.key === "Enter"){
                            event.preventDefault(); 
                            event.stopPropagation(); 
                            this.search();
                        }
                        }}
                />
                <br/>
                <button className="btn btn-warning" type="button" onClick={()=> this.search()}>Submit</button> 

            </form>
                <p> 
                    Last Search Term:
                    {this.state.lastQuery}
                </p>
                <p> 
                    Book Results:
                </p>
                <div className="container"> 
                    
                    {this.state.items.map(book => (
                        <Card key={book.id} book={book}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default Search;