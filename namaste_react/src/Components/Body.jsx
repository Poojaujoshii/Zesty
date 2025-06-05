// src/Body.js
import { useEffect } from "react";
import { useRestaurants } from "./RestrauntContext";
import LoadingSpinner from "./LoadingSpinner";
import RestaurantCard from "./RestrauntCard";

export default function Body() {
  const { restaurants, setRestaurants } = useRestaurants();

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9175337&lng=77.65045719999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const list =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setRestaurants(list);           // <- put it in context
    }
    if (restaurants.length === 0) fetchData(); // don’t refetch if already there
  }, [restaurants, setRestaurants]);

  if (restaurants.length === 0) return <LoadingSpinner />;

  return (
    <div className="res-container">
      {restaurants.map((res) => (
        <RestaurantCard key={res.info.id} resData={res} />
      ))}
    </div>
  );
}
