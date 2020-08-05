import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function CommentInput() {
  const [expandTextArea, setExpandTextArea] = useState(false)
  const [userName, setUsername] = useState(localStorage.getItem('name'))
  const [userProfile, setUserProfile] = useState(localStorage.getItem('profile'))



  const handleClick = (e) => {
    console.log(e)
    setExpandTextArea(!expandTextArea)
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
      <form>
        <textarea placeholder="What are your thoughts?" className="textarea" rows={`${expandTextArea ? 4 : 1}`}
          onClick={handleClick} >
        </textarea>
      </form>
    </div>
  )
}