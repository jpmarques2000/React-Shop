import express from "express";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.js";

const router = express.Router();

router.get("/product/", getProducts);

router.post("/product/", addProduct);

router.put("/product/:id", updateProduct);

router.delete("/product/:id", deleteProduct);

export default router;
