import React from "react";

import classes from "./ShopProducts.module.css";
import ProductItem from "./ProductItem";
import Card from "../UI/Card";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "My Second Book",
    description: "The second book I ever wrote",
  },
  {
    id: "p3",
    price: 6,
    title: "My First Book",
    description: "The first book I ever wrote",
  },
  {
    id: "p4",
    price: 5,
    title: "My Second Book",
    description: "The second book I ever wrote",
  },
  {
    id: "p5",
    price: 6,
    title: "My First Book",
    description: "The first book I ever wrote",
  },
  {
    id: "p6",
    price: 5,
    title: "My Second Book",
    description: "The second book I ever wrote",
  },
];

const ShopProducts = () => {
  return (
    <section className={classes.product}>
      <h1>Choose your products</h1>
      <Card>
        <ul>
          {DUMMY_PRODUCTS.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              price={product.price}
              title={product.title}
              description={product.description}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default ShopProducts;
