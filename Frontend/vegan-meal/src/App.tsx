import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { RestaurantsList } from "./Pages/RestaurantsList";
import { Restaurant } from "./Types/Restaurant";
import { Layout } from "./Layout";
import { Route, Routes } from "react-router-dom";
import { Filter } from "./Pages/Filter/Filter";
import { FilterByLocation } from "./Pages/Filter/FilterByLocation";
import { FilterByType } from "./Pages/Filter/FilterByType";
import { Search } from "./Pages/Search/Search";
import { SearchByRestaurant } from "./Pages/Search/SearchByRestaurant";
import { SearchByDish } from "./Pages/Search/SearchByDish";
import { RestaurantDetails } from "./Pages/RestaurantDetails";
import { init } from "./Redux/restaurantsSlice";
import { useAppDispatch } from "./Redux/hooks";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://localhost:8080/data");
        dispatch(init(response.data));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route
            path="/"
            element={isLoading ? <div>loading...</div> : <RestaurantsList />}
          />
          <Route path="/filter" element={<Filter />} />
          <Route path="/filter/location" element={<FilterByLocation />} />
          <Route path="/filter/types" element={<FilterByType />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/restaurant" element={<SearchByRestaurant />} />
          <Route path="/search/dish" element={<SearchByDish />} />
          <Route
            path="/restaurant-details/:index"
            element={<RestaurantDetails />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
