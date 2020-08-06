import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const StyledArticleBullet = styled.div`
  margin: auto;
  overflow-x: hidden;
  
  .flex-1 {
    display: flex;
    flex-flow: row-reverse nowrap;
    justify-content: space-between;
  }
  .flex-2 {
    display: flex;
    flex-flow: column nowrap;
  }
  img {
    width: 80px;
    height: 80px;
    flex: 0 0 auto;
  }

`

export default function ArticleTile({ contentObject, isSecondary }) {
  let customClassMarker = new String()
  if (isSecondary) customClassMarker = customClassMarker.concat(' isSecondary')

  return (
    <StyledArticleBullet>
      <Link className="react-router-link" to={`/${contentObject.id}`} >
        <div className="flex-1">

          <img src={contentObject.fields.imgLarge} />
.
          <div className="flex-2">
            <h1><strong>{contentObject.fields.headline}</strong></h1>
            <div className="subtitle">{contentObject.fields.subHeadline}</div>
            <div className="media">
              <div className="media-content">
                <h3>{contentObject.fields.author} in {contentObject.fields.company}</h3>
                <span display="inline-block">{contentObject.fields.date} {'\u2022'} 5min read {'\u2605'}<span className="icon"><i className="fa fa-bookmark-o" aria-hidden="true"></i></span>
                  <span className="icon"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></span></span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </StyledArticleBullet>
  )
}