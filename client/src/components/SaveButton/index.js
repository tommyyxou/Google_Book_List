import React from 'react';
import "./style.css";

function Save(props) {

        return <button className="save-btn btn-success" onClick={() => props.saveBook(props)}>Save to Collection</button>
}

export default Save;