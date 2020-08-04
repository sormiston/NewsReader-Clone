import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import SpotArticle from './SpotArticle.js'

export default function MainFeed() {
  const { REACT_APP_BASE_URL, REACT_APP_AIRTABLE_API_KEY } = process.env
  const [articles, setArticles] = useState([])
  const [heroArticle1, setHeroArticle1] = useState({})
  const [heroArticle2, setHeroArticle2] = useState({})
  const [dataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    const apiCall = async () => {
      setDataLoading(true)
      const res = await axios(`${REACT_APP_BASE_URL}Content/?view=Grid%20view`, {
        headers: {
          Authorization: `Bearer ${REACT_APP_AIRTABLE_API_KEY}`
        }
      })
      // console.log(res.data.records)

      const randomize = (array) => {
        const result = []
        while (array.length > 0) {
          const randomIndex = Math.floor(Math.random() * array.length)
          result.push(...array.splice(randomIndex, 1)) // still not 100% HOW spread operator works, but thankful that it breaks unecessary nesting
        }
        return result
      }
      const randomizedArticles = randomize(res.data.records)
      console.log(randomizedArticles)
      setHeroArticle1(randomizedArticles.shift())
      setHeroArticle2(randomizedArticles.shift())
      setArticles(randomizedArticles)
      setDataLoading(false)
    }
    apiCall()
  }, [])

  // console.log(dataLoaded)
  console.log(articles[0])


  return <main>
    <div className="container">Category Carousel</div>
    <div>Tiles and Wrappers to carve out the screen space</div>
    {dataLoading ? <h1>Wait for it</h1> : <h1>loaaded</h1>}
    {/* {articles.length < 0 && <SpotArticle articles={articles[0]} />} */}

  </main>

}
