import React, { useState } from 'react'
import styled from 'styled-components'
import AmountButtons from './AmountButtons.jsx'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context.jsx'

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext()

  const { id, stock, sizes } = product

  const [mainSize, setMainSize] = useState(sizes[0])

  const [amount, setAmount] = useState(1)

  const increase = () => {
    setAmount((prevAmount) => {
      let currentAmount = prevAmount + 1
      if (currentAmount > stock) {
        currentAmount = stock
      }

      return currentAmount
    })
  }

  const decrease = () => {
    setAmount((prevAmount) => {
      let currentAmount = prevAmount - 1

      if (currentAmount < 1) {
        currentAmount = 1
      }

      return currentAmount
    })
  }

  return (
    <Wrapper>
      <div className="sizes">
        <span> Sizes: </span>
        <div>
          {sizes.map((size, index) => {
            return (
              <button
                key={index}
                className={`${
                  mainSize === size ? 'size-btn active' : 'size-btn'
                }`}
                onClick={() => setMainSize(size)}
              >
                {size}
              </button>
            )
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, mainSize, amount, product)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .sizes {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      font-weight: 700;
    }
    div {
      display: flex;
      gap: 1rem;
    }

    .size-btn {
      background: var(--primary-300);
      color: var(--primary-0);
      display: inline-block;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      cursor: pointer;
      border: none;
    }

    .active {
      background-color: var(--red-900);
      color: var(--primary-0);
    }
  }
`

export default AddToCart
