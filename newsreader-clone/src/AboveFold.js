import React from 'react'
import styled from 'styled-components'
import ArticleTile from './ArticleTile'
import ArticleBullet from './ArticleBullet'

const StyledAboveFold = styled.section`
  display: flex;
  flex-flow: column nowrap;
  margin: 2rem;
  h1 {
    font-size: 1.75rem;
    line-height: 1.2;
  }
  h3 {
    font-size: 1rem;
  }
  
  @media screen and (max-width: 1030px) {
  .isSecondary {
    display: none;
   }
  }
  
  @media screen and (max-width: 680px) {
    .flex-3 {
      
    }
  }
  
  @media screen and (max-width: 395px) {
    text-overflow: ellipsis;
  .subtitle {
    margin-bottom: -20px;
   }
  }`

export default function AboveFold({ heroArticle1, heroArticle2, news }) {
  return (

    <StyledAboveFold className="flex-1">
      <div className="flex-2">
        <ArticleTile contentObject={heroArticle1} isSecondary={false} />
      </div>
      <div className="flex-3">
        {news.map(news => <ArticleBullet contentObject={news} />)}
      </div>
      <div className="flex-4">
        <ArticleTile contentObject={heroArticle2} isSecondary={true} />
      </div>
    </StyledAboveFold>

  )
}