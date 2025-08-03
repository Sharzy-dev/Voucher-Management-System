import React from 'react'
import Navbar from '../Components/Navbar'
import QuickActions from '../Components/Quickactionscomponents'

function Userdashboard() {
  return (
    <div className='flex justify-between'>
      <Navbar/>
      <QuickActions/>
    </div>
  )
}

export default Userdashboard