import Admin from "../../models/admin/adminModel.js";
import asyncHandler from "express-async-handler";

import generateToken from "../../utilis/generateToken.js";
import { hashPassword, verifyPassword } from "../../utilis/helpers.js";

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
export {
  registerAdmin,
  loginAdmin,
  getAdmins,
  getAdminProfile,
  updateAdmin,
  adminSuspendAgent,
};
