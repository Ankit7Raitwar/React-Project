import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  // useLoader: is a optimize methode  to fetch data in api with in click componet
  const data = useLoaderData()
//  const [data,setDAta] = useState([])
//  useEffect(() =>{
//   fetch('https://api.github.com/users/hiteshchoudhary')
//   .then(res=> res.json())
//   .then(data => {
//      setDAta(data)
//   })
//  },[])

  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>
    {/* // data.followers && data.avatar_url is a api data it use before study api in browser */}
       Github <br></br> UserName :{data.login} {<br></br>}
       User id : {data.id}{<br></br>}
       User url : {data.url} {<br></br>}
       followers : {data.followers}<br></br>
       <img src={data.avatar_url} alt='Github image' width={300} />
    </div>
  )
}

export default Github
// it is a methode to pass a loader fun in main.js in github me 
// api reponsd return karta hai 
export const  githubInfo = async () => {
  const res = await fetch('https://api.github.com/users/Ankit7Raitwar')
  return res.json();
}

