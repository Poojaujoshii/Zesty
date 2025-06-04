import { useEffect,useState } from "react";

export default function useRestrantMenu(resId){
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
    fetchMenu();
  }, []);

    const fetchMenu = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9175337&lng=77.65045719999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        console.log(json);
        
        setResInfo(json.data);
    };
    return resInfo;
}