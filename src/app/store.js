import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import categoryReducer from "../features/CategoriesSlice";
import productReducer from "../features/ProductSlice";
import reviewReducer from "../features/ReviewSlice";

export const store = configureStore({
  reducer: {
    application,
    categoryReducer,
    productReducer,
    reviewReducer,
  },
});
