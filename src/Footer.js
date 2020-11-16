import React from 'react';
import styled from 'styled-components';
import { breakpoints } from './StyledMixins';

const StyledFooter = styled.div`
  footer {
    display: flex;
    justify-content: space-around;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
  & .left {
    padding: 2rem;
    flex: 1 0 50%;
    
  }
  & > * {
    margin-top: 3.5rem;
  }
  & i {
    margin: 0 1rem;
  }

  & .right {
    display: none;
    @media screen and (min-width: ${breakpoints.tablet}px) {
      display: block;
      flex: 0 1 50%;
      border: 2px solid gold;
      border-radius: 1em;
      padding: 2rem 3rem;
      & li {
        text-align: left;
      }
    }
    @media screen and (min-width: ${breakpoints.desktopL}px) {
      padding: 2rem 4rem;
      max-width: 40vw;
      margin: 0 5rem;
      border-width: 1px;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <footer className='footer'>
        <div className='content has-text-centered left'>
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
