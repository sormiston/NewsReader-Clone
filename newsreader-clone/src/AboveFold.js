import React from 'react'
import styled from 'styled-components'
import ArticleTile from './ArticleTile'
import ArticleBullet from './ArticleBullet'

const StyledAboveFold = styled.section`
  display: flex;
  flex-flow: column nowrap;
  margin: 2rem;
    
  font-family:  'Open Sans','arial';
 
   > div {

  }
  .flex-1a {
    display: flex;
    flex-flow: row-reverse;
    overflow-wrap: break-word;
  }
  .flex-1a.spot {
    display: flex;
    flex-flow: column;
  }
  .flex-2 {
    padding-bottom: 1rem;
  }
  .flex-3 {
    flex-flow: column;
  }
  .flex-3 > div {
    padding-bottom: 1rem;
  }
  h1, h3 {
    line-height: 1.2;
  }
  h1 {
    font-size: 1rem;
  }
  h3 {
    font-size: .75rem;
  }
  
  img {
    background-size: auto;
  }
  .isSecondary {
    display: none;
   }
  .flex-2a {
    display: flex;
    flex-flow: column nowrap;
    width: 75%;
    justify-content: space-around;
  }
  .flex-3a {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-between;
}

@media screen and (max-width: 395px) {
    text-overflow: ellipsis;
  .subtitle {
    display: none;
   }
  }
    @media screen and (min-width: 741px) {
      flex-flow: row nowrap;
       margin: .5rem;
       
       .flex-3 {
         margin: 0 1rem;
       }
       .subtitle > h3 {
        display: none;
      }
      .flex-1a {
        width: 45vw;
        height: 150px;
        flex-flow: row;
        
      }
      .flex-1a img {
        max-height: 200px;
        background-size: cover;
        order: -1;
      }
      .flex-2a {
        width: 100%;
      }
    }
    
    @media screen and (min-width: 1030px) {
    div.flex-4 {
     
    }
      div.flex-3 {
      flex-shrink: 0;
    }
      div.flex-2 {
        flex-basis: 300px;
      }
      .flex-1a {
        height: 100%;
      }
      .flex-1a.spot {
      width: inherit;
      
      .flex-1a.spot img {
      max-width: 300px;
      }
    
      .flex-2a.spot {
        max-width: inherit;
      }
    }
    .flex-3 {
      min-width: 34%;
    }
    .subtitle > h3 {
      display: initial;
    }
   .isSecondary {
    display: initial;
   }
  }
    
 `

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