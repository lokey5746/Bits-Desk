import Agent from "../models/admin/agentModel.js";

const isAgent = async (req, res, next) => {
  //  find the user
  const userId = req?.userAuth?._id;
  const agentFound = await Agent.findById(userId);

  //   check if student
  if (agentFound?.role === "agent") {
    next();
  } else {
    next(new Error("Access Denied, Agent only"));
  }
};

export default isAgent;
