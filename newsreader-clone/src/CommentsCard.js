import React, { useEffect, useState, createRef } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import CommentInput from './CommentInput'
import Comment from './Comment'

const StyledCommentsCard = styled.main`
  
    position: fixed;
    width: 100%;
    border-top: 2px solid grey;
    box-shadow: 0px -15vh 15vh 15vh;
    border-radius: 5%;
    background-color: white;
    transition: height 1s ease-in-out;
    z-index: 1;
    bottom: 1vh;
    height: 1vh;
    opacity: 0;
    overflow-y: scroll;
   
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
export default function CommentsCard({ contentObject, toggleComments, commentOverlay }) {
  const params = useParams()
  const id = params.id
  const { REACT_APP_BASE_URL, REACT_APP_AIRTABLE_API_KEY } = process.env
  const [dataLoading, setDataLoading] = useState(false)
  const [parsedComments, setParsedComments] = useState(JSON.parse(contentObject.comments))
  const [didPostComment, setDidPostComment] = useState(0)

  const commentsCardRef = createRef()
  useEffect(() => {

    if (commentOverlay) {
      commentsCardRef.current.style.height = '85vh'
      commentsCardRef.current.style.opacity = '1'
    } else {
      commentsCardRef.current.style.height = '1%'
      commentsCardRef.current.style.opacity = 0
    }
  }, [commentOverlay])

  // useEffect to re-render

  const patchCall = async (patch) => {
    const res = await axios.patch(`${REACT_APP_BASE_URL}Content/${id}`, {
      fields: {
        comments: patch,
      }
    }, {
      headers: {
        'Authorization': `Bearer ${REACT_APP_AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json'
      }
    })
  }
  const getCall = async () => {
    const res = await axios.get(`${REACT_APP_BASE_URL}Content/${id}`, {
      headers: {
        'Authorization': `Bearer ${REACT_APP_AIRTABLE_API_KEY}`,
      }
    })
    setParsedComments(JSON.parse(res.data.fields.comments))
  }

  const addComment = (string) => {
    setDataLoading(true)
    const newComment = {
      name: localStorage.getItem('name'),
      profile: localStorage.getItem('profile'),
      comment: string,
      claps: 0,
    }
    parsedComments.unshift(newComment) // dangerous to modify state variable directly via side effect, here ?
    const patch = JSON.stringify(parsedComments)
    patchCall(patch)
    getCall()
    setDidPostComment(didPostComment + 1)
    setDataLoading(false)
  }

  const editComment = (update, idx) => {
    setDataLoading(true)
    parsedComments[idx].comment = update
    const patch = JSON.stringify(parsedComments)
    patchCall(patch)
    getCall()
    setDidPostComment(didPostComment + 1)
    setDataLoading(false)
  }

  const deleteComment = (idx) => {
    setDataLoading(true)
    parsedComments.splice(idx, 1)
    const patch = JSON.stringify(parsedComments)
    patchCall(patch)
    getCall()
    setDidPostComment(didPostComment + 1)
    setDataLoading(false)
  }

  return (

    <StyledCommentsCard ref={commentsCardRef}>
      <div className="container">
        <h2 className="title is-3 mt-6 ml-5 response-head">
          Responses ({parsedComments.length})
          <button className="delete mr-5" onClick={toggleComments}></button></h2>
        <CommentInput addComment={addComment} />
        {!dataLoading && parsedComments.map((comment, idx) => <Comment comment={comment} editComment={editComment} deleteComment={deleteComment} thisCommentIdx={idx} />)}
      </div>
    </StyledCommentsCard>
  )
}