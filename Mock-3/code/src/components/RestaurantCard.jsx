import { useNavigate } from "react-router-dom";

function RestaurantCard({ data, isAdmin, onDelete }) {
  const navigate = useNavigate();

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <img src={data.image} width="200" alt={data.restaurantName} />
      <h3>{data.restaurantName}</h3>
      <p>{data.address}</p>
      <p>Type: {data.type}</p>
      <p>Parking: {data.parkingLot ? "Yes" : "No"}</p>

      {isAdmin && (
        <>
          <button
            onClick={() =>
              navigate(`/admin/restaurants/update/${data.restaurantID}`)
            }
          >
            Update
          </button>

          <button onClick={() => onDelete(data.restaurantID)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default RestaurantCard;
