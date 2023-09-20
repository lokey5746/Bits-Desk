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

const loginAgent = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // check if user exist
  const agentFound = await Agent.findOne({ email });
  if (!agentFound) {
    throw new Error("agent not found");
  }
  // verify password
  const isMatched = await verifyPassword(password, agentFound?.password);
  if (!isMatched) {
    throw new Error("invalid login cerendentials");
  }
  res.status(201).json({
    status: "success",
    message: "agent login sucessfully",
    data: generateToken(agentFound?._id),
  });
});

// @desc Get all Agents
// @route POST /api/v1/agents/admin
// @access Private

const getAllAgentByAdmin = asyncHandler(async (req, res) => {
  const agents = await Agent.find();
  res.status(201).json({
    status: "success",
    message: "all agents fetch sucessfully",
    data: agents,
  });
});

// @desc Get single Agent
// @route POST /api/v1/agents/:agentID/admin
// @access Private

const getSingleAgentByAdmin = asyncHandler(async (req, res) => {
  const agent = await Agent.findById(req.params.id);
  if (!agent) {
    throw new Error("agent not found");
  }
  res.status(201).json({
    status: "success",
    message: "agent fetch successfully",
  });
});

// @desc Agent Profile
// @route POST /api/v1/agents/profile
// @access Private Agent only

const getAgentProfile = asyncHandler(async (req, res) => {
  const agent = await Agent.findById(req.userAuth?._id);
  if (!agent) {
    throw new Error("agent not found");
  }
  res.status(201).json({
    status: "success",
    message: "agent fetched successfully",
    data: agent,
  });
});

// @desc Agent updating profile
// @route POST /api/v1/agents/:agentID/update
// @access Private Agent only

const agentUpdateProfile = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //   check if email taken
  const agentExist = await Agent.findOne({ email });
  if (agentExist) {
    throw new Error("email already taken");
  }

  //   check if user updating password
  if (password) {
    const agent = await Agent.findByIdAndUpdate(
      req.userAuth._id,
      {
        email,
        password: await hashPassword(password),
        name,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({
      status: "success",
      message: "agent fetch successfully",
      data: agent,
    });
  } else {
    // update agent without password
    const agent = await Agent.findByIdAndUpdate(
      req.userAuth._id,
      { email, name },
      { new: true, runValidators: true }
    );
    res.status(201).json({
      status: "sucess",
      message: "agent fetch sucessfully",
      data: agent,
    });
  }
});

export {
  registerAgent,
  loginAgent,
  getAllAgentByAdmin,
  getSingleAgentByAdmin,
  getAgentProfile,
};
