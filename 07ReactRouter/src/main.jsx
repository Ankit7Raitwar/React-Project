import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Componet/Home/Home.jsx'
import About from './Componet/About/About.jsx'
import Contact from './Componet/Contact/Contact.jsx'
import Costom from './Componet/Costom/Costom.jsx'
import Github, { githubInfo } from './Componet/Github/Github.jsx'
import Login from './Componet/Login.jsx'
//import Header from './Componet/Header/Header.jsx'

//  const router = createBrowserRouter([
//   {
//      path:'/',
//      element : <Layout/>,
//      children:[ 
//         {
//           path:"home",
//           element:<Home/>

//         },
//         {
//           path:"about",
//           element:<About/>
//         },
//         {
//           path:"contact",
//           element:<Contact/>
//         }
//     ]
//  }
//  ])

// methide is create router  and element and childer
const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
    <Route path='' element={<Home/>}  />
    <Route path='about' element={<About/>}  />
    <Route path='contact' element={<Contact/>}  />
    {/* costom me userid pass kiya gaya ho in url  */}
    <Route path='user/:userid' element={<Costom/>}  />
    <Route 
    // loader is method  fech api data and optimize render
    loader={githubInfo}
    path='github' element={<Github/>}  />
   <Route path='login' element={<Login/>}/>
    </Route>
   )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
  {/* It is router methode always pass router in like  all componet */}
    <RouterProvider router ={router} />
  </React.StrictMode>,
)
