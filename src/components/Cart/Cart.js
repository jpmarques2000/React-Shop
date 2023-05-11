import React from "react";

import { useSelector } from "react-redux";
import Card from "../UI/Card";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>My Cart</h2>
      <ul>
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            item={{
              id: cartItem.id,
              title: cartItem.title,
              totalPrice: cartItem.totalPrice,
              price: cartItem.price,
              quantity: cartItem.quantity,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
