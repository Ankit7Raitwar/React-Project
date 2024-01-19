import React,{useState,useEffect} from 'react'
//import authServise from '../appwrite/config'
import { Container,PostForm } from '../components'
import { useNavigate,useParams } from 'react-router-dom'
import servise from '../appwrite/config'


function EditPost() {
 const [post,setPost] = useState(null)
 const {slug} = useParams()
 const navigate = useNavigate()
  
 useEffect(() => {
    if (slug) {
        servise.getPost.than((post)=>
      {
        if(post){
            setPost(post)
        }
      })  
    }else{
        navigate('/')
    }
 },[])

  return post ? (
    <div className='py-8'> 
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost
