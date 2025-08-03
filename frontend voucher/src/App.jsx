import React from 'react'
import Login from './Pages/Login'
import Userdashboard from './Pages/Userdashboard'
import Navbar from './Components/Navbar'
import QuickActions from './Components/Quickactionscomponents'
import { BrowserRouter, Router, Route } from 'react-router-dom'

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

  <Userdashboard/>
  
      
    </div>
  )
}

export default App