import React from 'react'
import { Link } from 'react-router-dom'
import 'bulma/css/bulma.css'



export default function SpotArticle({ contentObject }) {


  return (
    <div className="block">
      <div className="box">
        <Link className="react-router-link" to={`/${contentObject.id}`} >

          <article className="media">
            <div className="media-content">
              <div className="title"><strong>{contentObject.fields.headline}</strong>
                <div className="subtitle">{contentObject.fields.subHeadline}</div>
              </div>
            </div>
          </article>

        </Link>
      </div>
    </div>
  )
}