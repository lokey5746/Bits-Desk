import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  severity: {
    type: String,
    required: true,
  },
  agents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agent",
    },
  ],
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

//model
const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
