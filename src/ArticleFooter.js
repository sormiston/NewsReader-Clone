import React from 'react';

export default function Footer({ article, toggleComments }) {
  return (
    <>
      <div className='container'>
        <div className='tags are-medium pb-1 mb-2'>
          <a className='tag is-light'>Tag1</a>
          <span className='tag is-light'>Tag2</span>
          <span className='tag is-light'>Tag3</span>
          <span className='tag is-light'>Tag4</span>
          <span className='tag is-light'>Tag5</span>
        </div>
      </div>
      <div className='level'>
        <div className='level-left px-5'>
          <div className='icon-bank'>
            <span className='icon'>
              <i className='fa fa-hand-lizard-o' aria-hidden='true'></i>
              <span>{article.numClaps}</span>
            </span>
            <span className='icon px-6'>
              <i className='far fa-comment' onClick={toggleComments}></i>
            </span>
          </div>
        </div>
      </div>
      <div className='media'>
        <div className='media-left'></div>
        <figure className='image is-48x48'>
          <img src={`${article.profile}`} alt='' className='is-rounded' />
        </figure>
        <section className='media-content'>
          <div className='content px-3'>
            <p className='subtitle supertitle-actually'>WRITTEN BY</p>
            <h6 className='title is-5'>{article.author}</h6>
            <div className='subtitle is-6'>{article.date}</div>
          </div>
        </section>
        <div className='media-right'>
          <a className='button is-small is-info is-outlined'>Follow</a>
        </div>
      </div>
    </>
  );
}
