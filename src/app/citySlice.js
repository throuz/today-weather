import { createSlice } from "@reduxjs/toolkit";
import citiesData from "../datas/cities";

const initialState = {
  value: null,
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeCity } = citySlice.actions;

export const selectCities = (state) =>
  citiesData.filter((city) => city.country === state.country.value?.code);

export default citySlice.reducer;
