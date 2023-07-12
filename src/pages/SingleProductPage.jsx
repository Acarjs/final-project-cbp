import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/product_context'
import { single_product_url as url } from '../utils/constants'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageSection,
} from '../components'

const SingleProductPage = () => {
  const { id } = useParams()
  // console.log(useParams())
  const history = useHistory()

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(`${url}/${id}.json`)
    // console.log(product)
  }, [id])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/')
      }, 2000)
    }
  }, [error])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  const {
    name,
    price,
    stock,
    stars,
    reviews,
    id: product_id,
    brand,
    images,
  } = product

  return (
    <Wrapper>
      <PageSection title={name} product={product} />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h3>{name}</h3>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">€{price}</h5>
            <p className="info">
              <span> Availability : </span>
              {stock > 0 ? (
                'In Stock'
              ) : (
                <span className="no-stock">Out of Stock</span>
              )}
            </p>
            <p className="info">
              <span> Brand : </span>
              {brand}
            </p>
            <p className="info">
              <span> Product ID : </span>
              {product_id}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 2.5rem;
    margin-top: 1rem;

    .content {
      margin: -1rem auto 1rem;
    }
  }
  .price {
    color: var(--red-900);
  }

  .info {
    text-transform: none;

    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 800;
      letter-spacing: 0.05rem;
    }
    .no-stock {
      color: red;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }

    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
