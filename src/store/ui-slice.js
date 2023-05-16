import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, newProductFormIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    toggleNewProduct(state) {
      state.newProductFormIsVisible = !state.newProductFormIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
