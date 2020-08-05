import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

export default function Comments() {
  // ANIMATION CREDIT TO SOLEIL SOLOMON
  const load = (props) => keyframes`
   from {
     height: 1%;
   } 
   to {
     height: 85%;
   }
  `
  // end citaton
  const CommentsCard = styled.main`  
     
    position: fixed;
    width: 100%;
    border-top: 1px;
    border-radius: 5%;
    background-color: white;
    height: 85%;
    z-index: 0;
    bottom: 1%;
    /* ANIMATION CREDIT TO SOLEIL SOLOMON */
    animation: ${load} .5s forwards;
  `
  return (
    <div>
      <CommentsCard>
        <div className="container">
          <h2 className="title is-3 mt-6 ml-5">
            Responses (3)
          </h2>
          <button className="delete"></button>

        </div>
      </CommentsCard>
    </div>

  )
}