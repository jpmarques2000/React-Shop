import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [
      // {
      //   id: "p1",
      //   price: 6,
      //   title: "My First Book",
      //   description: "The first book I ever wrote",
      // },
      // {
      //   id: "p2",
      //   price: 5,
      //   title: "My Second Book",
      //   description: "The second book I ever wrote",
      // },
      // {
      //   id: "p3",
      //   price: 6,
      //   title: "My First Book",
      //   description: "The first book I ever wrote",
      // },
      // {
      //   id: "p4",
      //   price: 5,
      //   title: "My Second Book",
      //   description: "The second book I ever wrote",
      // },
      // {
      //   id: "p5",
      //   price: 6,
      //   title: "My First Book",
      //   description: "The first book I ever wrote",
      // },
      // {
      //   id: "p6",
      //   price: 5,
      //   title: "My Second Book",
      //   description: "The second book I ever wrote",
      // },
    ],
    changed: false,
  },
  reducers: {
    replaceProduct(state, action) {
      state.products = action.payload.products;
    },
    addNewProduct(state, action) {
      const newProduct = action.payload;
      state.changed = true;

      state.products.push({
        id: newProduct.id,
        name: newProduct.name,
        description: newProduct.description,
        price: +newProduct.price,
        imageUrl: newProduct.imageUrl,
      });
    },
    updateProduct(state, action) {},
  },
});

export const productActions = productSlice.actions;

export default productSlice;
