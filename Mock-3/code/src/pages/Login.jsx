import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {login}=useContext(AuthContext);
    const Navigate=useNavigate();

    const handleLogin=()=>{
        if(email==="admin@gmail.com"&&password==="admin1234") {
            login("admin");
            Navigate("/admin/dashboard");
        }else if(
            email==="customer@gmail.com"&&password==="customer1234"
        ){
            login("customer");
            Navigate("/customer/dashboard");
        }else{
            alert("Invalid credentials");
        }
        };
        return (
            <div>
                <h2>Login</h2>
                <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={handleLogin}>Login</button>
            </div>
        );
    }
    export default Login;
