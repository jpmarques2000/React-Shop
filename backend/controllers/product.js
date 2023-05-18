import { db } from "../db.js";

export const getProducts = (_, res) => {
  const q = "SELECT * from products";

  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.status(200).json(data);
    }
  });
};

export const addProduct = (req, res) => {
  const q =
    "INSERT INTO products(`name`,`description`,`price`,`image_url`) VALUES(?)";

  const values = [
    req.body.name,
    req.body.description,
    req.body.price,
    req.body.image_url,
  ];

  db.query(q, [values], (err) => {
    if (err) {
      return res.json(err);
    } else {
      return res.status(200).json("New Product successfully created.");
    }
  });
};

export const updateProduct = (req, res) => {
  const q =
    "UPDATE products set `name` = ?, `description` = ?, `price` = ?, `image_url` = ? WHERE `id` = ? ";

  const values = [
    req.body.name,
    req.body.description,
    req.body.price,
    req.body.image_url,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) {
      return res.json(err);
    } else {
      return res.status(200).json("Product successfully updated.");
    }
  });
};

export const deleteProduct = (req, res) => {
  const q = "DELETE from products WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) {
      return res.json(err);
    } else {
      return res.status(200).json("Product successfully deleted.");
    }
  });
};
