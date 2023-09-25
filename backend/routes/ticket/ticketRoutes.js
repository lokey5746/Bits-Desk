import express from "express";
import { createTicket } from "../../controllers/ticket/ticketController.js";
import { isUserLogin } from "../../middleware/isUserLogin.js";
import isUser from "../../middleware/isUser.js";

const router = express.Router();

router.route("/").post(isUserLogin, isUser, createTicket);

export default router;
