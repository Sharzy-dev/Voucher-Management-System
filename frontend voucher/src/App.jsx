import React from 'react'
import Login from './Pages/Login'
<<<<<<< HEAD
import Userdashboard from './Pages/Userdashboard'
import Navbar from './Components/Navbar'
import QuickActions from './Components/Quickactionscomponents'
import { BrowserRouter, Router, Route } from 'react-router-dom'
import Quickactionscomponents from './Components/Quickactionscomponents'
import Voucherinformation from './Components/Voucherinformation'
import Voucherrecords from './Components/Voucherrecords'

function App() {
  return (
    <div>
  {/* <BrowserRouter>
  <Router>
    <Route path='/Userdashboard' element={<Userdashboard/>}/>
    <Route path="/upload" element={<UploadVoucher />} />
    <Route path="/scanner" element={<MobileScanner />} />
  </Router>
  </BrowserRouter> */}
  <Login/>
  <Userdashboard/>
  <Voucherinformation/>
  <Voucherrecords/>
  {/* <Quickactionscomponents/> */}
  
      
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
    </div>
  )
}

export default App