import React, { useRef, useState } from "react";

import Modal from "../UI/Modal";
import classes from "./NewProductForm.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import Input from "./Input";
import { productActions } from "../../store/product-slice";
import { sendNewProductData } from "../../store/product-actions";
import axios from "axios";

const isEmpty = (value) => value.trim() === "";

const NewProductForm = () => {
  const [formInputIsValid, setFormInputIsValid] = useState({
    name: true,
    description: true,
    price: true,
    imageUrl: true,
  });

  const dispatch = useDispatch();

  const nameInputRef = useRef();
  const descInputRef = useRef();
  const priceInputRef = useRef();
  const imageUrlInputRef = useRef();

  const closeNewProductFormHandler = () => {
    dispatch(uiActions.toggleNewProduct());
  };

  const addProductHandler = async (event) => {
    event.preventDefault();

    const productName = nameInputRef.current.value;
    const productDescription = descInputRef.current.value;
    const productPrice = priceInputRef.current.value;
    const productImageUrl = imageUrlInputRef.current.value;

    const productNameIsValid = !isEmpty(productName);
    const productDescriptionIsValid = !isEmpty(productDescription);
    const productPriceIsValid = !isEmpty(productPrice);
    const productImageUrlIsValid = !isEmpty(productImageUrl);

    setFormInputIsValid({
      name: productNameIsValid,
      description: productDescriptionIsValid,
      price: productPriceIsValid,
      imageUrl: productImageUrlIsValid,
    });

    const formIsValid =
      productNameIsValid &&
      productDescriptionIsValid &&
      productPriceIsValid &&
      productImageUrlIsValid;

    if (!formIsValid) {
      return;
    }

    dispatch(
      await sendNewProductData({
        name: productName,
        description: productDescription,
        price: productPrice,
        imageUrl: productImageUrl,
      })
    );

    dispatch(
      productActions.addNewProduct({
        id: Math.random(),
        name: productName,
        description: productDescription,
        price: productPrice,
        imageUrl: productImageUrl,
      })
    );
    closeNewProductFormHandler();
  };

  const nameControlClasses = `${classes.control} ${
    formInputIsValid.name ? "" : classes.invalid
  }`;

  const descriptionControlClasses = `${classes.control} ${
    formInputIsValid.description ? "" : classes.invalid
  }`;

  const priceControlClasses = `${classes.control} ${
    formInputIsValid.price ? "" : classes.invalid
  }`;

  const imageUrlControlClasses = `${classes.control} ${
    formInputIsValid.imageUrl ? "" : classes.invalid
  }`;

  const NewProductFormContent = (
    <form className={classes.form} onSubmit={addProductHandler}>
      <h2>New Product</h2>
      <Input
        ref={nameInputRef}
        className={nameControlClasses}
        label="Name"
        input={{
          id: "name",
          type: "text",
        }}
      />
      {!formInputIsValid.name && <p>Please enter a valid name</p>}
      <Input
        ref={descInputRef}
        className={descriptionControlClasses}
        label="Description"
        input={{
          id: "description",
          type: "text",
        }}
      />
      {!formInputIsValid.description && <p>Please enter a valid description</p>}
      <Input
        ref={priceInputRef}
        className={priceControlClasses}
        label="Price"
        input={{
          id: "price",
          type: "number",
          step: "any",
        }}
      />
      {!formInputIsValid.price && <p>Please enter a valid price</p>}
      <Input
        ref={imageUrlInputRef}
        className={imageUrlControlClasses}
        label="Image Url"
        input={{
          id: "image",
          type: "text",
        }}
      />
      {!formInputIsValid.imageUrl && <p>Please enter a valid image url</p>}
      <button>Add</button>
    </form>
  );

  return (
    <Modal onClose={closeNewProductFormHandler}>{NewProductFormContent}</Modal>
  );
};

export default NewProductForm;
