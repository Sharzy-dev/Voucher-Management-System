import Sidebar from "../Components/Sidebar";
import React from "react";
import Navbar from "../Components/Navbar";
import Voucherrecords from "../Components/Voucherrecords";
import { Search } from "lucide-react";
import SearchFilterBar from "../Components/SearchBox";

function UserVoucher() {
  return (
    <div className="bg-gray-50 w-full min-h-screen">
      {/* Fixed Sidebar */}
      <Sidebar type="admin" />

      {/* Main content */}
      <div className="ml-[239px] px-6 py-4 space-y-6">
        {/* Navbar */}
        <Navbar
          title="Search and Filter Vouchers"
          fullName="Agu na ech mba"
          position="Auditor"
        />
        {/* search bar */}
        <SearchFilterBar/>
        {/* Voucher records */}
        <Voucherrecords />
      </div>
    </div>
  );
}

export default UserVoucher;
