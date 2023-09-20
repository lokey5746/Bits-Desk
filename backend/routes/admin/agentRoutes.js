import express from "express";

import {
  registerAgent,
  loginAgent,
  getAllAgentByAdmin,
  getSingleAgentByAdmin,
  getAgentProfile,
  agentUpdateProfile,
  adminUpdateAgnet,
} from "../../controllers/admin/agentController.js";
import { isAdminLogin } from "../../middleware/isAdminLogin.js";
import isAdmin from "../../middleware/isAdmin.js";
import { isAgentLogin } from "../../middleware/isAgentLogin.js";
import isAgent from "../../middleware/isAgent.js";

const router = express.Router();

router.route("/admin").get(isAdminLogin, isAdmin, getAllAgentByAdmin);
router.route("/admin/register").post(isAdminLogin, isAdmin, registerAgent);
router.route("/login").post(loginAgent);
router.route("/profile").get(isAgentLogin, isAgent, getAgentProfile);
router
  .route("/:agentID/admin")
  .get(isAdminLogin, isAdmin, getSingleAgentByAdmin);
router.route("/:agentID/update").put(isAgentLogin, isAgent, agentUpdateProfile);

export default router;
