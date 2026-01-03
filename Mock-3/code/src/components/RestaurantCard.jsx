function RestaurantCard({data,isAdmin,onDelete}){
    return(
        <div style={{border:"1px solid gray",margin:"10px"}}>
            <img src={data.image} width="200"/>
            <h3>{data.restaurantName}</h3>
            <p>{data.address}</p>
            <p>Type:{data.type}</p>
            <p>Parking:{data.parkingLot?"Yes":"No"}</p>
            {isAdmin && (
                <>
                <button onClick={()=>onDelete(data.restaurantID)}>Delete</button></>
            )}
        </div>
    );
}
export default RestaurantCard;