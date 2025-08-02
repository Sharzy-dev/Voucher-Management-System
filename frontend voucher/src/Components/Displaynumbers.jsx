import React from 'react'
import { FiUpload, FiFileText, FiClock, FiSmartphone } from 'react-icons/fi';

const StatBox = ({ title, value, icon, color }) => {
  const Icon = icon;
  return (
    <div className={`bg-white rounded-lg shadow p-6 flex items-center ${color}`}>
      <div className="p-3 rounded-full bg-opacity-20 bg-white mr-4">
        <Icon className="text-2xl" />
      </div>
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

// const DisplayNumbers = () => {
//   const stats = [
//     { title: 'Total Vouchers', value: '1,024', icon: FiFileText, color: 'bg-blue-50 text-blue-600' },
//     { title: 'Uploads Today', value: '24', icon: FiUpload, color: 'bg-green-50 text-green-600' },
//     { title: 'Pending Review', value: '12', icon: FiClock, color: 'bg-yellow-50 text-yellow-600' },
//     { title: 'Mobile Sessions', value: '8', icon: FiSmartphone, color: 'bg-purple-50 text-purple-600' },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//       {stats.map((stat, index) => (
//         <StatBox
//           key={index}
//           title={stat.title}
//           value={stat.value}
//           icon={stat.icon}
//           color={stat.color}
//         />
//       ))}
//     </div>
//   );
// };

// export default DisplayNumbers;