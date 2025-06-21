import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./NavSlice";
// Importing the NavSlice reducer to be used in the store
// This file sets up the Redux store for the application

const store = configureStore({
  reducer: {
    sidebar: NavSlice,
  },
});

export default store;
