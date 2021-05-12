import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const DrinksGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

export default function SingleDrinkPage({ data: { drinks } }) {
  return (
    <DrinksGrid>
      <Img fluid={drinks.image.asset.fluid} />
      <div>
        <h2 className="mark">{drinks.teaName}</h2>
        <ul>
          {drinks.toppings.map((eachTopping) => (
            <li key={eachTopping.id}>{eachTopping.toppingName}</li>
          ))}
        </ul>
      </div>
    </DrinksGrid>
  );
}

export const query = graphql`
  query($slug: String!) {
    drinks: sanityDrinks(slug: { current: { eq: $slug } }) {
      id
      teaName
      toppings {
        id
        toppingName
      }
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
