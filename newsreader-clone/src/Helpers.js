import React from 'react'
import styled from 'styled-components'

const HelperGems = styled.span`
 span {
  padding-right: 2.75rem;
 }
`
export default function Helpers() {

  return (
    <HelperGems className="helpers">
      <span className="icon"><i className="fa fa-bookmark-o" aria-hidden="true"></i></span>
      <span className="icon"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></span>
    </HelperGems>
  )
}




