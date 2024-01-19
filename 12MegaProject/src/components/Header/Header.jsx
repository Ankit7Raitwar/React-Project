import React from 'react'
import {Container,Logo, Logoutbtn} from '../index'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)

  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: 'Login',
      slug: "/login",
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: "/signup",
      active: !authStatus
    },
    {
      name: 'All posts',
      slug: "/all-posts",
      active: authStatus
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]



  return (
    <header className='py-3 shadow bg-gray-500 '>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to= '/'>
             <Logo width='70' />
            </Link>
          </div>
           <ul className='flex ml-auto'> 
            {navItems.map((items)=>
            items.active ?(
              <li key={items.name}>
                <button 
                 onClick={() => navigate(items.slug)}
                className ="inline-black px-6 py-2
                 duration-200 hover:bg-blue-100 rounded-full" >
                {items.name}
                </button>
              </li>
            ) :null
            )}
            {authStatus && (
              <li>
                <Logoutbtn/>
              </li>
            )}
           </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header