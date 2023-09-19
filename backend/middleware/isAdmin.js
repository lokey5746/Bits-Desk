import Admin from "../models/admin/adminModel.js";

const isAdmin = async (req, res, next) => {
  // find the user
  const userId = req?.userAuth?._id;
  const adminFound = await Admin.findById(userId);
  //   check if admin
  if (adminFound?.role === "admin") {
    next();
  } else {
    next(new Error("access denied, admin only"));
  }
};

export default isAdmin;
