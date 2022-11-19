import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Restaurant } from "../Types/Restaurant";

interface RestaurantsState {
  restaurantsArray: Restaurant[];
  restaurantsDictionary: { [key: string]: Restaurant };
  tags: string[];
  locations: string[];
}

const initialState: RestaurantsState = {
  restaurantsArray: [],
  restaurantsDictionary: {},
  tags: [],
  locations: [],
};

function getTags(restaurants: Restaurant[]) {
  const tags: string[] = [];
  restaurants.forEach((restaurant) => {
    restaurant.filters.forEach((filter) => {
      if (!tags.includes(filter)) tags.push(filter);
    });
  });
  return tags;
}

function getLocations(restaurants: Restaurant[]) {
  const locations: string[] = [];
  restaurants.forEach((restaurant) => {
    if (!locations.includes(restaurant.city)) locations.push(restaurant.city);
  });
  return locations;
}

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: initialState,
  reducers: {
    initRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      return {
        ...state,
        restaurantsArray: action.payload,
        restaurantsDictionary: Object.assign(
          {},
          ...action.payload.map((item: Restaurant) => ({
            [item.track_id]: {
              address: item.address,
              city: item.city,
              filters: item.filters,
              image: item.image,
              location: item.location,
              menu: item.menu,
              name: item.name,
              priceAverage: item.priceAverage,
            },
          }))
        ),
        tags: getTags(action.payload),
        locations: getLocations(action.payload),
      };
    },
  },
});

export const { initRestaurants } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
