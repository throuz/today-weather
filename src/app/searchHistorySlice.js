import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const searchHistorySlice = createSlice({
  name: "searchHistory",
  initialState,
  reducers: {
    addSearchHistory: (state, action) => {
      state.value.push(action.payload);
    },
    removeSearchHistory: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addSearchHistory, removeSearchHistory } =
  searchHistorySlice.actions;

export const selectSearchHistory = (state) => state.searchHistory.value;

export default searchHistorySlice.reducer;
