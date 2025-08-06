import React from 'react'
import Navbar from '../Components/Navbar'
import QuickActions from '../Components/Quickactionscomponents'
import Sidebar from '../Components/Sidebar'


function Userdashboard() {
  return (
    <div className='flex justify-between'>
      {/* <Navbar/> */}
      <Sidebar/>
    
      <QuickActions/>
    </div>
  )
}

export default Userdashboard