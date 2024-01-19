import { createContext,useContext } from "react";

// Create  context  to use globle variable and create some  obj and fun.
export const TodoContext = createContext({
 
     todos:[
        {
            id:1,
            todo:"todo message",
            completed:false,
        }

     ],
     addTodo:(todo) =>{},
     updateTodo:(id,todo) =>{},
     deleteTodo:(id) =>{},
     toggleComplete:(id) =>{},
   

})
 // store  TodoContext.Provider and use to rap app.js
 export const TodoProvider = TodoContext.Provider

 // custom hook ti return useContext me todoContext
 export const useTodo = () =>{
    return useContext(TodoContext)
 }