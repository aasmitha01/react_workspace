import { useEffect,useState } from "react";
import { getData,saveDate } from "../utils/localStorage";
import RestaurantCard from "../components/RestaurantCard";
function AdminDashboard(){
    const [restaurants,setRestaurants]=useState([]);
    useEffect(()=>{
        setRestaurants(getData());
    
    },[]);
    const addRestaurant=(data)=>{
        const updated=[...restaurants,data];
        saveDate(updated);
        setRestaurants(updated);
        alert("REstaurant added");
    };
    const deleteRestaurant=(id)=>{
        if(!confirm("Are you sure you want to delete?"))return;
        const update=restaurants.filter((r)=>r.restaurantID!==id);
        saveDate(update);
        setRestaurants(update);
        alert("Restaurant deleted");
    };
    return (
        <div>
            <h2>Admin Dashboard</h2>
            {/*Sidebar from will go here*/}
            {restaurants.map((r)=>(
                <RestaurantCard 
                key={r.restaurantID}
                data={r}
                isAdmin onDelete={deleteRestaurant}/>
            ))}
        </div>
    );
}
export default AdminDashboard;