import express from "express";
import {
  getCart,
  getCartItem,
  addCart,
  addCartItem,
} from "../controllers/cart.js";

const router = express.Router();

router.get("/cart/", getCart);

router.post("/cart/", addCart);

router.get("/cartItem/", getCartItem);

router.post("/cartItem/", addCartItem);

export default router;
