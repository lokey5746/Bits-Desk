import Agent from "../../models/admin/agentModel.js";
import asyncHandler from "express-async-handler";
import { hashPassword, verifyPassword } from "../../utilis/helpers.js";
import generateToken from "../../utilis/generateToken.js";

// @desc Admin Register Agent
// @route POST /api/v1/agents/admin/register
// @access Private

const registerAgent = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //   check if email exist
  const agnetFound = await Agent.findOne({ email });
  if (agnetFound) {
    throw new Error("email already taken");
  }

  //   register agent
  const agentCreated = await Agent.create({
    name,
    email,
    password: await hashPassword(password),
  });

  res.status(201).json({
    status: "success",
    message: "agent created successfully",
    data: agentCreated,
  });
});

export { registerAgent };
