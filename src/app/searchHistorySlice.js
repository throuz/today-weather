import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("searchHistory")
    ? JSON.parse(localStorage.getItem("searchHistory"))
    : [],
};

export const searchHistorySlice = createSlice({
  name: "searchHistory",
  initialState,
  reducers: {
    addSearchHistory: (state, action) => {
      state.value.unshift(action.payload);
      localStorage.setItem("searchHistory", JSON.stringify(state.value));
    },
    removeSearchHistory: (state, action) => {
      state.value.splice(action.payload, 1);
      localStorage.setItem("searchHistory", JSON.stringify(state.value));
    },
  },
});

export const { addSearchHistory, removeSearchHistory } =
  searchHistorySlice.actions;

export const selectSearchHistory = (state) => state.searchHistory.value;

export default searchHistorySlice.reducer;
