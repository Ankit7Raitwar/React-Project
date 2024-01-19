import { useEffect, useState } from 'react'
import { TodoProvider } from './Context'
import TodoForm from './Componets/TodoFrom'
import TodoItem from './Componets/TodoItem'

function App() {
  // create obj todo empty
  const [todos, setTodos] = useState([])

  // todo is pass string  and setTodos use all pre value and ...prev copy all value and change id 
const addTodo = (todo) =>{
  setTodos((prev) =>[{id:Date.now(),...todo},...prev])
}

const updateTodo = (id,todo) =>{
  setTodos((prev) => prev.map((prevTodo) => 
  (prevTodo.id ===id ? todo : prevTodo)))
}
const deleteTodo = (id) =>{
  setTodos((prev) => prev.filter((todo) => todo.id !==id))
}

const toggleComplete = (id) =>{
   setTodos((prev) => prev.map((prevtodo) =>
    prevtodo.id ===id ?{...prevtodo,completed:!prevtodo.completed}:prevtodo))
}

useEffect( () =>{
  // get item  always return string 
  const todos = JSON.parse(localStorage.getItem("todos"))
  
  if(todos && todos.length >0){
    setTodos(todos)
  }
},[])

useEffect( () =>{
   localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

  return (
    // rap all  in TodoProvider and add value all in use in 
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
     
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) =>(
                          <div key={todo.id} className='w-full'> 
                          <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
