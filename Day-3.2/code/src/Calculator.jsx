import { useState } from "react";
function Calculator(){
    const [num1,setNum1]=useState("");
    const [num2,setnum2]=useState("");
    const [operation,setOperation]=useState("add");
    const [results,setResults]=useState([]);

    const handleCalculate=()=>{
        const a=Number(num1);
        const b=Number(num2);
        let result=0;
        if(operation==="add")result=a+b;
        if(operation==="sub")result=a-b;
        if(operation==="mul")result=a*b;
        setResults([...results,result]);
    };
return (
    <div>
        <input type="number" value={num1} onChange={(e)=>setNum1(e.target.value)}/>
        <select value={operation} onChange={(e)=>setOperation(e.target.value)}>
            <option value="add">Add</option>
            <option value="sub">Subtract</option>
            <option value="mul">Multiply</option>
        </select>
        <input type="number" value={num2} onChange={(e)=>setNum2(e.target.value)}/>
        <br/><br/>
        <button onClick={handleCalculate}>Perform Action</button>
        <ul>
            {results.map((res,index)=>(
            <li key={index}>{res}</li>))}
        </ul>

        

    </div>
);
    
}
export default Calculator;