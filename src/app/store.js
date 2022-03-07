import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./citySlice";
import countryReducer from "./countrySlice";
import inputStateReducer from "./inputStateSlice";
import weatherReducer from "./weatherSlice";

export const store = configureStore({
  reducer: {
    city: cityReducer,
    country: countryReducer,
    inputState: inputStateReducer,
    weather: weatherReducer,
  },
});
