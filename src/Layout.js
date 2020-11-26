import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 48px);
  justify-content: space-between;
`;

export default function Layout(props) {
  return (
    <>
      <nav className='site-header'>
        <Link className='root' to='/'>
          Mydiem
        </Link>
        <span className='site-header-right'>
          <i className='fa fa-search'></i>
          <i className='fa fa-bookmark-o'></i>
          <i className='fa fa-bell'></i>
          <img src={localStorage.getItem('profile')} alt='user avatar' width='32px' style={{ borderRadius: '50%' }} />
        </span>
      </nav>
      <StyledContainer>
      {props.children}
      <Footer/>  
      </StyledContainer>
    </>
  );
}
