import React from 'react'

function Dashboardstats({title, total, img}) {
  return (
    <div className='w-[227px] h-[114px] rounded-[8px] p-[20px] bg-[#FFFFFF] flex '>
      <div>
        <div className='w-[118px] h-[22px] text-black '>{title} </div>
        <div className='w-[118px] h-[33px]'> {total} </div>
      </div>
      <div className='w-[48px] h-[48px] '>{img} </div>
    </div>
  )
}

export default Dashboardstats




// import React from "react";
// import DisplayNumbers from "./Displaynumbers"

// import { FaClipboardList, FaUpload, FaClock, FaMobileAlt } from "react-icons/fa";

// const DashboardStats = () => {
//   const stats = [
//     {
//       title: "Total Vouchers",
//       number: "2,847",
//       iconBg: "bg-green-200 text-green-800",
//       icon: <FaClipboardList />,
//     },
//     {
//       title: "Uploads Today",
//       number: "16",
//       iconBg: "bg-orange-200 text-orange-800",
//       icon: <FaUpload />,
//     },
//     {
//       title: "Pending Review",
//       number: "4",
//       iconBg: "bg-yellow-200 text-yellow-800",
//       icon: <FaClock />,
//     },
//     {
//       title: "Mobile Sessions",
//       number: "8",
//       iconBg: "bg-blue-200 text-blue-800",
//       icon: <FaMobileAlt />,
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//       {stats.map((stat, index) => (
//         <DisplayNumbers
//           key={index}
//           title={stat.title}
//           number={stat.number}
//           iconBg={stat.iconBg}
//           icon={stat.icon}
//         />
//       ))}
//     </div>
//   );
// };

// export default DashboardStats;
