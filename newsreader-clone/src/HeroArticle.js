import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


export default function HeroArticle({ contentObject, isHero, isSecondary }) {
  let customClassMarker = new String()
  if (isHero) customClassMarker = customClassMarker.concat('isHero')
  if (isSecondary) customClassMarker = customClassMarker.concat(' isSecondary')

  return (
    <div className={customClassMarker}>
      <Link className="react-router-link" to={`/${contentObject.id}`} >
        <figure className="image is-5by3">
          <img src={contentObject.fields.imgLarge} />
        </figure>
        <h1><strong>{contentObject.fields.headline}</strong></h1>
        <div className="subtitle">{contentObject.fields.subHeadline}</div>
        <div className="media">
          <div className="media-content">
            <h3>{contentObject.fields.author} in {contentObject.fields.company}</h3>
            <span display="inline-block">{contentObject.fields.date} {'\u2022'} 5min read {'\u2605'}<span className="icon"><i className="fa fa-bookmark-o" aria-hidden="true"></i></span>
              <span className="icon"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></span></span>
          </div>
        </div>
      </Link>
    </div>

  )
}

//semi old line 9 (doesn't work)
// {`${isHero ? 'isHero' : isSecondary ? 'isSecondary' : ''}`}
// old line 9
// {`${isSecondary && 'isSecondary'}`}{`${isHero && 'isHero'}`}