import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import HelperGems from './HelperGems'


export default function ArticleTile({ contentObject, isSecondary }) {
  let customClassMarker = new String()
  if (isSecondary) customClassMarker = customClassMarker.concat(' isSecondary')

  return (
    // spot class is particular distinction berween Tile and Bullet
    <div className={`${customClassMarker}`}>
      <Link className="react-router-link" to={`/${contentObject.id}`} >
        <div className="flex-1a spot">

          <img src={contentObject.fields.imgLarge} />
          <div className="flex-2a spot">
            <h1><strong>{contentObject.fields.headline}</strong></h1>
            <div className="subtitle">
              <h3>
                {contentObject.fields.subHeadline}
              </h3>
            </div>

            <div className="flex-3a spot">
              <div className="byline">
                <h3>{contentObject.fields.author} in {contentObject.fields.company}</h3>
                <h3>{contentObject.fields.date} {'\u2022'} 5min read {'\u2605'}</h3>
              </div>
              <HelperGems />
            </div>

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