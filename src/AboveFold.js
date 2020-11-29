import React from 'react';
import styled from 'styled-components';
import ArticleTile from './ArticleTile';
import ArticleBullet from './ArticleBullet';
import Skeleton from 'react-loading-skeleton';

const StyledAboveFold = styled.section`
  display: flex;
  flex-flow: column nowrap;
  margin: 1rem;
  padding: 0 1rem;

  font-family: 'Helvetica', 'Open Sans', 'arial';

  h1,
  h3 {
    line-height: 1.2;
  }
  
  h1 {
    font-size: 1.3rem;
    margin: 1rem 0;
    strong {
      font-weight: 800;
    }
  }
  
  h3 {
    color: #787878;
  }

  .flex-1a {
    display: flex;
    flex-flow: row-reverse;
    justify-content: space-between;
  }
  .flex-1a.spot {
    display: flex;
    flex-flow: column;
  }
  .flex-2 {
    margin-bottom: 1rem;
  }
  
  .flex-2 h1 {
    font-size: 1.5rem;
  }

  .flex-3 {
    flex-flow: column;
  }
  .flex-3 > div {
    padding-bottom: 1rem;
  }

  img {
    background-size: auto;
  }
  .isSecondary {
    display: none;
  }

  .article-bullet {
    margin: auto;
    width: 100%;
    h1 {
      font-size: 1.1rem;
      margin: 0 0 1rem;
    }
    img {
      width: 140px;
      height: 100px;
      margin-right: 1rem;
      object-fit: cover;
      margin-right: 10px;
    }
    .subtitle h3 {
      font-size: 0.9rem;
    }

    @media screen and (max-width: 504px) {
      img {
        width: 80px;
        height: 80px;
      }
    }
  }

  .flex-2a {
    display: flex;
    flex-flow: column nowrap;
    padding-right: 0.4rem;
  }

  .flex-2a.spot {
    h1 {
      margin-top: 1rem;
    }
    .subtitle {
      display: initial;
    }
  }
  .flex-3a {
    width: 100%;
    .subtitle {
      display: none;
      h3 {
        font-size: 0.85rem;
      }
    }

    .byline {
      h3 {
        font-size: 0.75rem;
      }
      h3:nth-child(1) {
        grid-row-start: 2;
      }
      h3:nth-child(2) {
        grid-row-start: 3;
        color: #787878;
      }
    }
  }
  .flex-3a {
    display: flex;
    flex-flow: row nowrap;

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
    margin: 0.5rem;

    .flex-3 {
      margin: 0 1rem;
      width: 50%;
      .flex-2a h1 {
        font-size: 1rem;
      }
    }
    .subtitle {
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
    .article-bullet .flex-3a .byline {
      h3 {
        font-size: 0.65rem;
      }
    }
  }

  @media screen and (min-width: 800px) {
    .article-bullet .flex-3a .byline {
      h3 {
        font-size: 0.75rem;
      }
    }
  }

  @media screen and (min-width: 1030px) {
    justify-content: center;

    .flex-2 {
      width: 33%;
      h1 {
        font-size: 1.8rem;
      }
    }
    .flex-1a {
      height: 100%;
      width: inherit;
      justify-content: flex-start;
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
      width: 38%;
      .flex-2a h1 {
        font-size: 1.15rem;
      }
    }
    .subtitle > h3 {
      display: initial;
    }
    .flex-4 {
      width: 25%;

      .isSecondary {
        display: initial;
      }
    }
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    margin: 1rem auto;
  }
`;

export default function AboveFold({ heroArticle1, heroArticle2, news }) {
  return (
    <StyledAboveFold className='flex-1'>
      <div className='flex-2'>
        <ArticleTile contentObject={heroArticle1} isSecondary={false} />
      </div>
      <div className='flex-3'>
        {news ? (
          news
            .slice(0, 3)
            .map((news, index) => <ArticleBullet contentObject={news} key={index} />)
        ) : (
          <Skeleton count={16} />
        )}
      </div>
      <div className='flex-4'>
        <ArticleTile contentObject={heroArticle2} isSecondary={true} />
      </div>
    </StyledAboveFold>
  );
}
