import React from 'react'
import styled from 'styled-components'

const Error = () => {
  return (
    <Wrapper className="section section-center">
      <h4>An error occurred while processing your request...</h4>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  color: var(--red-700);
  text-align: center;

  h4 {
    text-transform: none;
  }
`

export default Error
