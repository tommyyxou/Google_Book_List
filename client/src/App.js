import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import Search from './components/searchPage';
import SaveBookPage from './components/SaveBookPage'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          
            <Link to="/"><button className="btn btn-primary col-5">Search For you favorite books</button></Link>
            <Link to="/Save"><button className="btn btn-info col-5">Saved Book List</button></Link>
          
        </div>
        <div>
          <Route exact path="/" component={Search} />
          <Route exact path="/Save" component={SaveBookPage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
