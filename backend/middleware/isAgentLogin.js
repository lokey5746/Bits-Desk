import Agent from "../models/admin/agentModel.js";
import verifyToken from "../utilis/verifyToken.js";

const isAgentLogin = async (req, res, next) => {
  // get token
  const headerObj = req.headers;
  console.log(headerObj);
  const token = headerObj?.authorization?.split(" ")[1];
  // console.log(token);
  // verify token
  const verifiedToken = verifyToken(token);
  if (verifiedToken) {
    const user = await Agent.findById(verifiedToken.id).select(
      "name email role"
    );
    req.userAuth = user;
    console.log(req.userAuth);
    next();
  } else {
    const err = new Error("Token expired/invalid");
    next(err);
  }
};

export { isAgentLogin };
