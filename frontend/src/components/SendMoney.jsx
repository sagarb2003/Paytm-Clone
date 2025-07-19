import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "@material-tailwind/react";
import Icon from '../components/Icon'

const SendMoney = () => {
  const navigate=useNavigate();
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const nameParam = url.searchParams.get("name");
  const to = url.searchParams.get("id");
  const [amount, setAmount] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const transferObject={
    amount:amount,
    to:to,
  }
  async function transferHandler(){
    const response = axios.post(
      "https://paytment-backend.vercel.app/api/v1/account/transfer",transferObject,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    ).then((response)=>{
      setShowAlert(true);
      setTimeout(()=>{
        navigate('/dashboard')
      },1500)
    })
  }

  return (
    <div className="border-2 rounded-md shadow-md w-96 m-auto mt-32 p-6 ">
      <div className="text-center text-3xl font-bold ">Send Money</div>
      <div className="flex mt-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="25"
          fill="green"
          class="bi bi-person-square"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
        </svg>
        <p className="text-xl font-bold pl-1">{nameParam}</p>
      </div>
      <div>
        <p className="text-xs font-medium mt-1">Amount(in Rs) </p>
        <input
          type="text"
          placeholder="Enter amount"
          className="border-2 border-slate-200 p-1 mt-2 w-80 rounded-md"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </div>
      <div className="text-center mr-3 mt-4">
        <button
          onClick={transferHandler}
          className="bg-green-500 text-white rounded-md p-2 w-80  font-bold "
        >
          Initiate Transfer
        </button>
        {showAlert && (
        <div
          style={{
            position: "fixed",
            top: 20,
            left: 100,
            right: 100,
            zIndex: 1000,
            opacity: 1,
            transition: "opacity 1s ease-in-out",
          }}
        >
          <Alert
            color="green"
            icon={<Icon />} // Use your custom Icon component here
            className=" rounded-md border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
          >
            <p className="font-bold text-lg ">Transfer Successfull</p>
          </Alert>
        </div>
        )}
      </div>
    </div>
  );
};

export default SendMoney;
