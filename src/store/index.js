import { configureStore } from "@reduxjs/toolkit";
import indexSlice from "../slice/index";

export const store = configureStore({
  reducer: {
    action: indexSlice,
  },
});