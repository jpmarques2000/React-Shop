import axios from "axios";
import { uiActions } from "./ui-slice";
// import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/cart/");

      if (!response.ok) {
        throw new Error("Could not fetch products data");
      }
      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      console.log(cartData);
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Failed to fetch cart data",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );
    const sendCartRequest = async () => {
      await axios
        .post("http://localhost:8080/cart/", {
          total_price: cart.totalPrice,
          total_quantity: cart.totalQuantity,
        })
        .then((response) => {
          const { data } = response;
          console.log(data);
        });
      // await axios
      //   .post("http://localhost:8080/cartItem/", {
      //     prod_id: cart.cartItems.id,
      //     cart_id: 1,
      //     quantity: cart.cartItems.quantity,
      //   })
      //   .then((response) => {
      //     const { data } = response;
      //     console.log(data);
      //   });
    };
    try {
      await sendCartRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Cart data successefully sent",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Failed to send cart data!",
        })
      );
    }
  };
};
