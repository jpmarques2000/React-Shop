import React from "react";
import { Link } from "react-router-dom";

import classes from "./AuthForm.module.css";

const AuthForm = () => {

  const loginHandler = () => {
    
  }
  return (
    <>
      <form method="post" className={classes.form} onSubmit={loginHandler}>
        <h1>Log In</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required></input>
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required></input>
        </p>

        <div className={classes.action}>
          <Link> Create a New User</Link>
        </div>
      </form>
    </>
  );
};

export default AuthForm;
