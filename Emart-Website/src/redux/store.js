import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Ensure correct import

const store = configureStore({
  reducer: rootReducer, // Use the correct reducer reference
});

export default store;
