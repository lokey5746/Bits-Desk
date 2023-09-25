import Admin from "../../models/admin/adminModel.js";
import Agent from "../../models/admin/agentModel.js";
import User from "../../models/user/userModel.js";
import asyncHandler from "express-async-handler";

import generateToken from "../../utilis/generateToken.js";
import { hashPassword, verifyPassword } from "../../utilis/helpers.js";
import { json } from "express";

// @desc Create  admins
// @route POST /api/v1/admins/register
// @access Private

const registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //   check if email exist
  const adminFound = await Admin.findOne({ email });
  if (adminFound) {
    throw new Error("email already exist");
  }
  //   register admin
  const admin = await Admin.create({
    name,
    email,
    password: await hashPassword(password),
  });

  res.status(201).json({
    status: "success",
    data: admin,
    message: "admin register successfully",
  });
});

// @desc Create  admins
// @route POST /api/v1/admins/register
// @access Public

const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //   find the user
  const admin = await Admin.findOne({ email });
  if (!admin) {
    throw new Error("admin not found");
  }
  //   verify password
  const isMatched = await verifyPassword(password, admin.password);
  if (!isMatched) {
    throw new Error("invalid login details");
  }
  res.status(201).json({
    status: "success",
    data: generateToken(admin._id),
    message: "admin login successfully",
  });
});

// @desc Get all admins
// @route GET /api/v1/admins/
// @access Private
const getAdmins = asyncHandler(async (req, res) => {
  const admins = await Admin.find();
  res.status(201).json({
    status: "success",
    data: admins,
    message: "admin fetched successfully",
  });
});

// @desc Get all agents
// @route GET /api/v1/admins/
// @access Private

const getAgents = asyncHandler(async (req, res) => {
  const agents = await Agent.find();
  res.status(201).json({
    status: "success",
    data: agents,
    message: "agents fetched successfully",
  });
});

// @desc Get all users
// @route GET /api/v1/admins/
// @access Private

const getUsers = asyncHandler(async (req, res) => {
  const agents = await Agent.find();
  res.status(201).json({
    status: "success",
    data: agents,
    message: "agents fetched successfully",
  });
});

// @desc Get Profile admin
// @route GET /api/v1/admins/:id
// @access Private
const getAdminProfile = asyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.userAuth._id);
  if (!admin) {
    throw new Error("admin not found");
  }
  res.status(201).json({
    status: "success",
    data: admin,
    message: "admin profile fetched successfully",
  });
});

// @desc PUT Update admin
// @route PUT /api/v1/admins/:id
// @access Private
const updateAdmin = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const emailExist = await Admin.findOne({ email });
  if (emailExist) {
    throw new Error("email already taken");
  }

  //   check if user update password
  if (password) {
    // update password also
    const admin = await Admin.findByIdAndUpdate(
      req.userAuth._id,
      {
        email,
        name,
        password: await hashPassword(password),
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({
      status: "success",
      data: admin,
      message: "admin update successfully",
    });
  } else {
    // not update password
    const admin = await Admin.findByIdAndUpdate(
      req.userAuth._id,
      {
        email,
        name,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({
      status: "success",
      data: admin,
      message: "admin update sucessfully",
    });
  }
});

// @desc PUT admin suspend agent
// @route PUT /api/v1/admins/:id
// @access Private
const adminSuspendAgent = asyncHandler(async (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "admin suspended agent",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
});

// @desc PUT admin update agent
// @route PUT /api/v1/admins/:id
// @access Private
const adminUpdateAgent = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // check if email is taken or not
  const agentExist = await Agent.findOne({ email });
  if (agentExist) {
    throw new Error("email already taken");
  }
  // check if updating password or not
  if (password) {
    // updating password also
    const agent = await Agent.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        password: hashPassword(password),
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({
      status: "success",
      message: "agent update sucessfully",
      data: agent,
    });
  } else {
    // update user without password
    const agent = await Agent.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({
      status: "success",
      message: "agent update sucessfully",
      data: agent,
    });
  }
});

// @desc PUT admin update user
// @route PUT /api/v1/admins/:id
// @access Private
const adminUpdateUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // check if email taken
  const userExist = await User.findOne({ email });
  if (userExist) {
    throw new Error("email already taken");
  }
  // check if updating password or not
  if (password) {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        password: await hashPassword(password),
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({
      status: "success",
      message: "user update sucessfully",
      data: user,
    });
  } else {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email },
      { new: true, runValidators: true }
    );
    res.status(201).json({
      status: "success",
      message: "user update successfully",
      data: user,
    });
  }
});

// @desc DELETE admin delete agent
// @route DELETE /api/v1/admins/:id
// @access Private
const adminDeleteAgent = asyncHandler(async (req, res) => {
  const agent = await Agent.findById(req.params.id);
  if (agent) {
    await agent.remove();
    res.status(201),
      json({
        status: "success",
        message: "agent delete successfully",
      });
  }
});

// @desc DELETE admin delete agent
// @route DELETE /api/v1/admins/:id
// @access Private
const adminDeleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await user.remove();
    res.status(201),
      json({
        status: "success",
        message: "user delete successfully",
      });
  }
});

export {
  registerAdmin,
  loginAdmin,
  getAdmins,
  getAdminProfile,
  updateAdmin,
  adminSuspendAgent,
  adminUpdateAgent,
  adminUpdateUser,
  adminDeleteAgent,
  adminDeleteUser,
  getAgents,
  getUsers,
};
