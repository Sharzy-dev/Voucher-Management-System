import React from "react";

function DashboardStat({ title, number, icon, iconBg }) {
  return (
    <div className="flex items-center justify-between w-[227px] h-[114px] rounded-lg p-5 bg-white shadow-sm">
      {/* Texts */}
      <div>
        <div className="text-gray-700 font-medium text-sm">{title}</div>
        <div className="text-2xl font-bold">{number}</div>
      </div>

      {/* Icon */}
      <div className={`w-12 h-12 flex items-center justify-center rounded-full ${iconBg}`}>
        {icon}
      </div>
    </div>
  );
}

export default DashboardStat;
