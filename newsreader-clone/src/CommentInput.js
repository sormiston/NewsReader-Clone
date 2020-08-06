import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function CommentInput({ addComment }) {
  const [expandTextArea, setExpandTextArea] = useState(false)
  const [userName, setUsername] = useState(localStorage.getItem('name'))
  const [userProfile, setUserProfile] = useState(localStorage.getItem('profile'))
  const [userComment, setUserComment] = useState('')

  const handleAddComment = (e) => {
    addComment(userComment)
    setUserComment('')
    setExpandTextArea(false)


  }
  return (
    <div className="box">
      <div className="user-head">
        <span display="inline-block">
          <figure className="media-left image is-32x32">
            <img src={userProfile} alt="" className="image is-rounded" />
          </figure>
          <h5 className="title is-5">{userName}</h5>
        </span>
      </div>

      <textarea placeholder="What are your thoughts?" value={userComment} className="textarea" rows={`${expandTextArea ? 4 : 1}`}
        onClick={() => setExpandTextArea(true)} onChange={(e) => setUserComment(e.target.value)} >

      </textarea>
      <button className="button is-primary" onClick={() => handleAddComment()}>Submit</button>
      <button className="button cancel" onClick={() => setExpandTextArea(false)}>Cancel</button>
    </div>
  )
}