import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((item) => {
          return <Product key={item.id} {...item} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 2rem;
  img {
    height: 400px;
    object-fit: cover;
  }

  .products-container {
    display: grid;
    gap: 2.5rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default GridView
