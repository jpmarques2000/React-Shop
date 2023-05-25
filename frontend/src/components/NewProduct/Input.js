import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <div className={props.className}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} />
      </div>
    </div>
  );
};

export default Input;
