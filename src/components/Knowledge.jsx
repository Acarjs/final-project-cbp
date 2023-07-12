import React from 'react'
import styled from 'styled-components'
import { knowledges } from '../utils/constants'

const Knowledge = () => {
  return (
    <Wrapper>
      <div className="section-center">
        {knowledges.map((knowledge) => {
          const { id, icon, title, text } = knowledge
          return (
            <article key={id} className="knowledge">
              <span> {icon} </span>
              <h4> {title} </h4>
              <p> {text} </p>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--primary-999);
  .section-center {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    transform: translateY(3rem);
  }

  span {
    width: 5rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background-color: var(--primary-0);
  }

  .knowledge {
    background-color: var(--red-999);
    border-radius: var(--radius);
    color: var(--primary-0);
    width: 100%;
    text-align: center;
    padding: 1rem;
    p {
      color: var(--primary-0);
      text-align: left;
    }
  }

  @media (min-width: 992px) {
    .section-center {
      display: flex;
      flex: 1;
      flex-direction: row;
    }
    .knowledge {
      width: 33%;
    }
  }
`

export default Knowledge
