import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import useForm from '../utils/useForm';
import calculatePrice from '../utils/calculatePrice';
import formatMoney from '../utils/formatMoney';
import OrderStyles from '../styles/OrderStyles';
import MenuItemStyles from '../styles/MenuItemStyles';
import useDrink from '../utils/useDrink';
import DrinkOrder from '../components/DrinkOrder';
import calculateOrderTotal from '../utils/calculateOrderTotal';

export default function OrderPage({ data }) {
  const drinks = data.drinks.nodes;
  const { values, updateValue } = useForm({
    name: '',
    email: '',
  });
  const { order, addToOrder, removeFromOrder } = useDrink({
    drinks,
    inputs: values,
  });
  return (
    <>
      <OrderStyles>
        <fieldset>
          <legend>Your Info</legend>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={updateValue}
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={updateValue}
            />
          </label>
        </fieldset>

        <fieldset className="menu">
          <legend>Menu</legend>
          {drinks.map((eachDrink) => (
            <MenuItemStyles key={eachDrink.id}>
              <Img
                width="50"
                height="50"
                fluid={eachDrink.image.asset.fluid}
                alt={eachDrink.teaName}
              />
              <div>
                <h2>{eachDrink.teaName}</h2>
              </div>
              <div>
                {['M', 'L'].map((eachSize) => (
                  <button
                    key={eachSize}
                    type="button"
                    onClick={() =>
                      addToOrder({
                        id: eachDrink.id,
                        size: eachSize,
                      })
                    }
                  >
                    {eachSize}{' '}
                    {formatMoney(calculatePrice(eachDrink.price, eachSize))}
                  </button>
                ))}
              </div>
            </MenuItemStyles>
          ))}
        </fieldset>
        <fieldset className="order">
          <legend>Order</legend>
          <div>
            <DrinkOrder
              order={order}
              removeFromOrder={removeFromOrder}
              drinks={drinks}
            />
          </div>
        </fieldset>
        <fieldset>
          <h2>
            Your Total is: {formatMoney(calculateOrderTotal(order, drinks))}
          </h2>
          <button type="submit">Order Ahead!</button>
        </fieldset>
      </OrderStyles>
    </>
  );
}

export const query = graphql`
  query {
    drinks: allSanityDrinks {
      nodes {
        teaName
        id
        price
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
