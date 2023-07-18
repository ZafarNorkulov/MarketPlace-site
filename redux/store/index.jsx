import { configureStore } from "@reduxjs/toolkit";
import LangReducer from "../reducers/langReducer";
import AuthReducer from "../reducers/authReducer";

export default configureStore({
  reducer: {
    lang: LangReducer,
    auth: AuthReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
