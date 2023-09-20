import express from "express";

import {
  registerAgent,
  loginAgent,
} from "../../controllers/admin/agentController.js";

const router = express.Router();

router.route("/admin/register").post(registerAgent);
router.route("/login").post(loginAgent);

export default router;
