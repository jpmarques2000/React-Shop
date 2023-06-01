import React, { useState } from "react";

import classes from "./AuthForm.module.css";
import { useDispatch } from "react-redux";
import { login, register } from "../../store/auth-actions";

const AuthForm = () => {
  const dispatch = useDispatch();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(true);

  const resetInputs = () => {
    setEnteredPassword("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setFormIsValid(true);
    }
    setEnteredUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    if (event.target.value.trim().lengh > 0) {
      setFormIsValid(true);
    }
    setEnteredPassword(event.target.value);
  };

  const registerHandler = async (event) => {
    event.preventDefault();

    if (
      enteredUsername.trim().length <= 5 &&
      enteredPassword.trim().length <= 2
    ) {
      setFormIsValid(false);
      return;
    }

    dispatch(
      await register({
        username: enteredUsername,
        password: enteredPassword,
      })
    );
    resetInputs();
  };
  const loginHandler = async () => {
    if (
      enteredUsername.trim().length <= 5 &&
      enteredPassword.trim().length <= 2
    ) {
      setFormIsValid(false);
      return;
    }

    dispatch(
      await login({
        username: enteredUsername,
        password: enteredPassword,
      })
    );

    resetInputs();
  };
  return (
    <>
      <form method="post" className={classes.form} onSubmit={registerHandler}>
        <h1>Log In</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={enteredUsername}
            onChange={usernameChangeHandler}
            required
          ></input>
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            required
          ></input>
        </p>
        {!formIsValid && (
          <p className={classes.invalid}>Please enter valid inputs!</p>
        )}
        <div className={classes.actions}>
          <button> Create a New User</button>
          <button type="button" onClick={loginHandler}>
            Log In
          </button>
        </div>
      </form>
    </>
  );
};

export default AuthForm;
