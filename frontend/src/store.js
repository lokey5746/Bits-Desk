import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/general/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
