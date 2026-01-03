import { useRef, useEffect } from "react";

function Navbar({ setSearch, setType, setParking }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div
      style={{
        padding: "10px",
        borderBottom: "1px solid gray",
        display: "flex",
        gap: "10px",
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Search by name or address"
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setType(e.target.value)}>
        <option value="">All Types</option>
        <option>Rajasthani</option>
        <option>Gujarati</option>
        <option>Mughlai</option>
        <option>Jain</option>
        <option>Thai</option>
        <option>North Indian</option>
        <option>South Indian</option>
      </select>

      <select onChange={(e) => setParking(e.target.value)}>
        <option value="">All Parking</option>
        <option value="true">Parking Available</option>
        <option value="false">No Parking</option>
      </select>
    </div>
  );
}

export default Navbar;
