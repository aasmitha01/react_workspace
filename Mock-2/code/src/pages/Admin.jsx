import { useState, useCallback } from "react";
import FleetCard from "../components/FleetCard";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [fleets, setFleets] = useState([]);
  const [form, setForm] = useState({
    regNo: "",
    category: "",
    driver: "",
    available: "Available",
  });

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addFleet = () => {
    if (!form.regNo || !form.category || !form.driver) {
      alert("All fields required");
      return;
    }
    setFleets([...fleets, { ...form, id: Date.now() }]);
    setForm({ regNo: "", category: "", driver: "", available: "Available" });
  };

  const updateDriver = useCallback((id) => {
    const name = prompt("Enter new driver name");
    if (!name || !name.trim()) return;
    setFleets((prev) =>
      prev.map((f) => (f.id === id ? { ...f, driver: name } : f))
    );
  }, []);

  const toggleAvailability = useCallback((id) => {
    setFleets((prev) =>
      prev.map((f) =>
        f.id === id
          ? {
              ...f,
              available:
                f.available === "Available" ? "Unavailable" : "Available",
            }
          : f
      )
    );
  }, []);

  const deleteFleet = useCallback((id) => {
    if (confirm("Are you sure?")) {
      setFleets((prev) => prev.filter((f) => f.id !== id));
    }
  }, []);

  return (
    <div>
      <button onClick={logout} style={{ float: "right" }}>
        Logout
      </button>

      <h2>Admin Dashboard</h2>

      <div>
        <input name="regNo" placeholder="Vehicle No" value={form.regNo} onChange={handleChange} />
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
        <input name="driver" placeholder="Driver Name" value={form.driver} onChange={handleChange} />

        <select name="available" value={form.available} onChange={handleChange}>
          <option>Available</option>
          <option>Unavailable</option>
        </select>

        <button onClick={addFleet}>Add Fleet</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {fleets.map((fleet) => (
          <FleetCard
            key={fleet.id}
            fleet={fleet}
            updateDriver={updateDriver}
            toggleAvailability={toggleAvailability}
            deleteFleet={deleteFleet}
          />
        ))}
      </div>
    </div>
  );
}

export default Admin;
