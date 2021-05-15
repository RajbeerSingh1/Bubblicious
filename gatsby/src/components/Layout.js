import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import 'normalize.css';
import stripes from '../assets/images/stripes.svg';

const BorderStyles = styled.div`
  max-width: 1000px;
  margin: 8rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 8rem);
  background: url(${stripes});
  padding: 5rem;
  padding: clamp(5px, 1vw, 25px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
  border: 5px solid white;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const LayoutStyles = styled.div`
  background: white;
  padding: 2rem;
  h1 {
    font-size: 3rem;
    text-align: center;
    padding: 1rem;
    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
  h3 {
    text-align: center;
    padding: 1rem;
    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <BorderStyles>
        <LayoutStyles>
          <Nav />
          <h1>THE BEST BUBBLE TEA DOWNTOWN!</h1>
          <h3>OPEN 11 AM TO 11 PM. EVERY SINGLE DAY.</h3>
          {children}
          <Footer />
        </LayoutStyles>
      </BorderStyles>
    </>
  );
}
