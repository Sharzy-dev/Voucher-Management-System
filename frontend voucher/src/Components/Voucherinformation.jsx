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
