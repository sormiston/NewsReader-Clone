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

  font-family: 'Open Sans', 'arial';

  .flex-1a {
    display: flex;
    flex-flow: row-reverse;
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
  h1,
  h3 {
    line-height: 1.2;
  }
  h1 {
    font-size: 1rem;
  }
  h3 {
    font-size: 0.75rem;
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
    h1 {
      margin: 1rem 0;
    }
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
    margin: 0.5rem;

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
    justify-content: center;

    .flex-2 {
      width: 40%;
    }
    .flex-1a {
      height: 100%;
      width: inherit;
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
      width: 30%;
    }
    .subtitle > h3 {
      display: initial;
    }
    .flex-4 {
      width: 30%;

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
  function getBulletSkeleton() {
    if (window.innerWidth < 741) {
      return <Skeleton count={16} />;
    } else if (window.innerWidth < 1030) {
    }
  }

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
