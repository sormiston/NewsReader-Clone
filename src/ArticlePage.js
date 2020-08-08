import React, { useState, useEffect, createRef } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import CommentsCard from './CommentsCard'

const StyledArticle = styled.main`
 
    transition: all 100ms 1100ms;
   
  .article-body {
    max-width: 680px;
     margin: 0 auto;
  }
  .hero {
    max-height: 6vh;
  }
  .hero-body {
    padding: .5rem;
    text-align: left;
  } .title-2 {
    font-weight: 800;
  }
  figcaption {
    text-align: center;
  }
 .subtitle.supertitle-actually {
   
 }
  .content {
    padding-bottom: 2rem;
  }
  
  div.tags.are-medium {
    justify-content: center;
    padding-bottom: 2rem;
  } 
  .icon-bank {
    display: flex;
    justify-content: space-evenly;
    width: 140px;
    margin-bottom: .75rem;
  }
  i {
    font-size: 1.75rem;
  }
  div.media-right {
    
    flex: 1 0 400px;
  }
  
  @media screen and (max-width: 700px) {
    div.media.media-left, div.media-content.content {
    flex: 0 0 100%;  
    }
    
    div.media-right {
      flex: 1 1;
    }
  }
 
     
`

export default function ArticlePage() {
  const params = useParams()
  const id = params.id
  const { REACT_APP_BASE_URL, REACT_APP_AIRTABLE_API_KEY } = process.env
  const [article, setArticle] = useState({})
  const [dataLoading, setDataLoading] = useState(true)
  const [commentOverlay, setCommentOverlay] = useState(false)
  const scrimRef = createRef()

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

  // const darkenScrim = useEffect(() => {
  //   if (commentOverlay) {
  //     scrimRef.current.style.backgroundColor = "#f2f2f2"
  //     scrimRef.current.style.filter = "brightness(40%)"
  //   } else {
  //     scrimRef.current.style.backgroundColor = "unset"
  //     scrimRef.current.style.filter = "unset"
  //   }
  // }, [commentOverlay])

  const toggleComments = () => {
    setCommentOverlay(!commentOverlay)
    if (!commentOverlay) {
      scrimRef.current.style.backgroundColor = "#f2f2f2"
      scrimRef.current.style.filter = "brightness(40%)"
    } else {
      scrimRef.current.style.backgroundColor = "unset"
      scrimRef.current.style.filter = "unset"
    }
  }

  return (
    <>
      <StyledArticle ref={scrimRef}>
        <div className="article-body">

          <Header article={article} />
          <Body />
          <Footer article={article} toggleComments={toggleComments} />

        </div>
      </StyledArticle>
      {!dataLoading && <CommentsCard contentObject={article} toggleComments={() => toggleComments()} commentOverlay={commentOverlay} />}
    </>

  )
}

