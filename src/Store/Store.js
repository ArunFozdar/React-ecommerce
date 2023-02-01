import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Authslice";

export default configureStore({
  reducer: { auth: authReducer }, //add reducers here
});
