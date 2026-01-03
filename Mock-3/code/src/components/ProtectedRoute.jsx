import {Navigate} from "react-router-dom";
import { Children, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
function ProtectedRoute({childern,role}){
    const {auth}=useContext(AuthContext);
    if(!AuthContext.isLoggedIn){
        return <Navigate to="/"/>
    }
    if(role && auth.role!==role){
        return <Navigate to="/"/>
    }
    return Children;
}
export default ProtectedRoute;