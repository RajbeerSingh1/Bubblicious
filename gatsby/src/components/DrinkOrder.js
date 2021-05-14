import React from 'react';
import Img from 'gatsby-image';
import MenuItemStyles from '../styles/MenuItemStyles';
import formatMoney from '../utils/formatMoney';
import calculatePrice from '../utils/calculatePrice';

export default function DrinkOrder({ order, drinks, removeFromOrder }) {
  return (
    <>
      {order.map((singleOrder, index) => {
        const drink = drinks.find(
          (eachDrink) => eachDrink.id === singleOrder.id
        );
        console.clear();
        console.log(drink);
        return (
          <MenuItemStyles key={singleOrder.id}>
            <Img fluid={drink.image.asset.fluid} />
            <h2>{drink.teaName}</h2>
            <p>
              {formatMoney(calculatePrice(drink.price, singleOrder.size))}
              <button
                type="button"
                className="remove"
                title={`Remove ${singleOrder.size} ${drink.teaname} from Order`}
                onClick={() => removeFromOrder(index)}
              >
                &times;
              </button>
            </p>
          </MenuItemStyles>
        );
      })}
    </>
  );
}
