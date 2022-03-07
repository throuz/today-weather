import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./citySlice";
import countryReducer from "./countrySlice";
import weatherReducer from "./weatherSlice";

export const store = configureStore({
  reducer: {
    city: cityReducer,
    country: countryReducer,
    weather: weatherReducer,
  },
});
