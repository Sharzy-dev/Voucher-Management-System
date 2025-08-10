import React from 'react'
import Navbar from '../Components/Navbar'
import QuickActions from '../Components/Quickactionscomponents'
import Sidebar from '../Components/Sidebar'
import Voucherrecords from '../Components/Voucherrecords'


function Userdashboard() {
  return (
    <div>
      {/* <Navbar/> */}
      <Sidebar/>
      <QuickActions/>
      <Voucherrecords/>
    </div>
  )
}

export default Userdashboard