import React from 'react';
import { graphql } from 'gatsby';
import DrinksList from '../components/DrinksLIst';
import ToppingsFilter from '../components/ToppingsFilter';

export default function HomePage({ data, pageContext }) {
  const drinks = data.allSanityDrinks.nodes;
  return (
    <>
      <ToppingsFilter activeTopping={pageContext.slug} />
      <DrinksList drinks={drinks} />
    </>
  );
}

export const query = graphql`
  query TeaQuery($slug: [String]) {
    allSanityDrinks(
      filter: { toppings: { elemMatch: { slug: { current: { in: $slug } } } } }
    ) {
      nodes {
        teaName
        id
        slug {
          current
        }
        toppings {
          toppingName
          id
        }
        image {
          asset {
            fixed(width: 200, height: 200) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
