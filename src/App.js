import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import ShopProducts from "./components/Shop/ShopProducts";
import Cart from "./components/Cart/Cart";
import PageLayout from "./components/Layout/PageLayout";
import NewProductForm from "./components/NewProduct/NewProductForm";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const showNewProductForm = useSelector(state => state.ui.newProductFormIsVisible)

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
