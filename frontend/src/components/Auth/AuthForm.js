import React from "react";
import {
  Form,
} from 'react-router-dom';

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  return (
    <>
      {/* <Form className={classes.form}> */}
        <h1>Log In</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required></input>
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required></input>
        </p>
        {/* <div className={classes.action}>
          <button>Save</button>
        </div> */}
      {/* </Form> */}
    </>
  );
};

export default AuthForm;
