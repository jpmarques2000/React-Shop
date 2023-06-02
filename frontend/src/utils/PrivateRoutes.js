import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router";

const PrivateRoutes = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
