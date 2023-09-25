import express from "express";
import {
  createTicket,
  getMyTickets,
  getTicketById,
} from "../../controllers/ticket/ticketController.js";
import { isUserLogin } from "../../middleware/isUserLogin.js";
import isUser from "../../middleware/isUser.js";

const router = express.Router();

router.route("/").post(isUserLogin, isUser, createTicket);
router.route("/myticket").get(isUserLogin, isUser, getMyTickets);
router.route("/:id").get(getTicketById);
export default router;
