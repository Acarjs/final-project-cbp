import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/product_context'
import { useUserContext } from '../context/user_context'

const Navbar = () => {
  const data = useProductsContext()
  const { myUser } = useUserContext()

  const { openSidebar } = data

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Besiktas Logo" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
          {myUser && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 2rem auto 0;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--primary-900);
    cursor: pointer;
    svg {
      font-size: 1.8rem;
    }
  }

  .nav-links {
    display: none;
  }

  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--primary-999);
        font-size: 1rem;
        font-weight: 700;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        transition: var(--transition);
        &:hover {
          border-bottom: 2px solid var(--primary-999);
          font-size: 1.2rem;
          font-weight: 800;
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Navbar
