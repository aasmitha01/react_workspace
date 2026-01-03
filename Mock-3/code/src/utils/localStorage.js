export const getData=()=>{
    return JSON.parse(localStorage.getItem("evalData"))||[];
};
export const saveDate=(data)=>{
    localStorage.setItem("evalData",JSON.stringify(data));
};