// src/RestaurantsContext.js
import { createContext, useContext, useState } from "react";

const RestaurantContext = createContext();

export function RestaurantsProvider({ children }) {
  const [restaurants, setRestaurants] = useState([]);   // shared list
  return (
    <RestaurantContext.Provider value={{ restaurants, setRestaurants }}>
      {children}
    </RestaurantContext.Provider>
  );
}

// easy hook so you don’t import useContext everywhere
export function useRestaurants() {
  return useContext(RestaurantContext);
}
