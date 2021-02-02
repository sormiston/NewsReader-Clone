import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HelperGems from './HelperGems';
import Skeleton from 'react-loading-skeleton';

export default function ArticleTile({ contentObject, isSecondary }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    // spot class distinguishes between Tile and Bullet
    <div className={`${isSecondary ? 'isSecondary' : ''} article-tile`}>
      <Link className='react-router-link' to={`/${contentObject.id}`}>
        <div className='flex-1a spot'>
          {!imgLoaded && (
            <div className='skeleton-wrapper' style={{ minHeight: '375px'}}>
              <Skeleton height={'90%'} />
            </div>
          )}
          <img
            src={contentObject.fields && contentObject.fields.imgLarge}
            alt='article art'
            onLoad={(e) => {
              setImgLoaded(true);
            }}
          />
          <div className='flex-2a spot'>
            
                <h1>
                  <strong>
                    {contentObject.fields && contentObject.fields.headline}
                  </strong>
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
                      {contentObject.fields && contentObject.fields.date} {'\u2022'}{' '}
                      5min read {'\u2605'}
                    </h3>
                  </div>
                  <HelperGems />
                </div>
              
           
          </div>
        </div>
      </Link>
    </div>
  );
}
