import { useEffect, useState } from "react"

export default function Counter(){
    const [count,setCount]= useState(0);
    useEffect(()=>{
        const interval= setInterval(()=>{
            setCount(pre=>{
                if(pre<10){
                    return pre+1;
                }
                else{
                    clearInterval(interval)
                    return pre;
                }
            })
        },1000)
        return () => clearInterval(interval); // Cleanup
    }, []);
   
    
    

    return(<>
    <h2>counter:{count}</h2>
    </>)
}