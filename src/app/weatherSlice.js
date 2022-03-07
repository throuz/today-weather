import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios";

const initialState = {
  value: {},
  status: "idle",
};

export const getWeatherAsync = createAsyncThunk(
  "weather/fetchWeather",
  async (coordinate) => {
    const response = await axios.get("data/2.5/weather", {
      params: coordinate,
    });
    return response.data;
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getWeatherAsync.fulfilled, (state, action) => {
        state.status = " ";
        state.value = action.payload;
      });
  },
});

export const selectWeather = (state) => state.weather.value;
export const selectWeatherStatus = (state) => state.weather.status;

export default weatherSlice.reducer;
