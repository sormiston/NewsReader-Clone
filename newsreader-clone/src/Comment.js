import React, { useEffect, useState, createRef } from 'react'


export default function Comment({ comment }) {
  const dropdownRef = createRef()
  const handleDropdown = () => {
    dropdownRef.current.classList.toggle('is-active')
  }

  const ownCommentDropdownContent = (
    <div className="dropdown-content">
      <div className="dropdown-item">
        <small>Edit</small>
      </div>
      <div className="dropdown-item">
        <small>Delete</small>
      </div>
    </div>
  )

  const otherCommentDropdownContent = (
    <div className="dropdown-content">
      <div className="dropdown-item">
        <small>Reply</small>
      </div>
    </div>
  )
  return (

    <div className="box">
      <div className="user-head">
        <span display="inline-block">
          <figure className="media-left image is-32x32">
            <img src={comment.profile} alt="" className="image is-rounded" />
          </figure>
          <h5 className="title is-6">{comment.name}</h5>
        </span>
        <div className="dropdown" ref={dropdownRef}>
          <div className="dropdown-trigger">
            <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={handleDropdown} >
              <span className="icon is-large">
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu">
            {comment.name == localStorage.getItem('name') ? ownCommentDropdownContent : otherCommentDropdownContent}
          </div>
        </div>
      </div>
      <p>
        {comment.comment}
      </p>
      <footer>
        <span><i className="fa fa-hand-lizard-o" aria-hidden="true"></i>{comment.claps}</span>
        <span><i className="fa fa-comment"></i></span>
      </footer>
    </div>
  )

}