import React from 'react'
import styled from 'styled-components'

export default function Footer({ article, toggleComments }) {

  return (
    <>
      <div className="container">
        <div className="tags are-medium">
          <a className="tag is-light" href="">Tag1</a>
          <span className="tag is-light">Tag2</span>
          <span className="tag is-light">Tag3</span>
          <span className="tag is-light">Tag4</span>
          <span className="tag is-light">Tag5</span>
        </div>
      </div>
      <div className="level">
        <div className="level-left px-5">
          <span className="icon"><i className="fa fa-hand-lizard-o" aria-hidden="true"></i><span>{article.numClaps}</span></span>
          <span className="icon px-6" ><i className="fa fa-comment" onClick={toggleComments}></i></span>
        </div>

      </div>
      <div className="media">
        <div className="media-left"></div>
        <figure className="image is-48x48">
          <img src={`${article.profile}`} alt="" className="is-rounded" />
        </figure>
        <section className="media-content">
          <div className="content px-3">
            <p className="subtitle supertitle-actually">WRITTEN BY</p>
            <h6 className="title is-6">{article.author}</h6>
            <div className="subtitle is-6">{article.date}<a className="button is-small is-info is-outlined" href="">Follow</a></div>
          </div>
        </section>

      </div>
    </>

  )
}