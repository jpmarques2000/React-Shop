import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import MainHeader from "./components/Layout/MainHeader";
import ShopProducts from "./components/Shop/ShopProducts";
import Cart from "./components/Cart/Cart";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <Fragment>
      <MainHeader />
      <main>
        {showCart && <Cart />}
        <ShopProducts />
      </main>
    </Fragment>
  );
}

export default App;
