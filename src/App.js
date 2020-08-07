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
      <nav className="site-header">
        <Link className="root" to="/" exact>Mydiem</Link>
        <span className="site-header-right"><i className="fa fa-search"></i><i className="fa fa-bookmark-o"></i><i className="fa fa-bell"></i><img src={localStorage.getItem('profile')} width="32px" style={{ borderRadius: '50%' }} /></span>
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
