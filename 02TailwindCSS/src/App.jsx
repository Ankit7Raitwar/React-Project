import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/componet/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-m mb-4'>  TailwindCSS GET Started</h1>
      <Card username ='chaiAurReact' btn ="click me"/>
      <Card username ='React project' />
   </>
  );
}

export default App
