import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HelperGems from './HelperGems';
import Skeleton from 'react-loading-skeleton';


export default function ArticleBullet({ contentObject}) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className='article-bullet'>
      <Link className='react-router-link' to={`/${contentObject && contentObject.id}`}>
        <div className='flex-1a'>
          {!imgLoaded && (
            <div className='skeleton-wrapper'>
              <Skeleton height='90%' />
            </div>
          )}
          <img
            src={contentObject && contentObject.fields.imgLarge}
            alt='article art'
            onLoad={(e) => {
              setImgLoaded(true);
            }}
          />
          <div className='flex-2a'>
            <h1>
              <strong>{contentObject && contentObject.fields.headline}</strong>
            </h1>
            <div className='subtitle'>
              <h3>{contentObject && contentObject.fields.subHeadline}</h3>
            </div>

            <div className='flex-3a'>
              <div className='byline'>
                <h3>
                  {contentObject && contentObject.fields.author} in {contentObject && contentObject.fields.company}
                </h3>
                <h3>
                  {contentObject && contentObject.fields.date} {'\u2022'} 5min read {'\u2605'}
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
