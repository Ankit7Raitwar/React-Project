import React, { useEffect, useState } from 'react'
import servise from '../appwrite/config'
import { Container,PostCart } from '../components'


function AllPost() {
 const [post, setPost] = useState([])

 useEffect(() =>{

 },[])

   servise.getPosts([])
   .than((post) =>{
    if(post){
        setPost(post.documents)
    }
   })

  return (
    <div className='w-full py-8'>
    <Container>
        <div className='flex flex-wrap'>
        {post.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
             <PostCart post= {post} />
             </div>
        ))}
        </div>
    </Container>
      
    </div>
  )
}

export default AllPost
