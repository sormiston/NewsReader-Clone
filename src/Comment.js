import React, { useEffect, useState, createRef } from 'react'
import styled from 'styled-components'

const StyledComment = styled.div`
  small:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export default function Comment({
  comment,
  editComment,
  deleteComment,
  thisCommentIdx,
}) {
  const [editing, setEditing] = useState(false)
  const [userEditedComment, setUserEditedComment] = useState(comment.comment)
  const [commentIdx] = useState(thisCommentIdx)

  const dropdownRef = createRef()
  const handleDropdown = () => {
    dropdownRef.current.classList.toggle('is-active')
    let otherDropDowns = document.getElementsByClassName('dropdown')
    otherDropDowns = [...otherDropDowns].filter((x) => x !== dropdownRef.current)
    otherDropDowns.forEach((dd) => dd.classList.remove('is-active'))
  }

  const handleEditComment = () => {
    editComment(userEditedComment, commentIdx)
    setEditing(false)
  }

  const ownCommentDropdownContent = (
    <div className='dropdown-content'>
      <div className='dropdown-item'>
        <small
          onClick={() => {
            setEditing(true)
            handleDropdown()
          }}
        >
          Edit
        </small>
      </div>
      <div className='dropdown-item'>
        <small
          onClick={() => {
            alert(
              'This will be deleted.  Some day, this will be a modal, and maybe it will even give you a choice.  But for now, no choice.'
            )
            deleteComment(commentIdx)
          }}
        >
          Delete
        </small>
      </div>
    </div>
  )

  const otherCommentDropdownContent = (
    <div className='dropdown-content'>
      <div className='dropdown-item'>
        <small>Reply</small>
      </div>
    </div>
  )

  const editCommentElement = (
    <div className='content'>
      <textarea
        display='block'
        className='edit-textarea'
        value={userEditedComment}
        rows={4}
        onChange={(e) => setUserEditedComment(e.target.value)}
      ></textarea>
      <button className='button is-primary' onClick={() => handleEditComment()}>
        Submit
      </button>
      <button className='button cancel' onClick>
        Cancel
      </button>
    </div>
  )

  const defaultCommentElement = (
    <div className='content'>
      <p>{comment.comment}</p>
    </div>
  )

  return (
    <StyledComment className='box'>
      <div className='user-head'>
        <span display='inline-block'>
          <figure className='media-left image is-32x32'>
            <img src={comment.profile} alt='' className='image is-rounded' />
          </figure>
          <h5 className='title is-6'>{comment.name}</h5>
        </span>
        <div className='dropdown' ref={dropdownRef}>
          <div className='dropdown-trigger'>
            <button
              className='button'
              aria-haspopup='true'
              aria-controls='dropdown-menu'
              onClick={() => handleDropdown()}
            >
              <span className='icon is-large'>
                <i className='fa fa-ellipsis-h' aria-hidden='true'></i>
              </span>
            </button>
          </div>
          <div className='dropdown-menu'>
            {comment.name == localStorage.getItem('name')
              ? ownCommentDropdownContent
              : otherCommentDropdownContent}
          </div>
        </div>
      </div>
      {editing ? editCommentElement : defaultCommentElement}
      <footer>
        <span>
          <i className='fa fa-hand-lizard-o' aria-hidden='true'></i>
          {comment.claps}
        </span>
        <span>
          <i className='fa fa-comment'></i>
        </span>
      </footer>
    </StyledComment>
  )
}
