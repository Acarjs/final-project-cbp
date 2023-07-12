import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { useUserContext } from '../context/user_context'

const CartTotals = () => {
  const { totalAmount, shippingFee } = useCartContext()
  const { myUser, loginWithRedirect } = useUserContext()

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            {' '}
            subtotal: <span> €{totalAmount}</span>{' '}
          </h5>
          <p>
            shipping: <span>€{shippingFee}</span>{' '}
          </p>
          <hr />
          <h4>
            Total: <span> €{totalAmount + shippingFee} </span>
          </h4>
        </article>
        {myUser ? (
          <Link to="/checkout" className="btn">
            go to checkout
          </Link>
        ) : (
          <button type="button" onClick={loginWithRedirect} className="btn">
            {' '}
            Login{' '}
          </button>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--primary-999);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 150px 1fr;
  }
  p {
    text-transform: capitalize;
    font-weight: 500;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
    background: var(--green-dark);
  }
`

export default CartTotals
