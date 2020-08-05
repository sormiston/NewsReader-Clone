import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function CommentInput({ handleClick, expandTextArea }) {

  const userName = localStorage.getItem('name')
  const userProfile = localStorage.getItem('profile')
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
      <textarea placeholder="What are your thoughts?" className="textarea" rows={`${expandTextArea ? 4 : 1}`}
        onClick={handleClick}>
      </textarea>
    </div>
  )
}