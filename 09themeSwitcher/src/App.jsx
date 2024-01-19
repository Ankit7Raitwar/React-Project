import { useEffect, useState } from 'react'
// import './App.css'
import { ThemeProvider } from './Componets/Theme'
import ThemeBtn from './Componets/ThemeBtn'
import Card from './Componets/Card'

function App() {
  const [ThemeMode, setThemeMode] = useState("light")
  
  const lightMode =() =>{
    setThemeMode("light")
  }
  const darkMode =() =>{
    setThemeMode("dark")
  }

  // actuall change in theme 
  useEffect(() =>{
     // remove html theme
    document.querySelector('html').classList.remove("light","dark")
   // add ThemeMode ="value"
    document.querySelector('html').classList.add(ThemeMode)
  },[ThemeMode])


  return (
     // rap all compone ThemeProvider. and jo value pass hui hai
     // ya method like(darkmede) ko same name se difind kar do and apna funtion likh do
      <ThemeProvider value={{ThemeMode,darkMode,lightMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4 ">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

      </ThemeProvider>


  
  )
}

export default App
