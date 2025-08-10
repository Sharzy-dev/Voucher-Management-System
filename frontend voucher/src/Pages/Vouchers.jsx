// components/VoucherTable.jsx
import React from "react";
import { FaTrash, FaDownload, FaExternalLinkAlt } from "react-icons/fa";

const StatusBadge = ({ status }) => {
  const statusStyles = {
    Approved: "bg-green-100 text-green-700",
    Pending: "bg-orange-100 text-orange-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        statusStyles[status] || ""
      }`}
    >
      {status}
    </span>
  );
};

const Vouchers = ({ title, onView, onDownload, onDelete }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-b">
              <th className="p-3">Voucher Id</th>
              <th className="p-3">Department</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Submitted by</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">Invoice #250625</td>
              <td className="p-3">Finance</td>
              <td className="p-3">₦150,000</td>
              <td className="p-3">2025-01-15</td>
              <td className="p-3">
                <StatusBadge status="Approved" />
              </td>
              <td className="p-3">Cyril Bassey</td>
              <td className="p-3 flex items-center gap-3">
                <button
                  onClick={() => onView?.()}
                  className="text-gray-600 hover:text-blue-500"
                >
                  <FaExternalLinkAlt />
                </button>
                <button
                  onClick={() => onDownload?.()}
                  className="text-gray-600 hover:text-green-500"
                >
                  <FaDownload />
                </button>
                <button
                  onClick={() => onDelete?.()}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>

            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">NNPC #230987</td>
              <td className="p-3">Admin</td>
              <td className="p-3">₦150,000</td>
              <td className="p-3">2025-01-15</td>
              <td className="p-3">
                <StatusBadge status="Pending" />
              </td>
              <td className="p-3">Mark Udo</td>
              <td className="p-3 flex items-center gap-3">
                <button
                  onClick={() => onView?.()}
                  className="text-gray-600 hover:text-blue-500"
                >
                  <FaExternalLinkAlt />
                </button>
                <button
                  onClick={() => onDownload?.()}
                  className="text-gray-600 hover:text-green-500"
                >
                  <FaDownload />
                </button>
                <button
                  onClick={() => onDelete?.()}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>

            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">Dakakda #345698</td>
              <td className="p-3">Operations</td>
              <td className="p-3">₦150,000</td>
              <td className="p-3">2025-01-15</td>
              <td className="p-3">
                <StatusBadge status="Rejected" />
              </td>
              <td className="p-3">Sylvester Akpan</td>
              <td className="p-3 flex items-center gap-3">
                <button
                  onClick={() => onView?.()}
                  className="text-gray-600 hover:text-blue-500"
                >
                  <FaExternalLinkAlt />
                </button>
                <button
                  onClick={() => onDownload?.()}
                  className="text-gray-600 hover:text-green-500"
                >
                  <FaDownload />
                </button>
                <button
                  onClick={() => onDelete?.()}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vouchers;
