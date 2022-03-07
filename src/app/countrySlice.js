import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    changeCountry: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeCountry } = countrySlice.actions;

export const selectCountry = (state) => state.country.value;

export default countrySlice.reducer;
