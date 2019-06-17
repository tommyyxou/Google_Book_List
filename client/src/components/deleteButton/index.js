import React from 'react';
// import "./style.css"

function Delete(props) {

        return <button className="save-btn btn-success" onClick={() => props.deleteBook(props)}>Delete</button>
}

export default Delete;