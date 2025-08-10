<<<<<<< HEAD
import React from 'react';
import { useForm } from 'react-hook-form';

function Voucherinformation() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://your-backend.com/api/vouchers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      alert('Voucher submitted successfully!');
      reset();
    } catch (err) {
      alert(err.message || 'Something went wrong.');
    }
  };

  return (
    <div className="w-[504px] rounded-[8px] p-[40px] bg-white shadow-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-xl font-semibold text-gray-900 mb-1">Voucher Information</h1>
        <h3 className="text-sm text-gray-600 mb-6">Enter the metadata for this voucher</h3>

        {/* Voucher Name */}
        <label className="block text-sm font-medium text-gray-700 mb-1">Voucher Name</label>
        <input
          {...register('voucherName', { required: 'Voucher name is required' })}
          className="w-full mb-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
          placeholder="Voucher Name"
        />
        {errors.voucherName && (
          <p className="text-red-600 text-sm mb-2">{errors.voucherName.message}</p>
        )}

        {/* Department */}
        <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
        <select
          {...register('department', { required: 'Department is required' })}
          className="w-full mb-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
        >
          <option value="">Select Department</option>
          <option value="finance">Finance</option>
          <option value="hr">HR</option>
          <option value="engineering">Engineering</option>
        </select>
        {errors.department && (
          <p className="text-red-600 text-sm mb-2">{errors.department.message}</p>
        )}

        {/* Amount */}
        <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
        <input
          type="number"
          step="0.01"
          {...register('amount', {
            required: 'Amount is required',
            min: { value: 0.01, message: 'Amount must be greater than zero' },
          })}
          className="w-full mb-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
          placeholder="0.00"
        />
        {errors.amount && (
          <p className="text-red-600 text-sm mb-2">{errors.amount.message}</p>
        )}

        {/* Date */}
        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
        <input
          type="date"
          {...register('date', { required: 'Date is required' })}
          className="w-full mb-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
        {errors.date && (
          <p className="text-red-600 text-sm mb-2">{errors.date.message}</p>
        )}

        {/* Description */}
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          rows="5"
          {...register('description', { required: 'Description is required' })}
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
          placeholder="Enter voucher description"
        />
        {errors.description && (
          <p className="text-red-600 text-sm mb-2">{errors.description.message}</p>
        )}

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-teal-800 hover:bg-teal-900 text-white text-sm font-medium py-2 px-4 rounded-md cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Voucher'}
          </button>
        </div>

        {/* Optional success message */}
        {isSubmitSuccessful && (
          <p className="text-green-600 text-sm text-center mt-4">
            Voucher submitted successfully!
          </p>
        )}
      </form>
    </div>
  );
}

export default Voucherinformation;
=======
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
>>>>>>> 873a1333716603f3e29d8f4f01ab943a4e865d0d
