import React from "react";

import classes from "./ShopProducts.module.css";
import ProductItem from "./ProductItem";
import Card from "../UI/Card";
import { useSelector } from "react-redux";

const ShopProducts = () => {
  const productsList = useSelector((state) => state.product.products);

  return (
    <section className={classes.product}>
      <h1>Choose your products</h1>
      <Card>
        <ul>
          {productsList &&
            productsList.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                price={product.price}
                title={product.name}
                description={product.description}
              />
            ))}
        </ul>
      </Card>
    </section>
  );
};

export default ShopProducts;
