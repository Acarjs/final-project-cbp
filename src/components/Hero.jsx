import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import TrunkImg from '../assets/trunk-img.jpeg'

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          Find Your <br />
          New Season <br />
          Jerseys
        </h1>
        <p>
          Shine with your style, treat yourself and update your workout gear!
        </p>
        <Link to="/products" className="btn hero-btn">
          Shop now
        </Link>
      </article>
      <article className="img-container">
        <img
          src={TrunkImg}
          alt="Footballers with Jerseys"
          className="trunk-img"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  /* .img-container {
    display: none;
  } */

  .trunk-img {
    margin: 1.5rem auto;
    width: 100%;
  }

  @media (min-width: 992px) {
    min-height: calc(100vh - 5rem);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 7rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }

    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1.2rem;
    }

    .img-container {
      display: block;
      position: relative;
    }

    .img-container::before {
      content: '';
      position: absolute;
      width: 11%;
      height: 80%;
      background: var(--primary-999);
      bottom: 5.4%;
      left: -10%;
      border-radius: var(--radius);
      z-index: -1;
    }

    .trunk-img {
      border-radius: var(--radius);
      width: 100%;
      height: 500px;
      object-fit: contain;
    }
  }
`

export default Hero
