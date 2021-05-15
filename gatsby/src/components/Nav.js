import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;

    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 2rem;
    align-items: center;
  }
  h2 {
    background: -webkit-linear-gradient(#085078, #85d8ce);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 7rem;
  }
  a {
    font-size: 3rem;
    text-decoration: none;
    &:hover {
      color: red;
    }
    &[aria-current='page'] {
      color: red;
    }
  }
  @media (max-width: 600px) {
    h2 {
      font-size: 4rem;
    }
    a {
      font-size: 2.5rem;
      padding: 1rem;
      background-color: var(--grey);
    }
    ul {
      margin-bottom: 2rem;
      grid-template-rows: auto auto;
      grid-template-columns: auto auto;
    }
    .logoItem {
      order: -1;
      grid-column: 1/-1;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li className="logoItem">
          <h2 className="tilt">Bubblicious</h2>
        </li>
        <li>
          <Link to="/order">Order Ahead!</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
