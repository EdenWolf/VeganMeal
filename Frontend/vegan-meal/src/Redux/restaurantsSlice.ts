import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Restaurant } from "../Types/Restaurant";

const initialState: Restaurant[] = [];

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: initialState,
  reducers: {
    init: (_state, action: PayloadAction<Restaurant[]>) => action.payload,
  },
});

export const { init } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
