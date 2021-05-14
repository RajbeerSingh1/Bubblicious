import calculatePrice from './calculatePrice';

export default function calculateOrderTotal(order, drinks) {
  const total = order.reduce((acc, singleOrder) => {
    const drink = drinks.find(
      (particularDrink) => particularDrink.id === singleOrder.id
    );
    return acc + calculatePrice(drink.price, singleOrder.size);
  }, 0);
  return total;
}
