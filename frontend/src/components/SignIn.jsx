import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const SignIn = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const userSignIn={
    username:email,
    password:password
  }
  async function signInHandler(e){
    e.preventDefault();
    try{
      const response = await axios.post(
        "https://paytment-backend.vercel.app/api/v1/user/signin",
        userSignIn,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const token=response.data.token;
      console.log(token);
      localStorage.setItem("token",token);

      if(response.status===200){
        // setSuccess(true)
        alert('Sign In Successfull')
        navigate('/dashboard')
      }
      if(response.status === 411){
        alert('Incorrect Input')
      }
    }
    catch(error){
      alert('User Not exist,Please Sign Up')
    }
  }
  return (
    <>
      <div className=" border-2 rounded-md shadow-md w-72 m-auto mt-24 p-4 ">
        <form onSubmit={signInHandler}>
          <div>
            <p className="text-3xl font-bold text-center">Sign In</p>
            <p className="text-slate-600 text-center mt-2	">
              Enter your credentials to access your account
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mt-4">Email</h2>
            <input
              type="text"
              placeholder="johndoe@gmail.com"
              className="border-2 border-slate-200 p-1 mt-2 w-64 rounded-lg"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <h2 className="text-lg font-bold mt-2">Password</h2>
            <input
              type="text"
              className="border-2 border-slate-200 p-1 mt-2 w-64 rounded-md"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="text-center">
            <button className="bg-black text-white rounded-lg p-2 w-64 mt-3 font-bold">
              Sign In
            </button>
            <div className="flex mt-2 text-xs justify-center font-medium ">
              <p className="pr-1">Don't have an account?</p>
              <Link to="/signup" className="underline">
                Sign Up
              </Link>
            </div>
          </div>
        </form>
        
      </div>
    </>
  );
}

export default SignIn