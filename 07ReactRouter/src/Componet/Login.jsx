import React from 'react'


function Login () {

    const handleSubmit = ()=>{
        return <h2>welcome!</h2>
    }
    
return (
    <div> 
    
    
      <h2 className='text-center text-2xl font-bold
      leading-tight'>
          Sign in to your accout
      </h2>
      <p className='mt-2 text-center text-base text-black-60'>
       Don&apos;t have any account?&nbsp;
       {/* <Link to='/signup'
       className='font-medium text-primary
       transition-all duration-200 hover:underline'>
      Sign Up
       </Link> */}
      </p>
      {/* {error && <p className='text-red-600 mt-8 text-center'>
     {error}
      </p>} */}

      <form onSubmit={handleSubmit}
      className='mt-8'>
      <div className='space-y-5'>
       <input
        leble ="Email:"
        placeholder = "Enter your email"
        type = "email"
        // {...register("email",{
        //   required:true,
        //   validate:{
        //     macchPatern:(value)=>/^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.text(value) ||
        //     "Email address must be a valid address",
        //   }
        //})}
       />
       
       <input
        leble ="Password:"
        placeholder = "Enter your password"
        type = "password"
        // {...register("password",{
        //   required:true,
          
        // })}
       />
      <button
      type="submit"
      className="w-full" 
      >Sign in</button>
      </div>

      </form>
      </div>
    
  )
}

export default Login

