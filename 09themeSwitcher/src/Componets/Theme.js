import { createContext,useContext } from "react";
// create context  variable and methode in new method
export const ThemeContext = createContext({
    ThemeMode:"light",
    darkMode: () =>{},
    lightMode: () =>{},
})

export const ThemeProvider = ThemeContext.Provider

// custom hook use 
export default function useTheme() {
     
    return useContext(ThemeContext)
}