import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function Comments({ commentOverlay }) {
  const CommentsCard = styled.main`  
     
    position: fixed;
    width: 100%;
    border-top: 1px;
    border-radius: 5%;
    background-color: white;
    height: ${commentOverlay ? '85%' : '1%'};
    z-index: 0;
    bottom: 1%;
    transition: height 2s 2s;
    
     
    
  `
  return (
    <div>
      <CommentsCard>
        <div className="container">

        </div>
      </CommentsCard>
    </div>

  )
}