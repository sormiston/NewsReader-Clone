import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled, { keyframes } from 'styled-components'
import CommentInput from './CommentInput'
import Comments from './Comments'

export default function CommentsCard({ contentObject, toggleComments }) {
  const [parsedComments, setParsedComments] = useState(JSON.parse(contentObject.comments))


  const addComment = (string) => {
    const newComment = {
      name: localStorage.getItem('name'),
      profile: localStorage.getItem('profile'),
      comment: string,
      claps: 0,
    }
    parsedComments.unshift(newComment)
    console.log(parsedComments)
    // const newJSONString = JSON.stringify(parsedComments)
    const apiCall = async () => {
      const { REACT_APP_BASE_URL, REACT_APP_AIRTABLE_API_KEY } = process.env
      const res = await axios.patch(`${REACT_APP_BASE_URL}/Content`, {
        fields: {
          comments: JSON.stringify(parsedComments)
        }
      }, {
        headers: {
          'Authorization': `${REACT_APP_AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json'
        }
      })
    }
    // apiCall()
  }

  // ANIMATION CREDIT TO SOLEIL SOLOMON
  const load = (props) => keyframes`
   from {
     height: 1%;
   } 
   to {
     height: 85vh;
   }`

  // end citaton
  const CommentsCard = styled.main`  
     
    position: fixed;
    width: 100%;
    border-top: 1px;
    border-radius: 5%;
    background-color: white;
    height: 85vh;
    z-index: 1;
    bottom: 1%;
    /* ANIMATION CREDIT TO SOLEIL SOLOMON */
    animation: ${load} .5s forwards;
  .box {
    padding: .8rem;
    margin: .2rem;
  }
  .response-head {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }
  .user-head {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    
  }
  .user-head > span {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  p {
    margin: .6rem;
  }
  footer > span {
    display: inline-block;
   padding: .6rem .8rem;
  }
  `
  return (

    <CommentsCard>
      <div className="container">
        <h2 className="title is-3 mt-6 ml-5 response-head">
          Responses (3)
          <button className="delete mr-5" onClick={toggleComments}></button></h2>
        <CommentInput addComment={addComment} />
        <Comments parsedComments={parsedComments} />
      </div>
    </CommentsCard>


  )
}