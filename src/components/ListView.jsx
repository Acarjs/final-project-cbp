import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, name, price, brand, shipping } = product
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4> {name} </h4>
              <h5 className="price"> €{price} </h5>
              <h4> {brand}</h4>

              {shipping ? (
                <p>Shipping is available</p>
              ) : (
                <p>No shipping available</p>
              )}
              <Link to={`/products/${id}`}>
                <button className="btn">Details</button>
              </Link>
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;
  padding: 1rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 400px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--red-900);
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
  p {
    color: #ffc019;
    max-width: 45em;
    margin-bottom: 1rem;
    font-style: italic;
  }
  .btn {
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`

export default ListView
