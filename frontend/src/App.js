import React from "react";

import { Route, Routes } from "react-router-dom";
import ProductsLayout from "./pages/ProductsLayout";
import AuthForm from "./components/Auth/AuthForm";
import PageLayout from "./components/Layout/PageLayout";

function App() {
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
