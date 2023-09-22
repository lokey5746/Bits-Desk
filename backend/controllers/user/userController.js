import asyncHandler from "express-async-handler";
import User from "../../models/user/userModel.js";
import { hashPassword, verifyPassword } from "../../utilis/helpers.js";
import generateToken from "../../utilis/generateToken.js";

// @desc  Register User
// @route POST /api/v1/users/register
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //   check is user exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    throw new Error("email already taken");
  }
  const userCreated = await User.create({
    name,
    email,
    password: await hashPassword(password),
  });
  res.status(201).json({
    status: "success",
    message: "user register sucessfully",
    data: userCreated,
  });
});

// @desc  Login User
// @route POST /api/v1/users/login
// @access Public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // check if user exist
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("email not exist");
  }

  // verify password
  const isMatched = await verifyPassword(password, user.password);
  if (!isMatched) {
    throw new Error("invalid login ceredentials");
  }
  res.status(201).json({
    status: "success",
    message: "user login successfully",
    data: generateToken(user._id),
  });
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.userAuth._id).select(
    "-password -createdAt -updatedAt"
  );
  if (!user) {
    throw new Error("user not found");
  }
  res.status(201).json({
    status: "success",
    message: "user profile fetched sucessfully",
    data: user,
  });
});

export { registerUser, loginUser, getUserProfile };
