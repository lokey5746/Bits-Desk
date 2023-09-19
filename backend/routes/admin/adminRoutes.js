import express from "express";
import {
  registerAdmin,
  loginAdmin,
} from "../../controllers/admin/adminController.js";

const router = express.Router();

router.route("/register").post(registerAdmin);
router.route("/login").post(loginAdmin);

export default router;
