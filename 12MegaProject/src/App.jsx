import { useState } from 'react'
import authServise from './appwrite/auth';
// import './App.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { login, logout } from './stor/authSlice';
import {Header,Footer} from './components/index'
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);


  const dispatch = useDispatch()

  useEffect( () =>{
    authServise.getCurrentUser()
    .then((userdata) =>{
      if(userdata){
        dispatch(login({userdata}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() =>setLoading(false))
  },[])




  return !loading ? (
    <div className='min-h-screen flex flex-wrap 
      content-between bg-gray-400'>
      <div className='w-full block'>
       <Header/>
       <main>
          Todo {/* <Outlet/> */}
       </main>
       <Footer/>
      </div>

    </div>
  ) : null
}

export default App
