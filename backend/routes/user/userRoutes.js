// routes
import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
  userUpdateProfile,
} from "../../controllers/user/userController.js";

import { isUserLogin } from "../../middleware/isUserLogin.js";
import isUser from "../../middleware/isUser.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/profile").get(isUserLogin, isUser, getUserProfile);
router.route("/:userID/update").put(isUserLogin, isUser, userUpdateProfile);

export default router;
