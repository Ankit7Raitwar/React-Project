import { useState } from 'react'


function App() {
  const [color, setColor] = useState('olive')

  return (
    
      <div className='w-[auto] h-screen duration-200 ' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inser-x-0 px-2'>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={()=>setColor("red") } 
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{ backgroundColor:"red"
        }}
        >
         Red
        </button>
        <button onClick={()=>setColor("green")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{ backgroundColor:"green" 
        }}
        >
         Green
        </button>
        <button onClick={()=>setColor("pink")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{ backgroundColor:"pink"
        }}
        >
         pinck
        </button>
        <button onClick={()=>setColor("blue")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{ backgroundColor:"blue"
        }}
        >
         blue
        </button>
        <button onClick={()=>setColor("black")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{ backgroundColor:"black"
        }}
        >
         black
        </button>
        <button onClick={()=>setColor("brown")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{ backgroundColor:"brown"
        }}
        >
         Brown
        </button>
        <button onClick={()=>setColor("burlywood")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{ backgroundColor:"burlywood"
        }}
        >
         Burlywood
        </button>
        <button onClick={()=>setColor("yellowgreen")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{ backgroundColor:"yellowgreen"
        }}
        >
         Yellowgreen
        </button>
        <button onClick={()=>setColor("yellow")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{ backgroundColor:"yellow"
        }}
        >
         Yellow
        </button>
        <button onClick={()=>setColor("aqua")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{ backgroundColor:"aqua"
        }}
        >
         Aqua
        </button>
        </div>

        </div>
      </div>
        
    
  )
}

export default App
