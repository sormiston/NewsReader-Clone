import React from 'react'

import styled from 'styled-components'
import HeroArticle from './HeroArticle'


export default function AboveFold({ heroArticle1, heroArticle2, news }) {

  const AboveFold = styled.section`
  h1 {
    font-size: 1.75rem;
    line-height: 1.2;
  }
  h3 {
    font-size: 1rem;
  }
  
  
  @media screen and (max-width: 395px) {
    text-overflow: ellipsis;
  .subtitle {
    margin-bottom: -20px;
  }
}
@media screen and (max-width: 1030px) {
  .isSecondary {
    display: none;
  }
  
}
  `

  return (

    <AboveFold>
      <HeroArticle contentObject={heroArticle1} isHero={true} isSecondary={false} />
      {news.map(news => <HeroArticle contentObject={news} isHero={false} />)}
      <HeroArticle contentObject={heroArticle2} isHero={true} isSecondary={true} />

    </AboveFold>

  )
}