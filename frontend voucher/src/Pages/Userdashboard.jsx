import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
// import Dashboardstats from '../Components/Dashboardstats';
import Recentactivities from "../Components/Recentactivities";
import QuickActions from "../Components/Quickactionscomponents";
import Quickactionscomponents from "../Components/Quickactionscomponents";
import DashboardStats from "../Components/Dashboardstats";

function Userdashboard() {
  return (
    <div className="flex bg-gray-50 w-full min-h-screen">
      <Sidebar />

      <div className="flex-1 ml-[239px] px-6 py-2 space-y-6">
        <div>
        <Navbar 
        title="Dashboard"
        fullName=" Agu na ech mba"
        position="staff"
        />
      <p className="text-gray-500 text-sm">Welcome to your Smart Voucher Management system</p>
      </div>

      <div className="space-y-6">
      
        <DashboardStats/>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <Recentactivities />
          </div>
          <Quickactionscomponents />
        </div>
        </div>

      </div>
    </div>
  );
}

export default Userdashboard;
