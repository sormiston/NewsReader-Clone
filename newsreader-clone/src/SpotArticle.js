import React from 'react'
import { Link } from 'react-router-dom'



export default function SpotArticle({ contentObject }) {


  return (<Link className="react-router-link" to={`/feature/${contentObject.id}`} >
    <div className="box">
      <article className="media">
        <div className="media-content">
          <div className="content is-large"><strong>{contentObject.fields.headline}</strong>
          </div>
        </div>
      </article>
    </div>
  </Link>
  )
}