import React, { Fragment } from "react";

import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { uiActions } from "../../store/ui-slice";
import { fetchCartData, sendCartData } from "../../store/cart-actions";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();

  const closeCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  const cartOrderHandler = () => {
    dispatch(
      sendCartData({
        totalPrice: cart.totalAmount,
        totalQuantity: cart.totalQuantity,
        cartItems,
      })
    );
  };

  const cartItemsDisplay = (
    <ul className={classes["cart-items"]}>
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
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={closeCartHandler}>
        Close
      </button>
      <button className={classes.button} onClick={cartOrderHandler}>
        Order
      </button>
    </div>
  );

  const cartModalContentDisplay = (
    <Fragment>
      <h2 className={classes.title}>My Cart</h2>
      {cartItemsDisplay}
      <div className={classes.total}>
        <span>Total: </span>
        <span>{`R$ ${totalAmount.toFixed(2)}`}</span>
      </div>
      {modalActions}
    </Fragment>
  );

  return <Modal onClose={closeCartHandler}>{cartModalContentDisplay}</Modal>;
};

export default Cart;
