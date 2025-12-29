import { useState,useMemo,useCallback } from "react";
import ProductList from "./ProductList";
const productsData=[
  {id:1,name:"Laptop",price:50000},
  {id:2,name:"Mobile",price:20000},
  {id:3,name:"Headphones",price:3000},
];
function App(){
  const [counter,setCounter]=useState(0);
  const [products]=useState(productsData);
  const totalPrice=useMemo(()=>{
    console.log("Calculating total price...");
    return products.reduce((sum,p)=>sum+p.price,0);
  },[products]);
  const handleSelectedProduct=useCallback((product)=>{
    alert(`Selected Product:${product.name}` );
  },[]);
  return (
    <div>
      <h2>Total Price: ₹{totalPrice}</h2>
      <button onClick={()=>setCounter(counter+1)}>
        Counter:{counter}
      </button>
      <ProductList 
       products={products}
       onSelectproduct={handleSelectedProduct}/>
    </div>
  );
}
export default App;