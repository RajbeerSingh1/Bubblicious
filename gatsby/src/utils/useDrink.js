import { useState } from 'react';

export default function useDrink({ drinks, inputs }) {
  const [order, setOrder] = useState([]);
  function addToOrder(orderedDrink) {
    setOrder([...order, orderedDrink]);
  }
  function removeFromOrder(index) {
    setOrder([...order.slice(0, index), ...order.slice(index + 1)]);
  }
  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
