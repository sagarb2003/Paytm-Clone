import React, { useState } from 'react'
import SideBar from './SideBar'
import MainContent from './MainContent'
import Profile from '../Profile';


const Dashboard = () => {
  const [toggle,setToggle]=useState(true);
  return (
    <>
      <SideBar/>
    </>
  );
}

export default Dashboard