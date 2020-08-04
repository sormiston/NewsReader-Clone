import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import 'bulma/css/bulma.css'

// is the second API call necessary?  NO way to do this with props?
// Possible to reduce API Calls (4, as of commit post-b5ac835 ) by folding state hooks into one state object?

export default function ArticlePage() {
  const params = useParams()
  const id = params.id
  const { REACT_APP_BASE_URL, REACT_APP_AIRTABLE_API_KEY } = process.env
  const [article, setArticle] = useState({})
  const [dataLoading, setDataLoading] = useState(true)

  useEffect(() => {
    const apiCall = async () => {
      setDataLoading(true)
      const res = await axios(`${REACT_APP_BASE_URL}Content/${id}`, {
        headers: {
          Authorization: `Bearer ${REACT_APP_AIRTABLE_API_KEY}`
        }
      })

      setArticle(res.data.fields)
      setDataLoading(false)

    }
    apiCall()

  }, [])

  console.log(article)

  const Article = styled.main`
  .hero-body {
    padding-top: 1rem;
  }
  `
  return (
    <Article>
      <section className="hero is-dark">
        <div className="hero-body">
          <h1 className="title">
            {article.company}
          </h1>
        </div>
      </section>
    </Article>

  )

}