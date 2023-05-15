import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import ShopProducts from "./components/Shop/ShopProducts";
import Cart from "./components/Cart/Cart";
import PageLayout from "./components/Layout/PageLayout";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <Fragment>
      <PageLayout>
        {showCart && <Cart />}
        <ShopProducts />
      </PageLayout>
    </Fragment>
  );
}

export default App;
