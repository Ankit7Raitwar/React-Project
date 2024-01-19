import React,{useState} from 'react'
import authServise from '../appwrite/auth'
import { Link,useNavigate } from 'react-router-dom'
import { login } from '../stor/authSlice'
import {Button as Btn,Input,Logo} from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
const [error,setError] = useState("");
const dispatch = useDispatch()
const navigate = useNavigate()
//register,handleSubmit is methode in React form hook
const {register,handleSubmit} = useForm()

// create:is a onclick fuction
const create = async (data) =>{
    try {
        // using authservise and create account
        const userData =await authServise.createAccount(data)
       if(userData){
        // fetch user data in database
        const userData = await authServise.getCurrentUser()
        //store me update for user login
        if(userData) dispatch(login(userData));
        navigate("/")
       }
    } catch (error) {
        setError(error.message)
    }
}

  return (
    <div className="flex items-center justify-center">
    <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
    <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[100px]">
                <Logo width="100%" />
            </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
        <p className="mt-2 text-center text-base text-black/60">
            Already have an account?&nbsp;
            <Link
                to="/login"
                className="font-medium text-primary transition-all duration-200 hover:underline"
            >
                Sign In
            </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
       
       {/* // handleSubmit: is methode to pass fuction if submit than work */}
        <form onSubmit={handleSubmit(create)}>
            <div className='space-y-5'>
                <Input
                label="Full Name: "
                placeholder="Enter your full name"
            // register is methode to pass ("key", {obj value}) and ... all time sperate dont face error
                {...register("name", {
                    required: true,
                })}
                />
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                // It is check vakid email it methode is form hook // and webside to copy regexR||regul expresion 
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,})}
                />
                <Btn type="submit" className="w-full">
                    Create Account
                </Btn>
            </div>
        </form>
    </div>

</div>
  )
}

export default Signup
