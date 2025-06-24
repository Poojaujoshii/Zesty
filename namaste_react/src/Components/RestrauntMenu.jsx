import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useParams } from "react-router-dom";
import MenuItemCard from "./MenuItemCard";
import useRestrantMenu from "../Utilities/useRestrauntMenu";
import useOnlineStatus from "../Utilities/useOnlineStatus";

export default function RestrauntMenu() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { resId } = useParams();
  const isOnline = useOnlineStatus();

  if (isOnline === false) {
    return (
      <h1 className="text-center text-xl text-red-500 mt-10">
        Looks like you're offline. Please check your internet connection.
      </h1>
    );
  }

  const resInfo = useRestrantMenu(resId);
  if (resInfo === null) return <LoadingSpinner />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-2">
        {name}
      </h1>
      <h3 className="text-lg text-center text-gray-500 mb-6">
        {cuisines?.join(", ")} • {costForTwoMessage}
      </h3>

      {categories.map((category, index) => {
        const categoryTitle = category?.card?.card?.title;
        const itemCards = category?.card?.card?.itemCards;
        if (!itemCards || itemCards.length === 0) return null;

        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            className="border border-gray-200 shadow-sm rounded-lg mb-4 overflow-hidden"
          >
            <h2
              onClick={() => setActiveIndex(isActive ? null : index)}
              className="flex justify-between items-center bg-green-100 hover:bg-green-200 cursor-pointer p-4 text-lg font-medium transition-colors"
            >
              <span>
                {categoryTitle} ({itemCards.length})
              </span>
              <span>{isActive ? "▲" : "▼"}</span>
            </h2>

            {isActive && (
              <ul className="bg-white transition-all duration-300 px-4 py-2">
                {itemCards.map((item) => (
                  <li key={item.card.info.id} className="mb-4">
                    <MenuItemCard item={item} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
