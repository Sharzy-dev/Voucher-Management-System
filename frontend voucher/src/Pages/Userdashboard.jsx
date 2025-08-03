import React from "react";
import { FaCloudUploadAlt, FaQrcode, FaCheckCircle } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { AiOutlineFileDone } from "react-icons/ai";
import { HiOutlineDocumentAdd } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col justify-between">
        <div>
          <div className="text-center mb-10">
            <img src=".assets/logo.png.png" 
            alt="Logo" className="mx-auto w-16" />
          </div>
          <nav className="space-y-4">
            <a href="#" className="text-orange-600 font-medium">Dashboard</a>
            <a href="#" className="text-gray-600">Upload Voucher</a>
            <a href="#" className="text-gray-600">Vouchers</a>
            <a href="#" className="text-gray-600">Mobile Scanner</a>
            <a href="#" className="text-gray-600">Settings</a>
          </nav>
        </div>
        <div className="space-y-2">
          <a href="#" className="text-gray-600">Help & Support</a>
          <a href="#" className="text-red-500">Logout</a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-500">Welcome to your Smart Voucher Management system</p>
          </div>
          <div className="flex items-center gap-3">
            <img src="/user.jpg" alt="User" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-semibold text-gray-700">Clement Idemudo</p>
              <p className="text-sm text-gray-500">Clerk</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-10">
          <StatCard title="Total Vouchers" count="2,847" icon={<AiOutlineFileDone />} />
          <StatCard title="Uploads Today" count="16" icon={<HiOutlineDocumentAdd />} />
          <StatCard title="Pending Review" count="4" icon={<BsClockHistory />} />
          <StatCard title="Mobile Sessions" count="8" icon={<FaQrcode />} />
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="col-span-2 bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-4">
              {Array.from({ length: 2 }).map((_, i) => (
                <React.Fragment key={i}>
                  <ActivityItem icon={<HiOutlineDocumentAdd />} title="New Voucher Uploaded" subtitle="Invoice #250625" time="2 minutes ago" />
                  <ActivityItem icon={<FaCheckCircle />} title="Voucher Approved" subtitle="Invoice #250625" time="5 minutes ago" />
                  <ActivityItem icon={<FaQrcode />} title="Mobile Session" subtitle="Scanner connected" time="2 hours ago" />
                </React.Fragment>
              ))}
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-4">
              <QuickAction title="Upload Voucher" icon={<FaCloudUploadAlt />} />
              <QuickAction title="Mobile scanner" icon={<FaQrcode />} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const StatCard = ({ title, count, icon }) => (
  <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
    <div className="text-3xl text-orange-600">{icon}</div>
    <div>
      <p className="text-gray-600 text-sm">{title}</p>
      <p className="text-xl font-semibold text-gray-800">{count}</p>
    </div>
  </div>
);

const ActivityItem = ({ icon, title, subtitle, time }) => (
  <li className="flex items-start gap-3">
    <div className="text-green-600 text-xl mt-1">{icon}</div>
    <div className="flex-1">
      <p className="text-sm font-medium text-gray-800">{title}</p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
    <div className="text-xs text-gray-400">{time}</div>
  </li>
);

const QuickAction = ({ title, icon }) => (
  <button className="w-full border-2 border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-center gap-3 text-gray-700 hover:border-orange-500 hover:text-orange-600 transition">
    <span className="text-2xl">{icon}</span>
    <span className="font-medium">{title}</span>
  </button>
);

export default Dashboard;
