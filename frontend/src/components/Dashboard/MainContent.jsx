import React from 'react'
import UserCard from './UserCard';

const MainContent = () => {
  return (
    <div>
      <div className="flex justify-between border-b-2 pb-3 font-extrabold">
        <p className="text-2xl">Payments App</p>
        <div className="flex ">
          <p className="text-2xl pr-2">Hello,Sagar</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-10 h-10"
          >
            <path
              fill-rule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className='m-2'>
        <div className="mt-10 text-xl font-bold">Your Balance 5000</div>
        <div className="mt-5">
          <p className="text-2xl font-medium">Users</p>
          <input
            type="text"
            placeholder="Search User"
            className="border-2 border-slate-300 p-1 mt-5 w-5/6 rounded-md"
          />
        </div>
        <div>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
        </div>
      </div>

    </div>
  );
}

export default MainContent