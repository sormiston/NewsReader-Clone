import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AboveFold from './AboveFold'



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



  return <main>
    <nav className="level is-mobile has-text-centered"></nav>
    <div class="tabs is-centered is-fullwidth">
      <ul>
        <li class="is-active">
          <a>HOME</a></li>
        <li><a>POPULAR</a></li>
        <li><a>MOMENTUM</a></li>
        <li><a>CORONAVIRUS</a></li>
        <li><a>ONEZERO</a></li>
        <li><a>ELEMENTAL</a></li>
        <li><a>GEN</a></li>
      </ul>
    </div>

    {dataLoading ? <h1>Wait for it</h1> : <AboveFold heroArticle1={heroArticle1} heroArticle2={heroArticle2} news={news.slice(0, 3)} />}

  </main>

}
