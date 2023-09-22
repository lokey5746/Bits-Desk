// routes
import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
} from "../../controllers/user/userController";

import { isUserLogin } from "../../middleware/isUserLogin.js";
import isUser from "../../middleware/isUser.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/profile").get(isUserLogin, isUser, getUserProfile);

export default router;
