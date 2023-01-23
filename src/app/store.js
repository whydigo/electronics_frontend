import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import categoryReducer from "../features/CategoriesSlice";
import cameraReducer from "../features/CameraSlice";
import smartWatchReducer from "../features/SmartWatchSlice";

export const store = configureStore({
  reducer: {
    application,
    categoryReducer,
    cameraReducer,
	 smartWatchReducer
  },
});
