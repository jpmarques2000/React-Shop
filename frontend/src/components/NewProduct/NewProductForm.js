import React from "react";

import Modal from "../UI/Modal";
import classes from "./NewProductForm.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import Input from "./Input";
import { productActions } from "../../store/product-slice";
import { sendNewProductData } from "../../store/product-actions";
import useInput from "../../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";

const NewProductForm = () => {
  const dispatch = useDispatch();

  // const nameInputRef = useRef();
  // const descInputRef = useRef();
  // const priceInputRef = useRef();
  // const imageUrlInputRef = useRef();

  // const [formInputIsValid, setFormInputIsValid] = useState({
  //   name: true,
  //   description: true,
  //   price: true,
  //   imageUrl: true,
  // });

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetInput: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredDescription,
    isValid: enteredDescIsValid,
    hasError: descInputHasError,
    valueChangeHandler: descChangeHandler,
    inputBlurHandler: descBlurHandler,
    resetInput: resetDescInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredPrice,
    isValid: enteredPriceIsValid,
    hasError: priceInputHasError,
    valueChangeHandler: priceChangeHandler,
    inputBlurHandler: priceBlurHandler,
    resetInput: resetPriceInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredImageUrl,
    isValid: enteredImageUrlIsValid,
    hasError: imageUrlInputHasError,
    valueChangeHandler: imageUrlChangeHandler,
    inputBlurHandler: imageUrlBlurHandler,
    resetInput: resetImageUrlInput,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredDescIsValid &&
    enteredPriceIsValid &&
    enteredImageUrlIsValid
  ) {
    formIsValid = true;
  }

  const closeNewProductFormHandler = () => {
    dispatch(uiActions.toggleNewProduct());
  };

  const addProductHandler = async (event) => {
    event.preventDefault();

    if (
      !enteredNameIsValid ||
      !enteredDescIsValid ||
      !enteredPriceIsValid ||
      !enteredImageUrlIsValid
    ) {
      return;
    }

    dispatch(
      await sendNewProductData({
        name: enteredName,
        description: enteredDescription,
        price: enteredPrice,
        imageUrl: enteredImageUrl,
      })
    );
    setTimeout(() => {
      dispatch(uiActions.removeNotification());
    }, 4000);

    dispatch(
      productActions.addNewProduct({
        id: Math.random(),
        name: enteredName,
        description: enteredDescription,
        price: enteredPrice,
        imageUrl: enteredImageUrl,
      })
    );

    resetNameInput();
    resetDescInput();
    resetPriceInput();
    resetImageUrlInput();

    closeNewProductFormHandler();

    //   const productNameIsValid = !isEmpty(productName);
    //   const productDescriptionIsValid = !isEmpty(productDescription);
    //   const productPriceIsValid = !isEmpty(productPrice);
    //   const productImageUrlIsValid = !isEmpty(productImageUrl);

    //   setFormInputIsValid({
    //     name: productNameIsValid,
    //     description: productDescriptionIsValid,
    //     price: productPriceIsValid,
    //     imageUrl: productImageUrlIsValid,
    //   });

    //   const formIsValid =
    //     productNameIsValid &&
    //     productDescriptionIsValid &&
    //     productPriceIsValid &&
    //     productImageUrlIsValid;

    //   if (!formIsValid) {
    //     return;
    //   }
  };

  const nameControlClasses = `${classes.control} ${
    !nameInputHasError ? "" : classes.invalid
  }`;

  const descriptionControlClasses = `${classes.control} ${
    !descInputHasError ? "" : classes.invalid
  }`;

  const priceControlClasses = `${classes.control} ${
    !priceInputHasError ? "" : classes.invalid
  }`;

  const imageUrlControlClasses = `${classes.control} ${
    !imageUrlInputHasError ? "" : classes.invalid
  }`;

  const NewProductFormContent = (
    <form className={classes.form} onSubmit={addProductHandler}>
      <h2>New Product</h2>
      <Input
        className={nameControlClasses}
        label="Name"
        input={{
          value: enteredName,
          id: "name",
          type: "text",
          onChange: nameChangeHandler,
          onBlur: nameBlurHandler,
        }}
      />
      {nameInputHasError && <p>Please enter a valid name</p>}
      <Input
        className={descriptionControlClasses}
        label="Description"
        input={{
          value: enteredDescription,
          id: "description",
          type: "text",
          onChange: descChangeHandler,
          onBlur: descBlurHandler,
        }}
      />
      {descInputHasError && <p>Please enter a valid description</p>}
      <Input
        className={priceControlClasses}
        label="Price"
        input={{
          value: enteredPrice,
          id: "price",
          type: "number",
          step: "any",
          onChange: priceChangeHandler,
          onBlur: priceBlurHandler,
        }}
      />
      {priceInputHasError && <p>Please enter a valid price</p>}
      <Input
        className={imageUrlControlClasses}
        label="Image Url"
        input={{
          value: enteredImageUrl,
          id: "image",
          type: "text",
          onChange: imageUrlChangeHandler,
          onBlur: imageUrlBlurHandler,
        }}
      />
      {imageUrlInputHasError && <p>Please enter a valid image url</p>}
      <div className={classes.actions}>
        <button disabled={!formIsValid}>Add</button>
      </div>
    </form>
  );

  return (
    <Modal onClose={closeNewProductFormHandler}>{NewProductFormContent}</Modal>
  );
};

export default NewProductForm;
