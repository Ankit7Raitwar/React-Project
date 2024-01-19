import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../stor/authSlice'

function Logoutbtn() {
 const dispatch = useDispatch();

 const logoutHandler = ()=> {
     authService.logout().then( ()=> {
        dispatch(logout())
     })
 }

  return (
    <button className='inline-bick px-6 py-2 duraion-200 hover:bg-blue-100 rouded-full'
    onClick={logoutHandler}
    > Logout</button>
  )
}

export default Logoutbtn
