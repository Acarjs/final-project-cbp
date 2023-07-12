import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PageSection = ({ title, product }) => {
  return (
    <Wrapper>
      <div>
        <h3 className="section-center">
          <Link to="/">Home |</Link>
          {product && <Link to="/products">Products |</Link>} {title}
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--red-900);
  width: 100%;
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-500);

  a {
    color: var(--primary-0);
    padding: 0.5rem;
    transition: var(--transition);
  }

  a:hover {
    color: var(--primary-500);
  }
`

export default PageSection
