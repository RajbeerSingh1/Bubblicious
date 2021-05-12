import path from 'path';

async function turnDrinksIntoPages({ graphql, actions }) {
  // Get a template
  const drinkTemplate = path.resolve('./src/templates/Singledrink.js');
  // Query for Drinks
  const { data } = await graphql(`
    query {
      drinks: allSanityDrinks {
        nodes {
          slug {
            current
          }
          teaName
        }
      }
    }
  `);
  // Looping and creating pages
  data.drinks.nodes.forEach((eachDrink) => {
    actions.createPage({
      path: `/${eachDrink.slug.current}`,
      component: drinkTemplate,
      context: {
        slug: eachDrink.slug.current,
      },
    });
  });
}

async function turnToppingsIntoPages({ graphql, actions }) {
  // Get a template
  const toppingTemplate = path.resolve('./src/pages/index.js');
  // Querying
  const { data } = await graphql(`
    query {
      toppings: allSanityToppings {
        nodes {
          toppingName
          id
          slug {
            current
          }
        }
      }
    }
  `);
  // Create page for each topping
  data.toppings.nodes.forEach((eachTopping) => {
    actions.createPage({
      path: `/${eachTopping.slug.current}`,
      component: toppingTemplate,
      context: {
        slug: eachTopping.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  await Promise.all([
    turnDrinksIntoPages(params),
    turnToppingsIntoPages(params),
  ]);
}
