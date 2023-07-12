import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Stars = ({ stars, reviews }) => {
  const starsArray = Array.from({ length: 5 }, (v, index) => {
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= index + 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  }) // v will be undefined

  return (
    <Wrapper>
      <div className="stars-container">
        {starsArray}
        <span className="stars">({stars})</span>
      </div>
      <p> {reviews} customer reviews</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
  span {
    color: #ffc019;
    font-size: 1.2rem;
    margin-left: 0.2rem;
  }

  .stars-container {
    display: flex;
  }

  .stars {
    font-size: 0.8rem;
  }

  p {
    margin-left: 0.5rem;
    margin-bottom: 0.4rem;
  }
`

export default Stars
