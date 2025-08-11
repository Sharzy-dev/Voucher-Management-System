import React from 'react'
import Login from './Pages/Login'
import Userdashboard from './Pages/Userdashboard'
import Navbar from './Components/Navbar'
import QuickActions from './Components/Quickactionscomponents'
import { BrowserRouter, Router, Route } from 'react-router-dom'
import Quickactionscomponents from './Components/Quickactionscomponents'
import Uploadherebox from './Components/Uploadherebox'
import Uploadhere from './Components/Uploadhere'
import Recentactivities from './Components/Recentactivities'

function App() {
  return (
    <div  className="min-h-screen flex flex-col bg-gray-100" >
    
  {/* <BrowserRouter>
  <Router>
    <Route path='/Userdashboard' element={<Userdashboard/>}/>
    <Route path="/upload" element={<UploadVoucher />} />
    <Route path="/scanner" element={<MobileScanner />} />
  </Router>
  </BrowserRouter> */}
  <Login/>
    <Userdashboard/>    
  {/* <Quickactionscomponents/> */}
  {/* <Uploadherebox/> */}
  {/* <Uploadhere/> */}
       {/* <Recentactivities/> */}
    </div>
  )
}

export default App