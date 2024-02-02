import React from 'react'

const SignUp = () => {
  return (
    <>
      <div className=" border-2 rounded-md shadow-md w-72 m-auto mt-6 p-4 ">
        <div>
          <p className="text-3xl font-bold text-center">Sign Up</p>
          <p className="text-slate-600 text-center mt-2	">
            Enter your information to create an account
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mt-4">First Name</h2>
          <input
            type="text"
            placeholder="John"
            className="border-2 border-slate-200 p-1 mt-2 w-64 rounded-md"
          />
          <h2 className="text-lg font-bold mt-4">Last Name</h2>
          <input
            type="text"
            placeholder="Doe"
            className="border-2 border-slate-200 p-1 mt-2 w-64 rounded-md"
          />
          <h2 className="text-lg font-bold mt-4">Email</h2>
          <input
            type="text"
            placeholder="johndoe@gmail.com"
            className="border-2 border-slate-200 p-1 mt-2 w-64 rounded-lg"
          />
          <h2 className="text-lg font-bold mt-2">Password</h2>
          <input
            type="text"
            className="border-2 border-slate-200 p-1 mt-2 w-64 rounded-md"
          />
        </div>
        <div className="text-center">
          <button className="bg-black text-white rounded-lg p-2 w-64 mt-3 font-bold">
            Sign Up
          </button>
          <div className="flex mt-2 text-xs justify-center font-medium ">
            <p className="pr-1">Already have an account?</p>
            <p className="underline cursor-pointer ">Login</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp