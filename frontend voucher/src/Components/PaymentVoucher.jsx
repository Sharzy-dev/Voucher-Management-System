import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { GoPerson } from "react-icons/go";

const PaymentVoucher = () => {
  return (
    <div className="max-w-2xl p-6 bg-white">
      {/* Header */}
      <div className="border-b-2 border border-[#DCDFE5] flex justify-between items-start p-6 bg-gradient-to-r from-white to-[rgba(230,233,240,0.3)] pb-2 mb-4">
        <div className="flex flex-col">
            <div className="flex gap-3">
                <h1 className="text-2xl font-bold text-start">Payment Voucher</h1>
                <button className="bg-[#EEAD2B] px-2.5 py-0.5 rounded-full"> Pending </button>
            </div>

            <div>
                <span className="font-semibold text-xs">Voucher #2024-001</span> 
                <span className="font-semibold text-xs">January 15, 2024</span>
            </div>
            
        </div>
        <div className="flex flex-col">
            <span>Total Amount</span>
            <span className="text-[#F24B09]">₦2,850,000.00</span>

        </div>
      </div>

      {/* Company Information */}
      <div className="mb-6 p-6 rounded-lg border border-[#E6E9F0] bg-gradient-to-r from-[rgba(230,233,240,0.5)] to-[rgba(230,233,240,0.2)]">
        <h2 className="text-lg font-bold ">Company Information</h2>
        <div className="mb-2"></div>
        
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-normal text-[#7B879D] text-sm">Payable To:</p>
              <p className="text-base">Akwa Cross Oil & Gas Limited</p>
            </div>
            <div className="flex gap-1">
              <CiLocationOn /> 
            <p className="font-normal text-[#7B879D] text-sm"> Akwa Ibom State, Nigeria</p>
          </div>
          </div>
          
        </div>
      </div>

      {/* Voucher Details */}
      <div className="flex">
      <div className="mb-6">
        <div className="flex justify-between">
        <h2 className="text-sm font-bold mb-2">
          Voucher Details
        </h2>
        </div>
        
        <div className="mb-2 ">
          <p className="font-normal text-[#7B879D] text-sm">Description:</p>
          <p className="text-base max-w-[24.9375rem]">Supply of petroleum products and logistics services for Q1 2024 operations</p>
        </div>
        
        <div className="">
          <div>
            <p className="font-normal text-[#7B879D] text-sm">Requested By:</p>
            <div className="flex gap-1"> 
              <GoPerson />
            <p className="text-base">Emmanuel Udoh</p>
            </div>
          </div>
          <div>
            <p className="font-normal text-[#7B879D] text-sm">Department:</p>
            <p className="text-base">Procurement Department</p>
          </div>
        </div>
      </div>

      {/* Line Items */}
        <div className="mb-6">
          <h2 className="text-sm font-bold mb-2">Attached invoice</h2>
                
          <div className="flex text-base gap-0.5 mb-2 bg-[rgba(230,233,240,0.3)] p-3 ">
            <p className="">Premium Motor Spirit (PMS) - 50,000 liters</p>
            <p className="text-right font-semibold">₦2,000,000.00</p>
          </div>
          
          <div className="flex text-base gap-0.5 mb-2 bg-[rgba(230,233,240,0.3)] p-3">
            <p>Automotive Gas Oil (AGO) - 20,000 liters</p>
            <p className="text-right font-semibold">₦600,000.00</p>
          </div>
          
          <div className="flex text-base gap-0.5 mb-2 bg-[rgba(230,233,240,0.3)] p-3">
            <p>Logistics and Transportation Services</p>
            <p className="text-right font-semibold">₦250,000.00</p>
          </div>

           {/* Total */}
          <div className="flex text-sm justify-between text-[#F24B09] bg-[rgba(230,233,240,0.3)] p-3.5">
            <p className="font-bold">Total:</p>
            <p className="font-bold">₦2,850,000.00</p>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default PaymentVoucher;