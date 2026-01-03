import { useEffect, useState } from "react";
import { getData, saveData } from "../utils/localStorage";
import RestaurantCard from "../components/RestaurantCard";

function AdminDashboard() {
  const [restaurants, setRestaurants] = useState([]);

  const initialForm = {
    restaurantName: "",
    address: "",
    type: "",
    parkingLot: "",
    image:
      "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg",
  };

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    setRestaurants(getData());
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.restaurantName || !form.address || !form.type || !form.parkingLot) {
      alert("All fields are required");
      return;
    }

    const newRestaurant = {
      restaurantID: Date.now(),
      ...form,
      parkingLot: form.parkingLot === "true",
    };

    const updated = [...restaurants, newRestaurant];
    saveData(updated);
    setRestaurants(updated);
    setForm(initialForm);
    alert("Restaurant added successfully");
  };

  const deleteRestaurant = (id) => {
    if (!confirm("Are you sure you want to delete?")) return;

    const updated = restaurants.filter((r) => r.restaurantID !== id);
    saveData(updated);
    setRestaurants(updated);
    alert("Restaurant deleted");
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* LEFT SIDEBAR */}
      <div style={{ width: "30%", border: "1px solid gray", padding: "10px" }}>
        <h3>Add Restaurant</h3>

        <input
          name="restaurantName"
          placeholder="Restaurant Name"
          value={form.restaurantName}
          onChange={handleChange}
        />

        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        />

        <select name="type" value={form.type} onChange={handleChange}>
          <option value="">Select Type</option>
          <option>Rajasthani</option>
          <option>Gujarati</option>
          <option>Mughlai</option>
          <option>Jain</option>
          <option>Thai</option>
          <option>North Indian</option>
          <option>South Indian</option>
        </select>

        <select
          name="parkingLot"
          value={form.parkingLot}
          onChange={handleChange}
        >
          <option value="">Parking Available?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <button onClick={handleAdd}>Add</button>
      </div>

      {/* RIGHT CONTENT */}
      <div style={{ width: "70%" }}>
        <h2>Admin Dashboard</h2>

        {restaurants.map((r) => (
          <RestaurantCard
            key={r.restaurantID}
            data={r}
            isAdmin={true}
            onDelete={deleteRestaurant}
          />
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
