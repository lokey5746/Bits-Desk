import express from "express";

import {
  registerAgent,
  loginAgent,
  getAllAgentByAdmin,
  getSingleAgentByAdmin,
} from "../../controllers/admin/agentController.js";
import { protect } from "../../middleware/authMiddleware.js";
import isAdmin from "../../middleware/isAdmin.js";

const router = express.Router();

router.route("/admin").get(protect, isAdmin, getAllAgentByAdmin);
router.route("/admin/register").post(protect, isAdmin, registerAgent);
router.route("/login").post(loginAgent);
router.route("/:agentID/admin").get(protect, isAdmin, getSingleAgentByAdmin);

export default router;
