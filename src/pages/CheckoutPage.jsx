import React from 'react'
import styled from 'styled-components'
import { PageSection, StripeCheckout } from '../components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const { cart } = useCartContext()

  return (
    <main>
      <PageSection title="checkout" />

      <Wrapper className="page-80">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Your cart is empty at the moment.</h2>
            <Link to="/products" className="btn">
              start shopping
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 2rem;
      text-transform: none;
    }
  }
`

export default CheckoutPage
