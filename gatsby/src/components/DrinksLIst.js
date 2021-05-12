import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const DrinkGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 4rem;
  grid-auto-rows: auto auto 500px;
`;

const DrinkStyles = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0;
  }
`;

function SingleDrink({ eachDrink }) {
  return (
    <DrinkStyles>
      <Link to={`/${eachDrink.slug.current}`}>
        <h2>
          <span className="mark">{eachDrink.teaName}</span>
        </h2>
      </Link>
      <p>
        {eachDrink.toppings
          .map((eachTopping) => eachTopping.toppingName)
          .join(', ')}
      </p>
      <Img fluid={eachDrink.image.asset.fluid} alt={eachDrink.teaName} />
    </DrinkStyles>
  );
}

export default function DrinksList({ drinks }) {
  return (
    <DrinkGridStyles>
      {drinks.map((eachDrink) => (
        <SingleDrink key={eachDrink.id} eachDrink={eachDrink} />
      ))}
    </DrinkGridStyles>
  );
}
