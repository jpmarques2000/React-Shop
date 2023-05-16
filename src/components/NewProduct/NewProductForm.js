import React, { useRef } from "react";

import Modal from "../UI/Modal";
import classes from "./NewProductForm.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import Input from "./Input";

const NewProductForm = () => {
  const dispatch = useDispatch();

  const nameInputRef = useRef();
  const descInputRef = useRef();
  const priceInputRef = useRef();
  const imageUrlInputRef = useRef();

  const closeNewProductFormHandler = () => {
    dispatch(uiActions.toggleNewProduct());
  };

  const addProductHandler = (event) => {
    event.preventDefault();

    const productName = nameInputRef.current.value;
    const productDescription = descInputRef.current.value;
    const productPrice = priceInputRef.current.value;
    const productImageUrl = imageUrlInputRef.current.value;

    console.log({
      productName,
      productDescription,
      productPrice,
      productImageUrl,
    });
  };

  const NewProductFormContent = (
    <form className={classes.form} onSubmit={addProductHandler}>
      <h2>New Product</h2>
      <Input
        ref={nameInputRef}
        className={classes.control}
        label="Name"
        input={{
          id: "name",
          type: "text",
        }}
      />
      <Input
        ref={descInputRef}
        className={classes.control}
        label="Description"
        input={{
          id: "description",
          type: "text",
        }}
      />
      <Input
        ref={priceInputRef}
        className={classes.control}
        label="Price"
        input={{
          id: "price",
          type: "number",
          defaultValue: "0",
        }}
      />
      <Input
        ref={imageUrlInputRef}
        className={classes.control}
        label="Image Url"
        input={{
          id: "image",
          type: "text",
        }}
      />
      <button>Add</button>
    </form>
  );

  return (
    <Modal onClose={closeNewProductFormHandler}>{NewProductFormContent}</Modal>
  );
};

export default NewProductForm;
