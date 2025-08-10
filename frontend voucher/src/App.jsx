import React from 'react'
import Login from './Pages/Login'
import Userdashboard from './Pages/Userdashboard'
import Navbar from './Components/Navbar'
import Settings from './Pages/Settings'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/Userdashboard" element={<Userdashboard/>}/>    
    <Route path="/scanner" element={<Settings/>} />
  </Routes>
  </BrowserRouter>

  {/* <Userdashboard/> */}
  
      
    </div>
  )
}

export default App