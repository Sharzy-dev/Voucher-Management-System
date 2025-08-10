import React from 'react'
import Login from './Pages/Login'
<<<<<<< HEAD
import Userdashboard from './Pages/Userdashboard'
import Navbar from './Components/Navbar'
<<<<<<< HEAD
import QuickActions from './Components/Quickactionscomponents'
import { BrowserRouter, Router, Route } from 'react-router-dom'
import Quickactionscomponents from './Components/Quickactionscomponents'
<<<<<<< HEAD
import Voucherinformation from './Components/Voucherinformation'
import Voucherrecords from './Components/Voucherrecords'
=======
import Settings from './Pages/Settings'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Vouchers from './Pages/Vouchers'
>>>>>>> b26c25e0cc94988905cbf35d80cbba74e19c80a7

function App() {
  return (
    <div>
<<<<<<< HEAD
=======
import Uploadherebox from './Components/Uploadherebox'
import Uploadhere from './Components/Uploadhere'
import Recentactivities from './Components/Recentactivities'

function App() {
  return (
    <div  className="min-h-screen flex flex-col bg-gray-100" >
    
>>>>>>> 5608288b2ccda4301c094dddd649c74b7a4c48b1
  {/* <BrowserRouter>
  <Router>
    <Route path='/Userdashboard' element={<Userdashboard/>}/>
    <Route path="/upload" element={<UploadVoucher />} />
    <Route path="/scanner" element={<MobileScanner />} />
  </Router>
  </BrowserRouter> */}
<<<<<<< HEAD
  <Login/>
  <Userdashboard/>
  <Voucherinformation/>
  <Voucherrecords/>
  {/* <Quickactionscomponents/> */}
=======
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/Userdashboard" element={<Userdashboard/>}/>    
    <Route path="/scanner" element={<Settings/>} />
    <Route path='/Voucher' element={<Vouchers/>} />
    <Route path='/Navbar' element={<Navbar/>} />
  </Routes>
  </BrowserRouter>

  {/* <Userdashboard/> */}
>>>>>>> b26c25e0cc94988905cbf35d80cbba74e19c80a7
  
      
=======
import AttachDocumentbox from './Components/Attachdocumentbox'
import Dashboardstats from './Components/Dashboardstats'
function App() {
  return (
    <div>
      {/* <AttachDocumentbox/> */}
      <Dashboardstats />
      {/* <Login/> */}
>>>>>>> 873a1333716603f3e29d8f4f01ab943a4e865d0d
=======
  {/* <Login/>
    <Userdashboard/>    */}
  {/* <Quickactionscomponents/> */}
  {/* <Uploadherebox/> */}
  {/* <Uploadhere/> */}
       <Recentactivities/>
>>>>>>> 5608288b2ccda4301c094dddd649c74b7a4c48b1
    </div>
  )
}

export default App