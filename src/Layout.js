import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout(props) {
  return (
    <>
    <nav className='site-header'>
      <Link className='root' to='/' exact>
        Mydiem
      </Link>
      <span className='site-header-right'>
        <i className='fa fa-search'></i>
        <i className='fa fa-bookmark-o'></i>
        <i className='fa fa-bell'></i>
        <img
          src={localStorage.getItem('profile')}
          width='32px'
          style={{ borderRadius: '50%' }}
        />
      </span>
    </nav>
      {props.children}
      </>
  )
}
