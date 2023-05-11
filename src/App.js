import React, { Fragment } from "react";
import MainHeader from "./components/Layout/MainHeader";
import ShopProducts from "./components/Shop/ShopProducts";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Cart />
        <ShopProducts />
      </main>
    </Fragment>
  );
}

export default App;
