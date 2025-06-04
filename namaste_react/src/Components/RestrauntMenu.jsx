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
  if(isOnline === false){
    return ( <h1>Looks Like your offline please Check your internet</h1>)
  }



  const resInfo = useRestrantMenu(resId);
  if (resInfo === null) return <LoadingSpinner />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <>
      <h1 className="ResName">
        <strong>{name}</strong>
      </h1>
      <h3 className="resCuisines">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </h3>

      {categories.map((category, index) => {
        const categoryTitle = category?.card?.card?.title;
        const itemCards = category?.card?.card?.itemCards;

        if (!itemCards || itemCards.length === 0) return null;

        const isActive = activeIndex === index;

        return (
          <div key={index} className="accordion-section">
            <h2
              onClick={() => setActiveIndex(isActive ? null : index)}
              className="accordion-header"
            >
              <span>
                {categoryTitle} ({itemCards.length})
              </span>
              <span>{isActive ? "▲" : "▼"}</span>
            </h2>

            {isActive && (
              <ul className="accordion-content">
                {itemCards.map((item) => (
                  <li key={item.card.info.id}>
                    <MenuItemCard item={item} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </>
  );
}
