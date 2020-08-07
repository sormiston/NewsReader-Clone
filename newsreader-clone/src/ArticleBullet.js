import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import HelperGems from './HelperGems'


const StyledArticleBullet = styled.div`
  margin: auto;
  overflow-x: hidden;
  
  .flex-1a {
    display: flex;
    flex-flow: row-reverse nowrap;
    justify-content: space-between;
  }

  img {
    width: 140px;
    height: 100px;
    /* background-size: cover; */
  }
@media screen and (max-width: 680px) {
  
}
@media screen and (max-width: 504px) {
  img {
    width: 80px;
    height: 80px;
  } 
}



`

export default function ArticleTile({ contentObject, isSecondary }) {
  let customClassMarker = new String()
  if (isSecondary) customClassMarker = customClassMarker.concat(' isSecondary')

  return (
    <StyledArticleBullet className="article-bullet-js">
      <Link className="react-router-link" to={`/${contentObject.id}`} >
        <div className="flex-1a">

          <img src={contentObject.fields.imgLarge} />
          <div className="flex-2a">
            <h1><strong>{contentObject.fields.headline}</strong></h1>
            <div className="subtitle">
              <h3>{contentObject.fields.subHeadline}</h3>
            </div>

            <div className="flex-3a">
              <div className="byline">
                <h3>{contentObject.fields.author} in {contentObject.fields.company}</h3>
                <span display="inline-block">{contentObject.fields.date} {'\u2022'} 5min read {'\u2605'}</span>
              </div>
              <HelperGems />

            </div>

          </div>
        </div>
      </Link>
    </StyledArticleBullet>

  )
}