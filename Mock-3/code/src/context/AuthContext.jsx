import { createContext,useState } from "react";
export const AuthContext=createContext();
export function AuthProvider({children}){
    const [auth,setAuth]=useState({isLoggedIn:false,role:null,});
    const login=(role)=>{setAuth({isLoggedIn:true,role});
};
const logout=()=>{
    setAuth({isLoggedIn:false,role:null});
};
return(
    <AuthContext.Provider value={{auth,login,logout}}>
        {children}
    </AuthContext.Provider>
);
}