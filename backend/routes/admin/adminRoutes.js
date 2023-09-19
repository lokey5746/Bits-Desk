import express from "express";
import {
  registerAdmin,
  loginAdmin,
  getAdmins,
  getAdminProfile,
} from "../../controllers/admin/adminController.js";

import { protect } from "../../middleware/authMiddleware.js";
import isAdmin from "../../middleware/isAdmin.js";

const router = express.Router();

router.route("/").get(protect, isAdmin, getAdmins);
router.route("/register").post(registerAdmin);
router.route("/login").post(loginAdmin);
router.route("/profile").get(protect, isAdmin, getAdminProfile);

export default router;
