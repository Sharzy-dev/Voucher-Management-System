import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import PaymentVoucher from '../Components/PaymentVoucher'

function Vouchers() {
  return (
     <div className='flex w-screen '>
      <Sidebar type="user" />
      <div className='flex flex-1 flex-col px-10'>
      <Navbar title="Dashboard" fullName="Obong Nkanga" position="clerk"/>  
      
       <PaymentVoucher/>
      </div>
             
    </div>
  )
}

export default Vouchers