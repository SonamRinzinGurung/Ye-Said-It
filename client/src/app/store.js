import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "../features/quoteSlice";

export const store = configureStore({
  reducer: {
    quote: quoteReducer,
  },
});
