import React from 'react';
import { Route } from 'react-router-dom';
import MainFeed from './MainFeed.js';
import ArticlePage from './ArticlePage';
import 'bulma/css/bulma.css';

function App() {
  localStorage.setItem('name', 'Claude Matthews');
  localStorage.setItem('profile', 'https://randomuser.me/api/portraits/men/67.jpg');

  return (
    <>
      <Route path='/' exact>
        <MainFeed />
      </Route>
      <Route path='/:id'>
        <ArticlePage />
      </Route>
    </>
  );
}

export default App;
