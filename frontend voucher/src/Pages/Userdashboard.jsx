import React from 'react'
import QuickActions from '../Components/Quickactionscomponents'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'

function Userdashboard() {
  return (
    <div className='flex w-screen '>
      <Sidebar type="user" />
      <div className='flex flex-1 flex-col px-10 '>
      <Navbar title="Dashboard" fullName="Obong Nkanga" position="clerk"/>  
      <p className='pl-10'>Welcome to your Smart Voucher Management system</p>
      <div className='ml-auto pr-8 pt-10'>
      <QuickActions />   
      </div>
      </div>
       
    </div>
  )
}

export default Userdashboard