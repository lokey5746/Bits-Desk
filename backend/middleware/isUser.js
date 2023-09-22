import User from "../models/user/userModel.js";

const isUser = async (req, res, next) => {
  //  find the user
  const userId = req?.userAuth?._id;
  const userFound = await User.findById(userId);

  //   check if student
  if (userFound?.role === "user") {
    next();
  } else {
    next(new Error("Access Denied, User only"));
  }
};

export default isUser;
