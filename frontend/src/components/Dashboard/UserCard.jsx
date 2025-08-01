import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const UserCard = ({_id,firstName,lastName}) => {
  const navigate=useNavigate();
  return (
    <div className="flex justify-between rounded-md mt-4 border-2 p-2 ">
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-8 h-8"
        >
          <path
            fill-rule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
            clip-rule="evenodd"
          />
        </svg>
        <p className="text-2xl font-bold ml-2">{firstName} {lastName}</p>
      </div>
      <div className='mt-1'>
        <button onClick={()=>{
           navigate("/send?id=" + _id + "&name=" + firstName);
        }} className="bg-black text-white rounded-lg p-2  text-sm w-40  font-bold">
        Send Money
        </button>
      </div>
    </div>
  );
}

export default UserCard