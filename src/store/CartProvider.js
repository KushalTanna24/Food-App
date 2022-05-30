import React from "react";

import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemHandler = (item) => {};

  const removeItemHandler = (id) => {};

  const cartContex = {
    items: [],
    totalQuantity: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContex}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
