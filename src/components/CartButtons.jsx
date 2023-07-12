import React from 'react'
import styled from 'styled-components'
import { FaUserCheck, FaUserTimes, FaShoppingCart } from 'react-icons/fa'
import { BiSolidUserPlus } from 'react-icons/bi'
import { useProductsContext } from '../context/product_context'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const CartButtons = () => {
  const data = useProductsContext()
  const { closeSidebar } = data
  const { totalItems, clearCart } = useCartContext()

  const { loginWithRedirect, myUser, logout } = useUserContext()

  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{totalItems}</span>
        </span>
      </Link>

      {myUser ? (
        <button
          type="button"
          className="log-btn logout"
          onClick={() => {
            clearCart()
            logout({ returnTo: window.location.origin })
          }}
        >
          Logout <FaUserTimes />
        </button>
      ) : (
        <button type="button" className="log-btn" onClick={loginWithRedirect}>
          Login <BiSolidUserPlus />
        </button>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 15rem;

  .cart-btn {
    color: var(--red-999);
    font-size: 1.2rem;
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
    font-weight: 700;
  }

  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.5rem;
      margin-left: 3px;
    }
  }

  .cart-value {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--green-dark);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--green-light);
    padding: 11px;
  }

  .log-btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: 700;
    justify-content: center;
    gap: 3px;
    background: transparent;
    border-color: transparent;
    font-size: 1.2rem;
    color: var(--primary-999);
    letter-spacing: var(--spacing);
    svg {
      font-size: 1.5rem;
    }
  }
`

export default CartButtons
