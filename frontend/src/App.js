import React, { useEffect } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";
import ProductsLayout from "./pages/ProductsLayout";
import AuthForm from "./components/Auth/AuthForm";
import PageLayout from "./components/Layout/PageLayout";
import { useDispatch } from "react-redux";
import PrivateRoutes from "./utils/PrivateRoutes";
import axios from "axios";
import { authActions } from "./store/auth-slice";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyLogin = async () => {
      let firstLoad = true;
      await axios.get("http://localhost:8080/login/").then((response) => {
        if (response.data.userIsLoggedIn === true) {
          dispatch(
            authActions.userLogin({
              username: response.data.user[0].username,
            })
          );
          if (firstLoad) {
            firstLoad = false;
            navigate("/");
          }
        }
      });
    };
    verifyLogin();
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
