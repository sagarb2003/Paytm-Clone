import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate=useNavigate();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const userSignUp = {
    firstName: firstName,
    lastName: lastName,
    username: email,
    password: password,
  };
  async function signUpHandler(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        userSignUp,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        alert("User Created Successfully");
        navigate('/dashboard')
      } else {
        console.log(response);
      }
    } catch (error) {
      alert("User Already Exist");
    }
  }

  return (
    <>
      <div className=" border-2 rounded-md shadow-md w-72 m-auto mt-6 p-4 ">
        <form onSubmit={signUpHandler}>
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
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required
            />
            <h2 className="text-lg font-bold mt-4">Last Name</h2>
            <input
              type="text"
              placeholder="Doe"
              className="border-2 border-slate-200 p-1 mt-2 w-64 rounded-md"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              required
            />
            <h2 className="text-lg font-bold mt-4">Email</h2>
            <input
              type="text"
              placeholder="johndoe@gmail.com"
              className="border-2 border-slate-200 p-1 mt-2 w-64 rounded-lg"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <h2 className="text-lg font-bold mt-2">Password</h2>
            <input
              type="text"
              className="border-2 border-slate-200 p-1 mt-2 w-64 rounded-md"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <div className="text-center">
            <button
              className="bg-black text-white rounded-lg p-2 w-64 mt-3 font-bold"
              // onClick={buttonHandler}
            >
              Sign Up
            </button>
            <div className="flex mt-2 text-xs justify-center font-medium ">
              <p className="pr-1">Already have an account?</p>
              <Link to="/signin" className="underline cursor-pointer ">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
