import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'

export default function MainFeed() {
  const { REACT_APP_BASE_URL, REACT_APP_AIRTABLE_API_KEY } = process.env
  const [articles, setArticles] = useState({})


  useEffect(() => {
    const apiCall = async () => {
      const res = await axios(`${REACT_APP_BASE_URL}Content/?view=Grid%20view`, {
        headers: {
          Authorization: `Bearer ${REACT_APP_AIRTABLE_API_KEY}`
        }
      })
      console.log(res.data.records)
      
      function randomizeArticles (array) {
        const randomized = []
        while (array.length > 0) {
          const randomIndex = Math.floor(Math.random() * array.length)
          randomized.push(...array.splice(randomIndex, 1)) // still not 100% HOW spread operator works, but thankful that it breaks unecessary nesting
        }
        return randomized
      }
      setArticles(randomizeArticles(res.data.records))

    }
    apiCall()
  }, [])

  function guard() {
    return articles.length > 0 ? true : 'SPINNING THINGEE'
  }
  
  console.log(articles.length > 0)

  return <main>
    <div className="container">Category Carousel</div>
    <div>Tiles and Wrappers to carve out the real estate</div>
    <Link to='/:id'>
      <div className="box">
        <article className="media">
          <div className="media-content">
            <div className="content is-large">{guard() && articles[0].headline}</div>
          </div>
        </article>
      </div>
    </Link>
   


  </main>

}
