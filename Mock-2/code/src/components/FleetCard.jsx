import React from "react";
const FleetCard=React.memo(
({fleet,updateDriver,toggleAvailability,deleteFleet})=>{
    return (
        <div style={{border:"1px solid gray",margin:"10px",padding:"10px"}}>
            <p>Vehicle:{fleet.regNo}</p>
            <p>Category:{fleet.category}</p>
            <p>Driver:{fleet.driver}</p>
            <p>Status:{fleet.available}</p>
            <button onClick={()=>updateDriver(fleet.id)}>Update Driver</button>
            <button onClick={()=>toggleAvailability(fleet.id)}>Toggle Status</button>
            <button onClick={()=>deleteFleet(fleet.id)}>Delete</button>
        </div>
    );
}
);
export default FleetCard;