import React from 'react'
import { Link } from 'react-router-dom'



export default function SpotArticle({ articles }) {


  return (<Link to={`/feature/`}>
    <div className="box">
      <article className="media">
        <div className="media-content">
          <div className="content is-large"><strong>YAS</strong></div>
        </div>
      </article>
    </div>
  </Link>
  )
}