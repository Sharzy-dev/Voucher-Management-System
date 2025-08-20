import React from 'react'
import Login from './Pages/Login'
import Userdashboard from './Pages/Userdashboard'
import Navbar from './Components/Navbar'
import QuickActions from './Components/Quickactionscomponents'
import { BrowserRouter, Router, Route } from 'react-router-dom'
import Quickactionscomponents from './Components/Quickactionscomponents'
import Vouchers from './Pages/Vouchers'
import DashboardStats from './Components/Dashboardstats'
import Admindashboard from './Pages/Admindashboard'
import Adminuploadvoucher from './Pages/Adminuploadvoucher'
import Uploadherebox from './Components/Uploadherebox'
import Uploadhere from './Components/Uploadhere'
import Voucherinformation from './Components/Voucherinformation'
import Register from './Pages/Register'
import Voucherrecords from './Components/Voucherrecords'
import UserVoucher from './Pages/UserVoucher'



function App() {
  return (
    <div className=" ">
      {/* <Userdashboard /> */}
      {/* <Register/> */}
      {/* <Login/> */}
      <Admindashboard/>
      {/* <Adminuploadvoucher/> */}
      {/* <Voucherinformation/> */}
      {/* <Uploadherebox/> */}
      {/* <Uploadhere/> */}
      {/* <DashboardStats/> */}
      {/* <Vouchers/> */}
      {/* <UserVoucher/> */}
      {/* <Voucherrecords/> */}
      {/* <Quickactionscomponents/> */}

    </div>
  );
}

export default App


{/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Userdashboard" element={<Userdashboard/>}/>
          <Route path='/Navbar' element={<Navbar/>} />
        </Routes>
      </BrowserRouter> */}