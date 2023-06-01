import { productActions } from "./product-slice";

import axios from "axios";
import { uiActions } from "./ui-slice";

export const fetchProductData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/product/");

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
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Failed to fetch products",
        })
      );
    }
  };
};

export const sendNewProductData = (product) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      await axios
        .post("http://localhost:8080/product/", {
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
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Failed to create new product",
        })
      );
    }
  };
};

export const deleteProductData = (id) => {
  return async (dispatch) => {
    const sendDeleteRequest = async () => {
      await axios.delete("http://localhost:8080/product/" + id).then(() => {});
    };
    try {
      await sendDeleteRequest();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Failed to delete product data",
        })
      );
    }
  };
};

export const updateProductData = (product) => {
  return async (dispatch) => {
    const sendUpdateRequest = async () => {
      await axios
        .put("http://localhost:8080/product/" + product.id, {
          name: product.name,
          description: product.description,
          price: product.price,
          image_url: product.imageUrl,
        })
        .then((response) => {
          console.log(response);
        });
    };
    try {
      await sendUpdateRequest();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Failed to update product data",
        })
      );
    }
  };
};
