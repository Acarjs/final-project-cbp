import React from 'react'
import styled from 'styled-components'
import { useProductsContext } from '../context/product_context'
import Loading from './Loading.jsx'
import Error from './Error.jsx'
import Product from './Product.jsx'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext()

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <Wrapper className="section">
      <div>
        <h3 className="title">Featured Products</h3>
      </div>
      <div className="section-center featured">
        {featured.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
      <Link to="/products" className="btn">
        all products
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--primary-100);

  .featured {
    margin: 2rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 400px;
    }
  }

  .btn {
    display: block;
    width: 175px;
    margin: 0 auto;
    text-align: center;
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts
