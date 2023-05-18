import axios from "axios";
// import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8800/cart/");

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
      console.log(error);
    }
  };
};

export const sendCartData = (cart) => {
  return async () => {
    const sendCartRequest = async () => {
      await axios
        .post("http://localhost:8800/cart/", {
          total_price: cart.totalPrice,
          total_quantity: cart.totalQuantity,
        })
        .then((response) => {
          const { data } = response;
          console.log(data);
        });
      // await axios
      //   .post("http://localhost:8800/cartItem/", {
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
    } catch (error) {
      console.log(error);
    }
  };
};
