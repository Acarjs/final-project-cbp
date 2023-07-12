import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'
import { FaTrash } from 'react-icons/fa'

const CartItem = ({ id, image, name, size, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext()

  const increase = () => {
    toggleAmount(id, 'increase')
  }

  const decrease = () => {
    toggleAmount(id, 'decrease')
  }

  return (
    <Wrapper>
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name"> {name}</h5>
          <p className="size">
            {' '}
            size: <span> {size} </span>{' '}
          </p>
          <h5 className="price-small"> €{price} </h5>
        </div>
      </div>
      <h5 className="price"> €{price}</h5>

      <AmountButtons amount={amount} increase={increase} decrease={decrease} />

      <h5 className="subtotal"> €{amount * price} </h5>
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .quantity {
    font-size: 7rem;
  }

  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: contain;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }

  .size {
    color: var(--primary-999);
    /* font-size: 0.75rem; */
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      border: 2px solid var(--primary-999);
      display: inline-block;
      width: 2.5rem;
      height: 2.5rem;
      margin-left: 0.5rem;
      border-radius: var(--radius);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .price-small {
    color: var(--red-900);
  }

  .amount {
    font-size: 1rem;
    font-weight: 700;
    border: 2px solid var(--primary-999);
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
  }

  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
      margin-top: 1rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  .remove-btn {
    color: var(--primary-0);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--red-800);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
  }

  .remove-btn:hover {
    background: var(--red-600);
  }

  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--red-900);
      font-weight: 500;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: var(--red-900);
      font-weight: 500;
    }
    .name {
      font-size: 0.85rem;
    }
    .color {
      font-size: 0.85rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
        margin-top: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`

export default CartItem
