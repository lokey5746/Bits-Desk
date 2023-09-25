import asyncHandler from "express-async-handler";
import Ticket from "../../models/ticket/ticketModel.js";

// @desc Create a tickets
// @route POST  /api/tickets
//  @access Private

const createTicket = asyncHandler(async (req, res) => {
  const { title, description, severity } = req.body;

  const ticket = await Ticket.create({
    title,
    description,
    severity,
    users: req.userAuth._id,
  });
  res.status(201).json({
    status: "success",
    message: "ticket create successfully",
    data: ticket,
  });
});

export { createTicket };
