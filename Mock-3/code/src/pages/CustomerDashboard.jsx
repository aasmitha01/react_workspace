import { useEffect,useState } from "react";
import { getData } from "../utils/localStorage";
import RestaurantCard from "../components/RestaurantCard";
function customerDashboard(){
    const [restaurants,setRestaurants]=useState([]);
    useEffect(()=>{
        setRestaurants(getData());
    },[]);
    return (
        <div>
            <h2>Customer Dashboard</h2>
            {restaurants.map((r)=>(
                <RestaurantCard key={r.restaurantId} data={r}/>
            ))}
        </div>
    );
}
export default customerDashboard; 