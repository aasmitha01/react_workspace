import { useEffect, useState } from "react";
import { getData } from "../utils/localStorage";
import RestaurantCard from "../components/RestaurantCard";

function CustomerDashboard() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(getData());
  }, []);

  return (
    <div>
      <h2>Customer Dashboard</h2>

      {restaurants.map((r) => (
        <RestaurantCard
          key={r.restaurantID}
          data={r}
        />
      ))}
    </div>
  );
}

export default CustomerDashboard;
