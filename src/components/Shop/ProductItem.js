import React from "react";

import classes from "./ProductItem.module.css";
import ProductAmountForm from "./ProductAmountForm";

const ProductItem = (props) => {
  const price = `R$ ${props.price.toFixed(2)}`;
  return (
    <li className={classes.products}>
      <div>
        <h3>{props.title}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ProductAmountForm />
      </div>
    </li>
  );
};

export default ProductItem;
