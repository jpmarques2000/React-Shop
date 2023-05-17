import { productActions } from "./product-slice";

import axios from "axios";

export const fetchProductData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8800/");

      if (!response.ok) {
        throw new Error("Could not fetch products data");
      }
      const data = await response.json();

      return data;
    };

    try {
      const productData = await fetchData();
      dispatch(
        productActions.replaceProduct({
          products: productData || [],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendNewProductData = (product) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      await axios
        .post("http://localhost:8800/", {
          name: product.name,
          description: product.description,
          price: product.price,
          image_url: product.imageUrl,
        })
        .then((response) => {
          const { data } = response;
          console.log(data);
        });
    };
    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};