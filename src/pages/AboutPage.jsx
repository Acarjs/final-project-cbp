import React from 'react'
import PageSection from '../components/PageSection'
import styled from 'styled-components'
import AboutImage from '../assets/kartal_yuvasi_img.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageSection title="about" />
      <Wrapper className="page section section-center">
        <h3 className="title">About us</h3>
        <div className="about-us">
          <article>
            <h5>Kartal Yuvasi</h5>
            <p>
              Kartal Yuvası was initially established as BJKSTORE in 2001 with a
              view to offer licensed merchandises to the great supporters of
              Besiktas and to add value to our club. BJKSTORE's name was changed
              to "KARTAL YUVASI" under the resolution adopted by the Board in
              2007. Our club was awarded the "TDK (Turkish Language Institution)
              Honor Award" by Turkish Language Institution for its contribution
              to the preservation of Turkish languages by way of the said change
              of title.
              <br />
              <br />
              In 2011, our online shopping portal was opened at
              kartalyuvasi.com.tr with a view to offer our original licensed
              Besiktas merchandises to our supported based at home or in abroad
              on 24/7 basis. For the black eagles, who are based in Europe; we
              offer our merchandises at kartalyuvasi.eu. We do not sell
              merchandises via phone. In this initiative, we were inspired and
              driven by the fact that being a Besiktas supporter is not just
              about the match day but is an essential part of our lives.
              <br />
              <br />
              Kartal Yuvası, which continues growing at a fast pace, has some 65
              points of sale, 63 of which are physical stores and 2 of which are
              online shopping stores, by the year 2019. Our club will continue
              its efforts to increase the number of its points of sales in order
              to rapidly and reliably meet the expectations and needs of the
              great supporters of Besiktas and to deliver them high quality
              services.
            </p>
          </article>
          <img src={AboutImage} alt="Kartal Yuvasi Image" />
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  h3.title {
    margin-bottom: 2rem;
  }
  .about-us {
    display: flex;
    flex-direction: column;
  }
  img {
    border-radius: var(--radius);
    width: 100%;
    height: 400px;
    margin-top: 2.5rem;
    object-fit: contain;
  }

  @media (min-width: 992px) {
    .about-us {
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }
  }
`

export default AboutPage
