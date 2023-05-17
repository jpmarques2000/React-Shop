import React, { Fragment } from "react";

import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const CartButton = () => {
  const dispatch = useDispatch();
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  const toggleNewProductFormHandler = () => {
    dispatch(uiActions.toggleNewProduct());
  };

  return (
    <Fragment>
      <button onClick={toggleNewProductFormHandler} className={classes.button}>
        <span>New Product</span>
      </button>
      <button onClick={toggleCartHandler} className={classes.button}>
        <span>My Cart</span>
        <span className={classes.badge}>{cartTotalQuantity}</span>
      </button>
    </Fragment>
  );
};

export default CartButton;
