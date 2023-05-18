import { db } from "../db.js";

export const getCart = (_, res) => {
  const q = "SELECT * from cart";

  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.status(200).json(data);
    }
  });
};

export const addCart = (req, res) => {
  const q = "INSERT INTO cart(`total_price`, `total_quantity`) VALUES(?)";

  const values = [req.body.total_price, req.body.total_quantity];

  db.query(q, [values], (err) => {
    if (err) {
      return res.json(err);
    } else {
      return res.status(200).json("Cart successfully created");
    }
  });
};

export const getCartItem = () => {
  const q = "SELECT * from cart_items";

  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.status(200).json(data);
    }
  });
};

export const addCartItem = (req, res) => {
  const q =
    "INSERT INTO cart_items(`prod_id`, `cart_id`, `quantity`) VALUES(?) ";

  const values = [req.body.prod_id, req.body.cart_id, req.body.quantity];

  db.query(q, [values], (err) => {
    if (err) {
      return res.json(err);
    } else {
      return res.status(200).json("Cart Items successfully added");
    }
  });
};
