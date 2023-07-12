import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <Wrapper className="amount-btns">
      <button type="button" onClick={decrease} className="amount-btn">
        <FaMinus />
      </button>
      <div className="amount"> {amount} </div>
      <button type="button" onClick={increase} className="amount-btn">
        <FaPlus />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  margin-bottom: 1rem;

  .amount {
    font-size: 2rem;
    font-weight: 700;
    border: 2px solid var(--primary-999);
    width: 3.5rem;
    height: 3.5rem;
    text-align: center;
  }

  .amount-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    font-size: 1.2rem;
  }
`

export default AmountButtons
