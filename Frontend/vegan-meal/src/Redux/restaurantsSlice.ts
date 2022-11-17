import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Restaurant } from "../Types/Restaurant";

interface RestaurantsState {
  restaurants: Restaurant[];
  tags: string[];
  locations: string[];
}

const initialState: RestaurantsState = {
  restaurants: [],
  tags: [],
  locations: [],
};

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: initialState,
  reducers: {
    initRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      return { ...state, restaurants: action.payload };
    },
  },
});

export const { initRestaurants } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
