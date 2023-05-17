import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ShopProducts from "./components/Shop/ShopProducts";
import Cart from "./components/Cart/Cart";
import PageLayout from "./components/Layout/PageLayout";
import NewProductForm from "./components/NewProduct/NewProductForm";
import { fetchProductData } from "./store/product-actions";

// let isInitialProducts = true;

function App() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const showNewProductForm = useSelector(
    (state) => state.ui.newProductFormIsVisible
  );

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch, product]);

  // useEffect(() => {
  //   console.log('a1')
  //   if(isInitialProducts) {
  //     isInitialProducts = false;
  //     return;
  //   }

  //   if(product.changed) {
  //     console.log(product)
  //     dispatch(sendNewProductData(product));
  //   }

  // }, [product, dispatch])

  return (
    <Fragment>
      <PageLayout>
        {showCart && <Cart />}
        {showNewProductForm && <NewProductForm />}
        <ShopProducts />
      </PageLayout>
    </Fragment>
  );
}

export default App;
