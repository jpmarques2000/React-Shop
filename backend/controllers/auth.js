import { db } from "../db.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

export const registerUser = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    const q = "INSERT INTO users (username, password) VALUES (?,?)";

    db.query(q, [username, hash], (err, result) => {
      console.log(err);
    });
  });
};

export const verifyUserIsLogin = (req, res) => {
  if (req.session.user) {
    res.send({ userIsLoggedIn: true, user: req.session.user });
  } else {
    res.send({ userIsLoggedIn: false });
  }
};

export const loginUser = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const q = "SELECT * from users where username = ?";

  db.query(q, username, (err, result) => {
    if (err) {
      res.send({ err: err });
    }

    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          req.session.user = result;
          console.log(req.session.user);
          res.send(result);
        } else {
          res.send({ message: "Wrong username/password please try again!" });
        }
      });
    } else {
      res.send({ message: "User doesn't exist" });
    }
  });
};
