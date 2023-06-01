import React, { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import ProductsLayout from "./pages/ProductsLayout";
import AuthForm from "./components/Auth/AuthForm";
import PageLayout from "./components/Layout/PageLayout";
import { useDispatch, useSelector } from "react-redux";
import { verifyIsUserLoggedIn } from "./store/auth-actions";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyIsUserLoggedIn());
    console.log(isLoggedIn);
  }, [dispatch, isLoggedIn]);
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path="/" element={<ProductsLayout />} />
          <Route path="/authentication" element={<AuthForm />} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
