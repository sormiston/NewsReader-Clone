import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import MainFeed from './MainFeed.js'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" exact>Mydium</Link> 
      </nav>
      <Route path="/" exact>
        <MainFeed />
      </Route>
    </div>
  );
}

export default App;
