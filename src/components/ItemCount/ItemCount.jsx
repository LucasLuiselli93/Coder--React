import React, {  useState } from 'react'
import "../NavBar/NavBar"



const ItemCount = ({initial, stock, onAdd, handleAgregar}) => {

   const [count,setCount] = useState(initial)
    
    
    const increase = () =>{
        (count > 1) && setCount(count+1 ) 
        
      
    }

    const decrease = () =>{
        (count > stock ) && setCount(count-1) 
       
    }

     const reset = () =>{
         setCount(initial) 
     }
   

    return (
        <div>
            <div className="container " >
            <p>disponible: {stock}</p>
                <hr />
                <div className="d-flex justify-content-center gap-2">
                    <button className="text-center " disabled={stock===0} onClick={increase}> +1 </button>
                    <button className="text-center mr-2" disabled={stock===0} onClick={decrease}> -1 </button>
                </div>

                <button 
                         disabled={stock === 0}
                        onClick={()=>{onAdd(count);reset()}}
                        className=" my-3 btn cart px-auto"
                                            
                        >ADD TO CART
                                        
                </button> 
              
                {/* <button className="text-center" onClick={reset}> Reset </button> */}
                

            </div>
     
        </div>
    )
}

export default ItemCount
