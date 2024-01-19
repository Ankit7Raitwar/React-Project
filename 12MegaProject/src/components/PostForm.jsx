import React,{useCallback} from 'react'
import {useForm} from 'react-hook-form'
import {Button,Input,RTE,Select} from './index'
import appwriteSevise  from '../appwrite/config'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux' 


// user update karega ya new value dega user pass karega {post}
function PostForm({post}) {
  const {regester,handleSubmit,watch,setValue,control,getValue} = useForm({
    defaultValues:{
      title:post ?.title || "",
      slug:post?.slug || "",
      content: post?.content || "",
      status: post ?.status || 'active'
    },
  })
 const navigate = useNavigate()
  const userData = useSelector(state => state.user.userData)
  


const submit = async (data) => {
 // case 1: only update value
  if(post){
    // it is provide direct image accese in array form 
    const file = data.image[0] ? appwriteSevice.uploadFile
    (data.image[0]) : null

  // yadi new file create karte hai to purani delect kar deta hu
    if(file){
      appwriteSevice.deleteFile(post.featuredImage)
    }

    // update in database me
   const dbPost = await appwriteSevice.updatePost
   (post.$id,{
    ...data,
    featureimage:file ? file.$id :undefined
   }) 

 // page ko navigate kar de 
   if (dbPost){
    navigate(`/post/${dbPost.$id}`)
   }


  } else {
 // case 2 : user create new value ya post   
     const file = await appwriteSevice.uploadFile
     (data.image[0]);
 
   // update id  
     if(file){
      const fileId = file.$id
      data.featuredImage = fileId
    //create new post in database me
     const dbPost = await appwriteSevice.createPost({
        ...data,
        userID:userData.$id,
      })

      if(dbPost){
        navigate(`/post/${dbPost.$id}`)
      }

     }
  }
}

  const slugTransform = useCallback( (value) => {
     if(value && typeof value === 'string')
     return value
    .trim()
    .toLowerCase()
   // regexs kya hai pata nhi 
    .replace(/^[a-zA-Z\d\s]+/g, '-')
    .replace(/\s/g, '-')


    return ''
  }, [])

// watch : moniter the form 
  React.useEffect(() => {
     const subscription = watch((value,{name})=>{
 
      if (name === 'title') {
        setValue('slug',slugTransform(value.title,
          {shouldValidate:true}))
      }

     })
   // unsubscribe :is memory mengement ya optimize  
     return () => {
      subscription.unsubscribe();
     }

  },[watch,slugTransform,setValue])




  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteSevise.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  )
}

export default PostForm
