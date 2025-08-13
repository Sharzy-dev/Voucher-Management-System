import React from 'react';

function QuickActions({icon:Icon, text, onClick }) {
  return (
    <div
      onClick={onClick}
      className="border-2 border-dashed border-gray-300 rounded-lg py-15 flex flex-col items-center justify-center hover:border-orange-500 cursor-pointer transition"
    >
      <Icon className="text-teal-600 text-2xl mb-2" />
      <span className="text-teal-600 font-medium text-sm">{text}</span>
    </div>
  );
}

export default QuickActions;

