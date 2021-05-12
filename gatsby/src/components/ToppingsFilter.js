import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';

const ToppingsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    padding: 5px;
    align-items: center;
    grid-gap: 0 1rem;
    background: var(--grey);
    border-radius: 2px;
    .count {
      background: white;
      padding: 2px 5px;
    }
    &[aria-current='page'] {
      background: var(--lightGreen);
    }
  }
`;

function countToppings(drinks) {
  const allToppings = drinks.map((eachDrink) => eachDrink.toppings).flat();
  const toppingsObject = allToppings.reduce((accumulator, currentTopping) => {
    const existingTopping = accumulator[currentTopping.id];
    if (existingTopping) {
      existingTopping.count += 1;
    } else {
      accumulator[currentTopping.id] = {
        id: currentTopping.id,
        name: currentTopping.toppingName,
        count: 1,
        slug: currentTopping.slug.current,
      };
    }
    return accumulator;
  }, {});
  const sortedToppings = Object.values(toppingsObject).sort(
    (first, second) => second.count - first.count
  );
  return sortedToppings;
}

export default function ToppingsFilter({ activeTopping }) {
  console.log(activeTopping);
  // Get a list of all the drinks with their toppings.
  const { drinks } = useStaticQuery(graphql`
    query {
      drinks: allSanityDrinks {
        nodes {
          toppings {
            toppingName
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);
  // Count how many drinks in each pizza.
  const toppings = countToppings(drinks.nodes);
  // Loop over toppings and display them with ther count.
  return (
    <ToppingsStyles>
      <Link to="/">
        <span className="name">ALL</span>
        <span className="count">{toppings.length}</span>
      </Link>
      {toppings.map((eachTopping) => (
        <Link
          key={eachTopping.id}
          to={`/${eachTopping.slug}`}
          className={eachTopping.slug === activeTopping ? 'active' : ''}
        >
          <span className="name">{eachTopping.name}</span>
          <span className="count">{eachTopping.count}</span>
        </Link>
      ))}
    </ToppingsStyles>
  );
}
