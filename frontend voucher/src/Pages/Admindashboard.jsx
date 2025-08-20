import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
// import Dashboardstats from '../Components/Dashboardstats';
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
              total="1"
              img="Ellipse 2.svg"
            />
            <Dashboardstats title="Total hers" total="2" img="Ellipse 2.svg" />
            <Dashboardstats title=" Vouchers" total="3" img="Ellipse 2.svg" />
            <Dashboardstats title="Toouchers" total="4" img="Ellipse 2.svg" />
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
