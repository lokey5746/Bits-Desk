import mongoose from "mongoose";

const agentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "agent",
  },
  applicationStatus: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  isSuspended: {
    type: Boolean,
    default: false,
  },
  tickets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
    },
  ],
});

//model
const Agent = mongoose.model("Agent", agentSchema);

export default Agent;
