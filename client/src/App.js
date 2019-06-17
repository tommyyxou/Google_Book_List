import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import Search from './components/searchPage';
import SaveBookPage from './components/SaveBookPage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <div>
        <ul>
          <li><Link to="/">Search</Link></li>
          <li><Link to="/Save">Save</Link></li>
        </ul>
      </div>
      <div>
        <Route exact path="/" component={Search} />
        <Route exact path="/Save" component={SaveBookPage} />
      </div>
    </Router>
      </header>
    </div>
  );
}

export default App;
