import express from "express";
import { loginUser, registerUser, verifyUserIsLogin } from "../controllers/auth.js";

const router = express.Router();

router.post("/register/", registerUser);

router.post("/login/", loginUser);
router.get('/login/', verifyUserIsLogin)

export default router;
