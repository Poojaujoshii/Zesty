import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRestaurants } from "./RestrauntContext";
import RestaurantCard from "./RestrauntCard";
import LoadingSpinner from "./LoadingSpinner";

const cuisineList = [
  "Biryani","Rolls","Pizzas","Burger","Tea","Chinese","Cake",
  "Dessert","North Indian","South Indian","Sandwich","Ice cream"
];

export default function SearchPage() {
  const { restaurants } = useRestaurants();   // <- already fetched
  const [filtered, setFiltered] = useState(restaurants);
  const [search, setSearch] = useState("");

  // whenever the master list arrives (first mount) or search text changes:
  useEffect(() => {
    const result = restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  }, [search, restaurants]);

  if (restaurants.length === 0) return <LoadingSpinner />; // still loading first time

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Large Search Bar */}
      <div className="flex justify-center my-6">
        <input
          type="text"
          placeholder="Search for restaurants and food"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-2xl px-6 py-3 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring focus:ring-orange-400"
        />
      </div>

      {/* Cuisine Scroll */}
      <h2 className="text-xl font-bold mb-4 px-4">Popular Cuisines</h2>
      <div className="flex overflow-x-auto gap-4 px-4 pb-6">
        {cuisineList.map((cuisine) => (
          <div
            key={cuisine}
            onClick={() => setSearch(cuisine)}   // quick-filter by tap
            className="flex flex-col items-center text-sm cursor-pointer font-medium text-gray-700 min-w-[80px]"
          >
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 text-xl font-bold">
              {cuisine[0]}
            </div>
            <span className="mt-2">{cuisine}</span>
          </div>
        ))}
      </div>

      {/* Results */}
      <div className="res-container px-4">
        {filtered.length ? (
          filtered.map((res) => (
            <Link key={res.info.id} to={"/restraunts/" + res.info.id}>
              <RestaurantCard resData={res} />
            </Link>
          ))
        ) : (
          <p>No restaurants match “{search}”.</p>
        )}
      </div>
    </div>
  );
}
