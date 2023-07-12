import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CartContent, PageSection } from '../components'

const CartPage = () => {
  const { cart } = useCartContext()
  if (cart.length < 1) {
    return (
      <main>
        <PageSection title="cart" />
        <Wrapper className="page-80">
          <div className="empty">
            <h2>Your cart is empty at the moment.</h2>
            <Link to="/products" className="btn">
              start shopping
            </Link>
          </div>
        </Wrapper>
      </main>
    )
  }
  return (
    <main>
      <PageSection title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 2rem;
      text-transform: none;
    }
  }
`

export default CartPage
