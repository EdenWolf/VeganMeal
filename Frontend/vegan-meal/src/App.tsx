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

function App() {
  const [data, setData] = useState<Restaurant[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://localhost:8080/data");
        setData(response.data);
        console.log(response);
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
          <Route path="/" element={<RestaurantsList data={data} />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/filter/location" element={<FilterByLocation />} />
          <Route path="/filter/types" element={<FilterByType />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/restaurant" element={<SearchByRestaurant />} />
          <Route path="/search/dish" element={<SearchByDish />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
