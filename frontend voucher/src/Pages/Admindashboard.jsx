import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
// import Dashboardstats from '../Components/Dashboardstats';
import { FaClipboardList, FaUpload, FaClock, FaMobileAlt } from "react-icons/fa";
import Recentactivities from "../Components/Recentactivities";
import QuickActions from "../Components/Quickactionscomponents";
import Quickactionscomponents from "../Components/Quickactionscomponents";
import DashboardStats from "../Components/Dashboardstats";
import Dashboardstats from "../Components/Dashboardstats";

function Admindashboard() {
  return (
    <div className="flex bg-gray-50 w-full min-h-screen">
      <Sidebar type="admin" />

      <div className="flex-1 ml-[239px] px-6 py-2 space-y-6">
        <div>
          <Navbar
            title="Dashboard"
            subtex="Welcome to your Smart Voucher Management system"
            fullName=" Agu na ech mba"
            position="staff"
          />
        </div>

        <div className="space-y-6">
          {/* <DashboardStats /> */}
          <div className="flex gap-10">
            <Dashboardstats
              title="Total Vouchers"
              number ="15"
              iconBg = "bg-green-200 text-green-800"
              icon={<FaClipboardList/>} 
            />
            <Dashboardstats title="Uploads Today" number="3" iconBg = "bg-orange-200 text-orange-800" icon= {<FaUpload />} />
            <Dashboardstats title="Pending Review" number="4"  iconBg = "bg-yellow-200 text-yellow-800" icon={<FaClock/> } />
            <Dashboardstats title="Mobile Sessions"number="2" iconBg = "bg-blue-200 text-blue-800" icon={<FaMobileAlt/>} />
          </div>

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

export default Admindashboard;
