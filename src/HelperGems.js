import React from 'react'
import styled from 'styled-components'

const StyledHelperGems = styled.div`
display: flex;
flex-flow: row nowrap;
flex-basis: 55px;
justify-content: space-between;
margin-right: .35rem;
 
`
export default function HelperGems() {

  return (
    <StyledHelperGems className="helperGems">
      <span className="icon"><i className="fa fa-bookmark-o" aria-hidden="true"></i></span>
      <span className="icon"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></span>
    </StyledHelperGems>
  )
}




