import React from "react";
import { useDispatch } from "react-redux";

import classes from "./ProductItem.module.css";
import ProductAmountForm from "./ProductAmountForm";
import { cartActions } from "../../store/cart-slice";
import { deleteProductData } from "../../store/product-actions";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { title, id, price, description } = props;

  const formatedPrice = `R$ ${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        description,
        amount,
      })
    );
  };

  const deleteProductHandler = () => {
    dispatch(deleteProductData(id));
  };

  return (
    <li className={classes.products}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={props.image} alt="Product" />
      </div>
      <div className={classes.products_container}>
        <div>
          <h3>{props.title}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{formatedPrice}</div>
          <div className={classes.actions}>
            <button onClick={deleteProductHandler}>Delete</button>
          </div>
        </div>
      </div>

      <div className={classes.amount_form}>
        <ProductAmountForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default ProductItem;
