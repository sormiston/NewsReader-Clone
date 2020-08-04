import React from 'react';
import { Route, Link } from 'react-router-dom'
import MainFeed from './MainFeed.js'
import ArticlePage from './ArticlePage'
import 'bulma/css/bulma.css'

function App() {
  // Fake user Login - friend of mine
  localStorage.setItem('name', 'Guadalupe')
  localStorage.setItem('profile', 'https://www.facebook.com/guadalupe.peraza.925?__tn__=%3Chttps://scontent-lga3-1.xx.fbcdn.net/v/t1.0-1/p480x480/101024330_10164188155135599_1823391583416877056_n.jpg?_nc_cat=103&_nc_sid=7206a8&_nc_ohc=0QXAxUwnlQoAX-NKA6A&_nc_oc=AQn2agWQh1hAf-9kR1i_53AeD2lPFaS3z5QOgCX6wzGaO-zdrId2HtrN1q8_o0gTd9Q&_nc_ht=scontent-lga3-1.xx&_nc_tp=6&oh=780f7d95e5f2bb05e1037e0a7ded7d4f&oe=5F4EF738')

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
