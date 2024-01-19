import React from 'react'
import Footer from './Componet/Footer/Footer'

import { Outlet } from 'react-router-dom'
import Header from './Componet/Header/Header'

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        {/* outlet : is methode in router to chage the layout componet not another 
        like <Header> and <footer> */}
        <Footer/>
    </>
  )
}

export default Layout
