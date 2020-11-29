import React from 'react'
import { Link } from 'react-router-dom'
import HelperGems from './HelperGems'



export default function ArticleBullet({ contentObject, isSecondary }) {
 
  return (
    <div className='article-bullet'>
      <Link className='react-router-link' to={`/${contentObject.id}`}>
        <div className='flex-1a'>
         
            <img src={contentObject.fields.imgLarge} alt="article art"/>
        

          <div className='flex-2a'>
            <h1>
              <strong>{contentObject.fields.headline}</strong>
            </h1>
            <div className='subtitle'>
              <h3>{contentObject.fields.subHeadline}</h3>
            </div>

            <div className='flex-3a'>
              <div className='byline'>
                <h3>
                  {contentObject.fields.author} in {contentObject.fields.company}
                </h3>
                <h3>
                  {contentObject.fields.date} {'\u2022'} 5min read {'\u2605'}
                </h3>
              </div>
              <HelperGems />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
