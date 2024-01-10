import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export default function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    const calculateFactorial = (val)=>{
        let result = 1;
        for(let i=1;i<=val;i++){
          result*=i;
        }
        return result;
    }
    const expensiveValue = useMemo(()=>calculateFactorial(input),[input])

    
    // Your solution ends here

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}