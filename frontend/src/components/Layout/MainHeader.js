import React from "react";
import CartButton from "../Cart/CartButton";

import classes from "./MainHeader.module.css";
import { Link } from "react-router-dom";
import cartImg from "../../assets/cart.png";

function MainHeader() {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={cartImg} alt="logo" />
      <nav>
        <ul className={classes.nav__links}>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/authentication">Login</Link>
          </li>
        </ul>
      </nav>
      <div className={classes.actions}>
        <CartButton />
      </div>
    </header>
  );
}

export default MainHeader;
