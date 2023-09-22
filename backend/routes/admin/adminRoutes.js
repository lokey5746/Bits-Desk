import express from "express";
import {
  registerAdmin,
  loginAdmin,
  getAdmins,
  getAdminProfile,
  updateAdmin,
  adminSuspendAgent,
  adminUpdateAgent,
  adminUpdateUser,
  adminDeleteAgent,
} from "../../controllers/admin/adminController.js";

import { isAdminLogin } from "../../middleware/isAdminLogin.js";
import isAdmin from "../../middleware/isAdmin.js";

const router = express.Router();

router
  .route("/")
  .get(isAdminLogin, isAdmin, getAdmins)
  .put(isAdminLogin, isAdmin, updateAdmin);
router.route("/register").post(registerAdmin);
router.route("/login").post(loginAdmin);
router.route("/profile").get(isAdminLogin, isAdmin, getAdminProfile);
router
  .route("/suspend/agent/:id")
  .put(isAdminLogin, isAdmin, adminSuspendAgent);
router.route("/update/agent/:id").put(isAdminLogin, isAdmin, adminUpdateAgent);
router.route("/update/user/:id").put(isAdminLogin, isAdmin, adminUpdateUser);
router
  .route("/delete/agent/:id")
  .delete(isAdminLogin, isAdmin, adminDeleteAgent);
export default router;
