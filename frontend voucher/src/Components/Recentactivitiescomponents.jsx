import React from "react";

import { Upload, CheckCircle, Smartphone } from "lucide-react";


   
 const activities = [
  {
    id: 1,
    type: "upload",
    message: "New voucher uploaded",
    invoice: "#250625",
    time: "2 minutes ago",
    icon: <Upload className="w-6 h-6 mt-1 mr-2 text-[#008080]" />,
  },
  {
    id: 2,
    type: "approval",
    message: "New voucher approved",
    invoice: "#250626",
    time: "5 minutes ago",
    icon: <CheckCircle className="w-6 h-6 mt-1 mr-2 text-[#008080]" />,
  },
  {
    id: 3,
    type: "mobile",
    message: "Mobile Session",
    action: "Scanner connected",
    time: "2 minutes ago",
    icon: <Smartphone className="w-6 h-6 mt-1 mr-2 text-[#008080]" />,
  },

    {
    id: 1,
    type: "upload",
    message: "New voucher uploaded",
    invoice: "#250625",
    time: "2 minutes ago",
    icon: <Upload className="w-6 h-6 mt-1 mr-2 text-[#008080]" />,
  },
  {
    id: 2,
    type: "approval",
    message: "New voucher approved",
    invoice: "#250626",
    time: "5 minutes ago",
    icon: <CheckCircle className="w-6 h-6 mt-1 mr-2 text-[#008080]" />,
  },
  {
    id: 3,
    type: "mobile",
    message: "Mobile Session",
    action: "Scanner connected",
    time: "2 minutes ago",
    icon: <Smartphone className="w-6 h-6 mt-1 mr-2 text-[#008080]" />,
  },
];


function RecentActivities({ title = "Recent Activities", activities = [] }) {
  return (
    <div className="max-w-xl mx-auto mt-85 ml-70 gap-10 p-5 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-[#1A1A1A]">{title}</h2>
      <ul>
        {activities.map((activity, index) => (
          <li
            key={activity.id || index} // fallback key for safety
            className="flex items-center  mb-2 pb-2"
          >
            <div className="flex-shrink-0">{activity.icon}</div>
            <div>
              <p className="font-medium mb-1">{activity.message}</p>
                  {activity.invoice && (
                <p className="text-sm text-gray-500">
                  Invoice {" "}<span className="font-semibold">
                    {activity.invoice}
                    <span className="text-sm ml-75 text-gray-400">
                      {activity.time}
                    </span>
                  </span>
                </p>
              )}
              {!activity.invoice && (
                // <p className="text-sm text-gray-400">{activity.action}</p>
             <p className="font-semibold text-gray-400">{activity.action}  <span  className="text-sm ml-98 text-gray-400">
              {activity.time}</span></p>
              )}
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentActivities;















// import React from 'react'


// function Recentactivitiescomponents() {
//   return (
//     <div>
//         these are for the reusable components to be used in the quickactivities.jsx
//     </div>
//   )
// }

// export default Recentactivitiescomponents

// import React from "react";
// import { Upload, CheckCircle, Smartphone } from "lucide-react";


// function Recentactivitiescomponents() {

// const activities = [
//   {
//     id: 1,
//     type: "upload",
//     message: "New voucher uploaded",
//     invoice: "#250625",
//     time: "2 minutes ago",
//     icon: <Upload className="w-5 h-5 mt-1  text-[#008080] " />,
//   },
//   {
//     id: 2,
//     type: "approval",
//     message: "New voucher approved",
//     invoice: "#250625",
//     time: "5 minutes ago",
//     icon: <CheckCircle className="w-5 h-5 mt-1  text-[#008080] " />,
//   },
//   {
//     id: 3,
//     type: "mobile",
//     message: "Mobile Session",
//     action: "Scanner connected",
//     time: "2 minutes ago",
//     icon: <Smartphone className="w-5 h-5 mt-1  text-[#008080] " />,
//   },

//    {
//     id: 1,
//     type: "upload",
//     message: "New voucher uploaded",
//     invoice: "#250625",
//     time: "2 minutes ago",
//     icon: <Upload className="w-5 h-5 mt-1  text-[#008080] " />,
//   },
//   {
//     id: 2,
//     type: "approval",
//     message: "New voucher approved",
//     invoice: "#250625",
//     time: "5 minutes ago",
//     icon: <CheckCircle className="w-5 h-5 mt-1  text-[#008080] " />,
//   },
//   {
//     id: 3,
//     type: "mobile",
//     message: "Mobile Session",
//     action: "Scanner connected",
//     time: "2 minutes ago",
//     icon: <Smartphone className="w-5 h-5 mt-1  text-[#008080] " />,
//   },
// ];

//   return (
//     <div className="max-w-xl mx-auto mt-85 ml-70 gap-10 p-5 bg-white rounded-lg shadow">
//       <h2 className="text-xl font-semibold mb-4 text-col [#1A1A1A]">Recent Activities</h2>
//       <ul>
//         {activities.map((activity) => (
//           <li
//             key={activity.id}
//             className="flex items-center space-x-4 mb-2  pb-2"
//           >
//             <div className="flex-shrink-0">{activity.icon}</div>
//             <div>
//               <p className="font-medium mb-2">{activity.message}</p>
//               {activity.invoice && (
//                 <p className="text-sm text-gray-500">
//                   Invoice <span className="font-semibold">{activity.invoice}  <span  className="text-sm ml-98 text-gray-400">{activity.time}</span>  </span></p>
//               )}
//                 {!activity.invoice && (
//                 <p className="font-semibold text-gray-400">{activity.action}  <span  className="text-sm ml-98 text-gray-400">{activity.time}</span></p>
//                 )}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Recentactivitiescomponents