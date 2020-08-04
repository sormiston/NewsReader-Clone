import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import SpotArticle from './SpotArticle.js'
import 'bulma/css/bulma.css'


export default function MainFeed() {
  const { REACT_APP_BASE_URL, REACT_APP_AIRTABLE_API_KEY } = process.env
  const [news, setNews] = useState([])
  const [heroArticle1, setHeroArticle1] = useState({})
  const [heroArticle2, setHeroArticle2] = useState({})
  const [dataLoading, setDataLoading] = useState(true)

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
      const randomizedNews = randomize(res.data.records)
      setHeroArticle1(randomizedNews.shift())
      setHeroArticle2(randomizedNews.shift())
      setNews(randomizedNews)
      setDataLoading(false)
    }
    apiCall()
  }, [])
 
  console.log(heroArticle1)



  return <main>
    <nav className="level is-mobile has-text-centered"></nav>
    <div className="level-item has-text-centered">Category Carousel</div>
   
    {dataLoading ? <h1>Wait for it</h1> : <SpotArticle contentObject={heroArticle1} />}
    {/* heroArticle2 POPS OFF under media query*/}
  </main>

}
