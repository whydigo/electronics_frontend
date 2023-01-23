import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import categoryReducer from "../features/CategoriesSlice";
import cameraReducer from "../features/CameraSlice";
import smartWatchReducer from "../features/SmartWatchSlice";
import headsetWatchReducer from "../features/HeadsetSlice";
import laptopReducer from "../features/LaptopSlice";
import smartPhoneReducer from "../features/SmartPhoneSlice";
import tabletReducer from "../features/TabletSlice";
import televisionReducer from "../features/TelevisionSlice";

export const store = configureStore({
  reducer: {
    application,
    categoryReducer,
    cameraReducer,
	 smartWatchReducer,
	 headsetWatchReducer,
	 tabletReducer,
	 laptopReducer,
	 smartPhoneReducer,
	 televisionReducer
  },
});
