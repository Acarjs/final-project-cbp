import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <p>Be the first to hear the news and special discount!</p>
      </div>
      <form
        action="https://formspree.io/f/mknlwllr"
        method="POST"
        className="contact-form"
      >
        <input
          type="email"
          name="email"
          className="form-input"
          placeholder="enter your email"
        />
        <button type="submit" className="submit-btn">
          submit
        </button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--primary-100);
  padding: 5rem 0;
  p {
    text-align: center;
    line-height: 1.5;
    font-weight: 700;
    font-size: 1.2rem;
    /* padding: 1rem; */
  }

  .contact-form {
    width: 90vw;
    /* max-width: 500px; */
    display: flex;
    justify-content: center;
    margin: auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 0.5rem;
    border: 2px solid var(--primary-999);
  }

  .form-input {
    width: 50vw;
    max-width: 300px;
    border-right: none;
    color: var(--primary-700);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }

  .submit-btn {
    background: var(--primary-999);
    color: var(--primary-0);
    cursor: pointer;
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    text-transform: capitalize;
    transition: var(--transition);
  }

  .submit-btn:hover {
    color: var(--primary-200);
    background: var(--primary-700);
  }

  .form-input::placeholder {
    color: var(--primary-300);
    text-transform: capitalize;
  }
`

export default Contact
