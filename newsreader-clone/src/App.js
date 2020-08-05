import React from 'react';
import { Route, Link } from 'react-router-dom'
import MainFeed from './MainFeed.js'
import ArticlePage from './ArticlePage'
import 'bulma/css/bulma.css'

function App() {

  localStorage.setItem('name', 'Claude Matthews')
  localStorage.setItem('profile', 'https://randomuser.me/api/portraits/men/67.jpg')

  return (
    <div className="App">
      <nav>
        <Link to="/" exact>Mydium</Link><span> searchIcon bookmarkIcon Notifications userProfile</span>
      </nav>
      <Route path="/" exact>
        <MainFeed />
      </Route>
      <Route path="/:id">
        <ArticlePage />
      </Route>
    </div>
  );
}

export default App;
