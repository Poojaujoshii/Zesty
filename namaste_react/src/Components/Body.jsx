import { useEffect, useState } from "react";
import RestaurantCard from "./RestrauntCard"
import { resList as mockData } from "../Utilities/Mockdata";
import "./CSS/Body.css"



export default function Body() {
  const [resList, setResList] = useState(mockData);
  const handleRatings = ()=>{
    const filteredList = mockData.filter((res)=>res.info.avgRating>4);
    setResList(filteredList);
  };

  useEffect(()=>{
    fetchData();
  },[])
  const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9175337&lng=77.65045719999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json()
    console.log(json);

    setResList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    
  }
 
  
  return (
    <>
      <div className="body">
        <div className="filter">
          <button className="button" onClick={handleRatings}>Top Rated Restraunts</button>
        </div>
        <div className="res-container">
          {resList.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant}
            />
          ))}
        </div>
      </div>
    </>
  );
}
