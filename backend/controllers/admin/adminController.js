import Admin from "../../models/admin/adminModel.js";
import asyncHandler from "express-async-handler";

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

export { registerAdmin };
