import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import Recommendations from './Recommendations'

// is the second API call necessary?  NO way to do this with props?
// Possible to reduce API Calls (4, as of commit post-b5ac835 ) by folding state hooks into one state object?

export default function ArticlePage() {
  const params = useParams()
  const id = params.id
  const { REACT_APP_BASE_URL, REACT_APP_AIRTABLE_API_KEY } = process.env
  const [article, setArticle] = useState({})
  const [dataLoading, setDataLoading] = useState(true)
  const [commentOverlay, setCommentOverlay] = useState(false)

  // Note: API call contains a query parameter provided by useParams hook.  It will fetch one specific article.
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

  const toggleComments = () => {
    setCommentOverlay(!commentOverlay)
  }

  return (
    <>
      <article>

        <Header article={article} />
        <Body />
        <Footer article={article} centralizedFunction={() => toggleComments()} />
      </article>

      <Recommendations />
    </>
  )

}