import React from "react";

const VoucherInputFields = ({ label, value }) => {
  return (
    <div className="mb-3">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="font-medium text-gray-800">{value}</p>
    </div>
  );
};

export default VoucherInputFields;
