import { useId } from "react"
import React from 'react'


// forwardRef: use for pass ref to indivusual input filed but use all componet
const Input = React.forwardRef( 
    function Input(
        {
          lebel,
          text = 'text',
          className = "",
          ...props  
        },ref) {
        const id = useId();
         
        return (
            <div className="w-full">
             {lebel && <lebel
              className ="inline-block mb-1 pl-1"
              htmlFor ={id}
             >
               {lebel} 
             </lebel>
             }
             <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50
              duration-200 border border-gray-200 w-full
              ${className}`}
              ref={ref}
              {...props}
              id={id}
            />
            </div>
        )
        }
    

)

export default Input
