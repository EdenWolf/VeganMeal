export type Restaurant = {
  address: string;
  city: string;
  filters: string[];
  image: string;
  location: { longitude: number; latitude: number };
  menu: Dish[];
  name: string;
  priceAverage: number;
  track_id: string;
};

export type Dish = {
  description: string;
  drinks: boolean;
  image: string;
  name: string;
  notFood: boolean;
  price: number;
  vegan: boolean;
  vegetarian: boolean;
};
