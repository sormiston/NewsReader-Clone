import React from 'react'
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledHeader = styled.header` 
  section {
    max-height: none !important;
    
  }
  `

export default function Header({ article }) {

  return (
    <StyledHeader>
      <section className="hero is-dark">
        <div className="hero-body">
          <h1 className="title is-4">
            {article.company}
          </h1>
        </div>
      </section>
      <figure className="image is-3by2">
        <img src={article.imgLarge} />
      </figure>
      <figcaption>{article.photoCredit}</figcaption>
      <div className="container">
        <div className="title is-4">{article.headline}</div>
        <div className="subtitle is-6">{article.subHeadline}</div>

        <div className="icon-bank">
          <span className="icon"><i className="fa fa-twitter-square" aria-hidden="true"></i></span>
          <span className="icon"><i className="fa fa-linkedin-square" aria-hidden="true"></i></span>
          <span className="icon"><i className="fa fa-facebook-square" aria-hidden="true"></i></span>
          <span className="icon"><i className="fa fa-bookmark-o" aria-hidden="true"></i></span>
          <span className="icon"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></span>
        </div>

        <div className="media">
          <div className="media-left"></div>
          <figure className="image is-48x48">
            <img src={`${article.profile}`} alt="" className="is-rounded" />
          </figure>
          <section className="media-content">
            <div className="content px-3">
              <h6 className="title is-6">{article.author}</h6>
              <div className="subtitle is-6">{article.date}{'\u2022'} 5min read {'\u2605'}</div>
            </div>
          </section>
        </div>
      </div>
    </StyledHeader>
  )
}
