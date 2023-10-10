import axios from "axios";

const API_URL = "/api/v1/users/";

//  register user

const register = async (userData) => {
  const res = await axios.post(API_URL, userData);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }

  return res.data;
};

const signin = async (userData) => {
  const res = await axios.post(API_URL + "signin", userData);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

// signout user
const signout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  signout,
  signin,
};

export default authService;
