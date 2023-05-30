import React, { Fragment, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import ShopProducts from "../components/Shop/ShopProducts";
import Cart from "../components/Cart/Cart";
import NewProductForm from "../components/NewProduct/NewProductForm";
import { fetchProductData } from "../store/product-actions";
import Notification from "../components/UI/Notification";

const ProductsLayout = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const showNewProductForm = useSelector(
    (state) => state.ui.newProductFormIsVisible
  );
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch, product]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      {showCart && <Cart />}
      {showNewProductForm && <NewProductForm />}
      <ShopProducts />
    </Fragment>
  );
};

export default ProductsLayout;
