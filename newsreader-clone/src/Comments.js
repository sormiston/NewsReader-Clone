import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import CommentInput from './CommentInput'

export default function Comments({ contentObject, toggleComments }) {
  const [expandTextArea, setExpandTextArea] = useState(false)
  const [commentsPersist, setCommentsPersist] = useState()
  const parsedComments = JSON.parse(contentObject.comments)


  const handleClick = (e) => {
    console.log(e)
    setExpandTextArea(!expandTextArea)
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
  
  .response-head {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }
  
  .user-head span {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  
  }
  
  `
  return (
    <div>
      <CommentsCard>
        <div className="container">
          <h2 className="title is-3 mt-6 ml-5 response-head">
            Responses (3)
          <button className="delete mr-5" onClick={toggleComments}></button></h2>
          <CommentInput handleClick={(e) => handleClick(e.target)} expandTextArea={expandTextArea} />
        </div>


      </CommentsCard>
    </div>

  )
}