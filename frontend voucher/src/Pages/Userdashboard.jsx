import React from 'react'
import QuickActions from '../Components/Quickactionscomponents'
import Sidebar from '../Components/Sidebar'

function Userdashboard() {
  return (
    <div className='flex justify-between'>
      <Sidebar type="admin" />
      <QuickActions/>
    </div>
  )
}

export default Userdashboard