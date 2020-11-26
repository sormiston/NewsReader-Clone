import React from 'react'
import { Link } from 'react-router-dom'
import HelperGems from './HelperGems'
import Skeleton from 'react-loading-skeleton'

export default function ArticleTile({ contentObject, isSecondary }) {

  return (
    // spot class distinguishes between Tile and Bullet
    <div className={`${isSecondary ? 'isSecondary':''}`}>
      <Link className='react-router-link' to={`/${contentObject.id}`}>
        <div className='flex-1a spot'>
          {contentObject.fields ? (
            <img src={contentObject.fields.imgLarge} alt="article art"/>
          ) : (
            <Skeleton className='here' height={200} />
          )}
          <div className='flex-2a spot'>
            {contentObject.fields ? (
              <>
            <h1>
              <strong>{contentObject.fields && contentObject.fields.headline}</strong>
            </h1>
            <div className='subtitle'>
              <h3>{contentObject.fields && contentObject.fields.subHeadline}</h3>
            </div>

            <div className='flex-3a spot'>
              <div className='byline'>
                <h3>
                  {contentObject.fields && contentObject.fields.author} in{' '}
                  {contentObject.fields && contentObject.fields.company}
                </h3>
                <h3>
                  {contentObject.fields && contentObject.fields.date} {'\u2022'} 5min
                  read {'\u2605'}
                </h3>
              </div>
              <HelperGems />
            </div>
            </>
            ) : <Skeleton count={4}/>}
            
          </div> 
        </div>
      </Link>
    </div>
  )
}
