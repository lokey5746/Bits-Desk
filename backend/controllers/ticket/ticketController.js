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

//@desc Get logged in user tickets
//@route GET /api/tickets/mytickets
//@access Private
const getMyTickets = asyncHandler(async (req, res) => {
  const tickets = await Ticket.find({ users: req.userAuth._id });
  res.json(tickets);
});

// @desc Fetch all single tickets
// @route Get /api/tickets/:id
//  @access Private

const getTicketById = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  if (ticket) {
    res.json(ticket);
  } else {
    res.status(404).json({
      status: "success",
      message: "Ticket not found",
      data: ticket,
    });
  }
});

export { createTicket, getMyTickets, getTicketById };
