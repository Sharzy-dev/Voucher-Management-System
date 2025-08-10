import React from "react";

const DisplayNumbers = ({ title, number, iconBg, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow p-5 flex items-center gap-4">
      {/* Icon Circle */}
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-full ${iconBg}`}
      >
        {icon}
      </div>

      {/* Text Content */}
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-bold">{number}</p>
      </div>
    </div>
  );
};

export default DisplayNumbers;
