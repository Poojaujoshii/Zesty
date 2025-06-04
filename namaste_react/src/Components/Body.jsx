import { useEffect, useState } from "react";
import RestaurantCard from "./RestrauntCard"
import "./CSS/Body.css"
import LoadingSpinner from "./LoadingSpinner";

import { Link } from "react-router-dom";
import useOnlineStatus from "../Utilities/useOnlineStatus";

export default function Body() {
  const [resList, setResList] = useState([]);
  const [search,setSearch] = useState("");
  const [filtered, setFiltered] = useState([])



  useEffect(()=>{
    fetchData();
  },[])
  const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9175337&lng=77.65045719999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json()
    console.log(json);

    setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFiltered(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
  }

  const onlineStatus = useOnlineStatus();
  if(onlineStatus===false){
    return <h1>Looks like you're offline please check your internet connection</h1>
  }
  
 
  
  return resList.length === 0? <LoadingSpinner/>:(
    <>
      <div className="body">
        <div className="filter">
         <input
            type="text"
            placeholder="Search restaurants..."
            value={search}
            className="searchbar"
            onChange={(e) => setSearch(e.target.value)}
            
          />
          <button
            className="search"
            onClick={() => {
              const filteredList = resList.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setFiltered(filteredList);
            }}
          >
            Search
          </button>

        </div>
        <h1 className="title">Top rated restraunts near you</h1>
        <div className="res-container">
          {filtered.map((restaurant) => (
           <Link  key={restaurant.info.id} to={"/restraunts/"+restaurant.info.id}><RestaurantCard resData={restaurant} /></Link> 
          ))}
        </div>
      </div>
    </>
  );
}
