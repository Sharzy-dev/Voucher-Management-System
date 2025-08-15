import React from 'react';

function QuickActions({ icon, title, text, onClick }) {
   const Icon = icon;
  return (
    <div className="max-w-md p-4 bg-white rounded-lg shadow-sm">
      {/* Title */}
      <h3 className="font-medium text-gray-800 mb-3">{title}</h3>

      {/* Clickable box */}
      <div
        onClick={onClick}
        className="border-2 border-dashed border-[#008080] rounded-lg py-8 flex flex-col items-center justify-center cursor-pointer hover:bg-teal-50 transition"
      >
        <Icon className="text-[#008080] text-3xl mb-3" />
        <span className="text-[#008080] font-medium text-sm">{text}</span>
      </div>
    </div>
  );
}

export default QuickActions;
