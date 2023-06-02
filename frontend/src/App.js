import React, { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import ProductsLayout from "./pages/ProductsLayout";
import AuthForm from "./components/Auth/AuthForm";
import PageLayout from "./components/Layout/PageLayout";
import { useDispatch } from "react-redux";
import { verifyIsUserLoggedIn } from "./store/auth-actions";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyIsUserLoggedIn());
  }, [dispatch]);
  return (
    <>
      <PageLayout>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<ProductsLayout />} />
          </Route>
          <Route path="/login" element={<AuthForm />} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
