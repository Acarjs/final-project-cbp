import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { AiFillCloseCircle } from 'react-icons/ai'
import { links } from '../utils/constants.jsx'
import { Link } from 'react-router-dom/'
import Footer from './Footer'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/product_context'
import { useUserContext } from '../context/user_context'

const Sidebar = () => {
  const data = useProductsContext()
  const { myUser } = useUserContext()

  const { isSidebarOpen, closeSidebar } = data

  return (
    <SidebarWrapper>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className="sidebar-header">
          <img src={logo} alt="Besiktas Logo" className="logo" />
          <button type="button" className="close-btn" onClick={closeSidebar}>
            <AiFillCloseCircle />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            )
          })}
          {myUser && (
            <li>
              <Link to="/checkout" onClick={closeSidebar}>
                checkout
              </Link>
            </li>
          )}
        </ul>
        <CartButtons />
        <Footer />
      </aside>
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--red-700);
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0.2rem;
  }

  .close-btn:hover {
    color: var(--red-300);
  }

  .links a {
    color: var(--primary-999);
    display: block;
    font-weight: 700;
    text-transform: capitalize;
    font-size: 1rem;
    letter-spacing: var(--spacing);
    padding: 0.5rem 1rem;
    transition: var(--transition);
  }

  .links a:hover {
    padding-bottom: 2rem;
    font-size: 1.2rem;
    background: var(--primary-200);
    color: var(--primary-999);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--primary-0);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  .cart-btn-wrapper {
    margin: 2rem auto;
  }

  @media (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
