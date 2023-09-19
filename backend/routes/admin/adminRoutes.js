import express from "express";
import {
  registerAdmin,
  loginAdmin,
  getAdmins,
  getAdminProfile,
  updateAdmin,
  adminSuspendAgent,
} from "../../controllers/admin/adminController.js";

import { protect } from "../../middleware/authMiddleware.js";
import isAdmin from "../../middleware/isAdmin.js";

const router = express.Router();

router
  .route("/")
  .get(protect, isAdmin, getAdmins)
  .put(protect, isAdmin, updateAdmin);
router.route("/register").post(registerAdmin);
router.route("/login").post(loginAdmin);
router.route("/profile").get(protect, isAdmin, getAdminProfile);
router.route("/suspend/agent/:id").put(protect, isAdmin, adminSuspendAgent);

export default router;
