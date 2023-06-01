import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";
import productSlice from "./product-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
    product: productSlice.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
