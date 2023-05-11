import React from "react";

import classes from "./CartButton.module.css";

const CartButton = () => {
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>2</span>
    </button>
  );
};

export default CartButton;
