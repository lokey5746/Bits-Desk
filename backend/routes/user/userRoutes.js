
// routes
import express from "express";
import { registerUser } from "../../controllers/user/userController";

const router = express.Router();

router.route("/register").post(registerUser);

export default router;
