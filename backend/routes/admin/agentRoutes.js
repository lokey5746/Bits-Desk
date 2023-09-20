import express from "express";

import { registerAgent } from "../../controllers/admin/agentController.js";

const router = express.Router();

router.route("/admin/register").post(registerAgent);

export default router;
