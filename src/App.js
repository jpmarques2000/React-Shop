import React, { Fragment } from "react";
import MainHeader from "./components/Layout/MainHeader";
import ShopProducts from "./components/Shop/ShopProducts";

function App() {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <ShopProducts />
      </main>
    </Fragment>
  );
}

export default App;
