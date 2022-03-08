import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./citySlice";
import countryReducer from "./countrySlice";
import inputStateReducer from "./inputStateSlice";
import searchHistoryReducer from "./searchHistorySlice";
import weatherReducer from "./weatherSlice";

export const store = configureStore({
  reducer: {
    city: cityReducer,
    country: countryReducer,
    inputState: inputStateReducer,
    searchHistory: searchHistoryReducer,
    weather: weatherReducer,
  },
});
