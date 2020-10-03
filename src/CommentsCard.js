import React, { useEffect, useState, forwardRef } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import CommentInput from './CommentInput'
import Comment from './Comment'
import { mediaQueries } from './StyledMixins'

const StyledCommentsCard = styled.main`
  position: fixed;
  visibility: hidden;
  width: 100%;
  z-index: 2;
  height: 100vh;
  right: 0;
  ${mediaQueries('tablet')`
    width: 40%;
  `}

  .commentCard-content {
    position: absolute;
    width: 100%;
    height: 100vh;
    border-top: 2px solid grey;
    border-radius: 8px 8px 0 0;
    background-color: white;
    z-index: 2;
    overflow-y: scroll;
    transform: translate3d(0, 100%, 0);
    transition: transform 1s ease-out, visibility 1.1s;

    ${mediaQueries('tablet')`
      transform: translate3d(100%, 0, 0);
      `}

    .box {
      padding: 0.8rem;
      margin: 0.2rem;
    }
    .response-head {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
    }
    .fixed-head {
      position: fixed;
      display: flex;
      flex-direction: column;
      width: inherit;
      z-index: 1;
      background-color: white;
      border-radius: 8px 8px 0 0;
    }

    .comments-section {
      padding-top: 300px;
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
      margin: 0.6rem;
    }
    footer > span {
      display: inline-block;
      padding: 0.6rem 0.8rem;
    }
  }

  &.show {
    visibility: visible;

    .commentCard-content {
      transform: translate3d(0, 0, 0);
      transition: transform 1s ease-out;
    }

    &:after {
      z-index: 0;
      position: fixed;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(226, 226, 226, 0.1);
      filter: brightness(10%);
    }
  }
`

const CommentsCard = forwardRef(
  ({ contentObject, toggleComments, commentOverlay }, ref) => {
    const params = useParams()
    const id = params.id
    const {
      REACT_APP_BASE_URL,
      REACT_APP_AIRTABLE_API_KEY,
    } = process.env
    const [dataLoading, setDataLoading] = useState(false)
    const [parsedComments, setParsedComments] = useState(
      JSON.parse(contentObject.comments)
    )
    const [didPostComment, setDidPostComment] = useState(0)

    // THEORY: useEffect is necessary here because component must be allowed to render in its first state (eg closed) and THEN transition to its second state.  In other words, React's re-rendering on component change creates a break between states.

    useEffect(() => {}, [commentOverlay])

    const patchCall = async (patch) => {
      const res = await axios.patch(
        `${REACT_APP_BASE_URL}Content/${id}`,
        {
          fields: {
            comments: patch,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${REACT_APP_AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      )
    }
    const getCall = async () => {
      const res = await axios.get(
        `${REACT_APP_BASE_URL}Content/${id}`,
        {
          headers: {
            Authorization: `Bearer ${REACT_APP_AIRTABLE_API_KEY}`,
          },
        }
      )
      setParsedComments(JSON.parse(res.data.fields.comments))
    }

    const addComment = async (string) => {
      setDataLoading(true)
      const newComment = {
        name: localStorage.getItem('name'),
        profile: localStorage.getItem('profile'),
        comment: string,
        claps: 0,
      }
      const reqData = [newComment, ...parsedComments]
      const patch = JSON.stringify(reqData)
      await patchCall(patch)
      getCall()
      setDidPostComment(didPostComment + 1)
      setDataLoading(false)
    }

    const editComment = (update, idx) => {
      setDataLoading(true)
      console.log(`Edit Comment func ${idx}`)
      parsedComments[idx].comment = update
      const patch = JSON.stringify(parsedComments)
      patchCall(patch)
      getCall()
      setDidPostComment(didPostComment + 1)
      setDataLoading(false)
    }

    const deleteComment = (idx) => {
      setDataLoading(true)
      console.log(`Delete Comment func ${idx}`)
      parsedComments.splice(idx, 1)
      const patch = JSON.stringify(parsedComments)
      patchCall(patch)
      getCall()
      setDidPostComment(didPostComment + 1)
      setDataLoading(false)
    }

    return (
      <StyledCommentsCard ref={ref}>
        <div className='commentCard-content'>
          <div className='fixed-head'>
            <p className='title is-3 mt-6 ml-5 response-head'>
              Responses ({parsedComments.length})
              <button
                className='delete mr-5'
                onClick={toggleComments}
              ></button>
            </p>
            <CommentInput addComment={addComment} />
          </div>
          <div className='comments-section'>
            {!dataLoading &&
              parsedComments.length > 0 &&
              parsedComments.map((comment, idx) => (
                <Comment
                  comment={comment}
                  editComment={editComment}
                  deleteComment={deleteComment}
                  thisCommentIdx={idx}
                  key={`${id}${idx}`}
                />
              ))}
          </div>
        </div>
      </StyledCommentsCard>
    )
  }
)

export default CommentsCard
