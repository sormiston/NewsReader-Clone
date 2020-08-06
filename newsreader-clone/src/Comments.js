import React, { useEffect, useState } from 'react'

export default function Comments({ parsedComments }) {
  return (
    <>
      {parsedComments.map(comment =>
        <div className="box">
          <div className="user-head">
            <span display="inline-block">
              <figure className="media-left image is-32x32">
                <img src={comment.profile} alt="" className="image is-rounded" />
              </figure>
              <h5 className="title is-6">{comment.name}</h5>
            </span>
            <span className="icon"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></span>
          </div>
          <p>
            {comment.comment}
          </p>
          <footer>
            <span><i className="fa fa-hand-lizard-o" aria-hidden="true"></i>{comment.claps}</span>
            <span><i className="fa fa-comment"></i></span>
          </footer>
        </div>
      )}
    </>

  )
}