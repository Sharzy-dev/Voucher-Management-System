import React from "react";
import VoucherInputField from "./src/Components/VoucherInputField";
import { FaMapMarkerAlt } from "react-icons/fa";

const VoucherInformation = () => {
  const lineItems = [
    {
      name: "Premium Motor Spirit (PMS) - 50,000 liters",
      amount: "₦2,000,000.00",
    },
    {
      name: "Automotive Gas Oil (AGO) - 20,000 liters",
      amount: "₦600,000.00",
    },
    {
      name: "Logistics and Transportation Services",
      amount: "₦250,000.00",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h2 className="text-xl font-semibold">Payment Voucher</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs">
              Pending
            </span>
            <span>Voucher #2024-001</span>
            <span>•</span>
            <span>January 15, 2024</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Total Amount</p>
          <p className="text-orange-600 text-xl font-bold">₦2,850,000.00</p>
        </div>
      </div>

      {/* Company Info */}
      <div className="border rounded-lg p-4">
        <h3 className="font-semibold mb-2">Company Information</h3>
        <VoucherInputField
          label="Payable To:"
          value="Akwa Cross Oil & Gas Limited"
        />
        <div className="flex items-center text-gray-600 text-sm mt-2">
          <FaMapMarkerAlt className="mr-2" /> Akwa Ibom State, Nigeria
        </div>
      </div>

      {/* Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Voucher Details</h3>
          <VoucherInputField
            label="Description:"
            value="Supply of petroleum products and logistics services for Q1 2024 operations"
          />
          <VoucherInputField label="Requested By:" value="Emmanuel Udoh" />
          <VoucherInputField
            label="Department:"
            value="Procurement Department"
          />
        </div>

        {/* Line Items */}
        <div>
          <h3 className="font-semibold mb-2">Line Items</h3>
          <div className="space-y-2">
            {lineItems.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center border rounded p-2 text-sm"
              >
                <span>{item.name}</span>
                <span className="font-medium">{item.amount}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 font-semibold">
            <span>Total:</span>
            <span className="text-orange-600">₦2,850,000.00</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4 pt-4 border-t">
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
          Reject Voucher
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          Approve Voucher
        </button>
      </div>
    </div>
  );
};

export default VoucherInformation;
