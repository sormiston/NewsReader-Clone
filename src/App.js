import React from 'react'
import { Route } from 'react-router-dom'
import MainFeed from './MainFeed.js'
import ArticlePage from './ArticlePage'
import Nav from './Layout.js'
import 'bulma/css/bulma.css'

function App() {
  localStorage.setItem('name', 'Claude Matthews')
  localStorage.setItem(
    'profile',
    'https://randomuser.me/api/portraits/men/67.jpg'
  )

  return (
    <>
      {/* // <Nav> */}
      <Route path='/' exact>
        <MainFeed />
      </Route>
      <Route path='/:id'>
        <ArticlePage />
      </Route>
      {/* </Nav> */}
    </>
  )
}

export default App
