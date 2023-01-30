import { configureStore } from "@reduxjs/toolkit";
import { getPropertiesReducer } from "./property/propertyReducer";
import { getReviewsReducer } from "./reviews/reviewReducer";
import { getUserReducer } from "./user/userReducer";

const store = configureStore({
  reducer: {
    getPropertiesData: getPropertiesReducer.reducer,
    getUserData: getUserReducer.reducer,
    getReviewsData: getReviewsReducer.reducer,
  },
});

export default store;
