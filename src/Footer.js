import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from './StyledMixins';

const StyledFooter = styled.div`
  footer {
    display: flex;
    justify-content: space-around;
  }

  & > * {
    margin-top: 3.5rem;
  }
  & i {
    margin: 0 1rem;
  }

  & .right {
    display: none;
    ${mediaQueries('tablet')`
      display: block;
      max-width: 50%;
      & li {
        text-align: left;
      }
      `}
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <footer className='footer'>
        <div className='content has-text-centered'>
          <h6>Made with &#10084;&#65039; by Sean Ormiston</h6>
          <p>This is my first SPA made with React!</p>
          <div className='icons'>
            <a href='https://github.com/sormiston'>
              <i className='fab fa-github fa-3x'></i>
            </a>
            <a href='https://www.linkedin.com/in/sormiston/'>
              <i className='fab fa-linkedin fa-3x'></i>
            </a>
          </div>
        </div>
        <div className='content has-text-centered right'>
          Test the backend by leaving a comment!
          <ul>
            <li>Click any article</li>
            <li>Click the speech bubble icon</li>
            <li>You can edit your own comments, but not others...</li>
          </ul>
        </div>
      </footer>
    </StyledFooter>
  );
}
