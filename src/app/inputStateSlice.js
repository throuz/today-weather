import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: false,
  country: false,
};

export const inputStateSlice = createSlice({
  name: "inputState",
  initialState,
  reducers: {
    changeCityInputState: (state) => {
      state.city = !state.city;
    },
    changeCountryInputState: (state) => {
      state.country = !state.country;
    },
  },
});

export const { changeCityInputState, changeCountryInputState } =
  inputStateSlice.actions;

export const selectCityInputState = (state) => state.inputState.city;

export const selectCountryInputState = (state) => state.inputState.country;

export default inputStateSlice.reducer;
