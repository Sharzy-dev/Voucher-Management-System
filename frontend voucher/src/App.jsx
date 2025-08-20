
// import Login from './Pages/Login'
// import Userdashboard from './Pages/Userdashboard'
// import Navbar from './Components/Navbar'
// import QuickActions from './Components/Quickactionscomponents'
// import { BrowserRouter, Router, Route } from 'react-router-dom'
// import Quickactionscomponents from './Components/Quickactionscomponents'
// import Uploadherebox from './Components/Uploadherebox'
// import Uploadhere from './Components/Uploadhere'
// import Recentactivities from './Components/Recentactivities'

import React from 'react'
import { Upload, CheckCircle, Smartphone } from "lucide-react";
import Recentactivitiescomponents from './Components/Recentactivitiescomponents'




   
 const activitiesData = [
  {
    id: 1,
    type: "upload",
    message: "New voucher uploaded",
    invoice: "#250625",
    time: "2 minutes ago",
    icon: <Upload className="w-5 h-5 mt-1 mr-2 text-[#008080]" />,
  },
  {
    id: 2,
    type: "approval",
    message: "New voucher approved",
    invoice: "#250626",
    time: "5 minutes ago",
    icon: <CheckCircle className="w-5 h-5 mt-1 mr-2 text-[#008080]"  />,
  },
  {
    id: 3,
    type: "mobile",
    message: "Mobile Session",
    action: "Scanner connected",
    time: "2 minutes ago",
    icon: <Smartphone className="w-5 h-5 mt-1 mr-2 text-[#008080]"  />,
  },

    {
    id: 1,
    type: "upload",
    message: "New voucher uploaded",
    invoice: "#250625",
    time: "2 minutes ago",
    icon: <Upload className="w-5 h-5 mt-1 mr-2 text-[#008080]"  />,
  },
  {
    id: 2,
    type: "approval",
    message: "New voucher approved",
    invoice: "#250626",
    time: "5 minutes ago",
    icon: <CheckCircle className="w-5 h-5 mt-1 mr-2 text-[#008080]"  />,
  },
  {
    id: 3,
    type: "mobile",
    message: "Mobile Session",
    action: "Scanner connected",
    time: "2 minutes ago",
    icon: <Smartphone className="w-5 h-5 mt-1 mr-2 text-[#008080]"  />,
  },
];


function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Recentactivitiescomponents title="Recent Activities" activities={activitiesData} />
       </div>
  );
}

export default App;

// function App () 
//   return (
//     // <div className="min-h-screen bg-gray-100 p-6">
//       {/* Voucher Activity */}
//        <div className="min-h-screen bg-gray-100 p-6">
//       <RecentActivities title="Voucher Activities" activities={activitiesData} />

//       {/* Another Example (User Logs) */}
//        <RecentActivities
//         title="User Activities"
//         activities={[
//           {
//             id: 1,
//             message: "John Doe logged in",
//             time: "2 minutes ago",
//           },
//           {
//             id: 2,
//             message: "Jane Smith updated profile",
//             time: "15 minutes ago",
//           },
//         ]}
//       /> 
//      </div>
//   );
// }

// export default App; 

    
  {/* //  <BrowserRouter>
  // <Router>
  //   <Route path='/Userdashboard' element={<Userdashboard/>}/>
  //   <Route path="/upload" element={<UploadVoucher />} />
  //   <Route path="/scanner" element={<MobileScanner />} />
  // </Router>
  // </BrowserRouter>  */}
 {/* <Login/>  */}
     {/* <Userdashboard/>    */}
  {/* <Quickactionscomponents/>  */}
   {/* <Uploadherebox/> 
   <Uploadhere/> */}
        {/* <Recentactivities/>   */}
        {/* <Recentactivitiescomponents/> */}
    
 