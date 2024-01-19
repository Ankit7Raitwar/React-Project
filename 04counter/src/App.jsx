import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  const Addvalue = () =>{
    if(count<20){
       setCount(count+1)
    }
   
  };
  const Removevalue = () =>{
    if(count >0){
      setCount(count - 1)
    }
    
  };
  return (
    <>
      <h1> React in counter first project</h1>
      <h2>Couter: {count}</h2>
      <button onClick={Addvalue}> Add  {count} </button>
      <button onClick={Removevalue}> Remove {count}</button>
    </>
  )
}

export default App
