import React from "react";
import CartButton from "../Cart/CartButton";

import classes from "./MainHeader.module.css";
import { Link } from "react-router-dom";
import cartImg from "../../assets/cart.png";
// import { useSelector } from "react-redux";

function MainHeader() {
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <header className={classes.header}>
      <img className={classes.logo} src={cartImg} alt="logo" />
      <nav>
        <ul className={classes.nav__links}>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          {/* {!isLoggedIn && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )} */}
        </ul>
      </nav>
      <div className={classes.actions}>
        <CartButton />
      </div>
    </header>
  );
}

export default MainHeader;

/* {!isLoggedIn ? (
            <li>
              <Link to="/login">Login</Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )} */
