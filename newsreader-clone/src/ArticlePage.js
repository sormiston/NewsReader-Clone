import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import CommentsCard from './CommentsCard'


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

  // ANIMATION THANKS TO SOLEIL SOLOMON!

  const load = (props) => keyframes`
    from {
      background-color: rgba(0,0,0,0);
      filter: brightness(1);
    } 
    to {
      background-color: rgba(0,0,0,0.4);
      filter: brightness(0.5); 
    }
   `
  const Article = styled.article`  
   background-color: ${commentOverlay ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0)'};
   filter: ${commentOverlay ? 'brightness(0.5)' : 'brightness(1)'};
   animation: ${load} ${commentOverlay ? '1s normal' : '.01s reverse'}
   
 `
  // end citation

  const toggleComments = () => {
    setCommentOverlay(!commentOverlay)
  }

  return (
    <>
      <Article>
        <Header article={article} />
        <Body />
        <Footer article={article} toggleComments={() => toggleComments()} />
      </Article>
      {commentOverlay && <CommentsCard contentObject={article} toggleComments={() => toggleComments()} />}
    </>
  )

}

{/* // Remember to put back on line 70! {commentOverlay && } */ }