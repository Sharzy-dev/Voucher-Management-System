// import React from 'react';
// import { FiExternalLink, FiDownload } from 'react-icons/fi';

// const vouchers = [
//   {
//     id: 'Invoice #250625',
//     department: 'Finance',
//     amount: '# 150,000',
//     date: '2025-01-15',
//     status: 'Approved',
//     submittedBy: 'Cyril Bassey',
//   },
//   {
//     id: 'NNPC #230987',
//     department: 'Admin',
//     amount: '# 150,000',
//     date: '2025-01-15',
//     status: 'Pending',
//     submittedBy: 'Mark Udo',
//   },
//   {
//     id: 'Dakakda #345698',
//     department: 'Operations',
//     amount: '# 150,000',
//     date: '2025-01-15',
//     status: 'Rejected',
//     submittedBy: 'Sylvester Akpan',
//   },
//   {
//     id: 'Mobil #345687',
//     department: 'IT',
//     amount: '# 150,000',
//     date: '2025-01-15',
//     status: 'Approved',
//     submittedBy: 'Clement Udoudo',
//   },
//   {
//     id: 'Hensek #213456',
//     department: 'Marketing',
//     amount: '# 150,000',
//     date: '2025-01-15',
//     status: 'Pending',
//     submittedBy: 'Akpan Johnson',
//   },
// ];

// const statusStyles = {
//   Approved: 'bg-green-100 text-green-800',
//   Pending: 'bg-orange-100 text-orange-800',
//   Rejected: 'bg-red-100 text-red-800',
// };

// function Voucherrecords() {
//   return (
//     <div className="p-6">
//       <h2 className="text-lg font-semibold text-blue-800 underline mb-4">Voucher Records</h2>
//       <div className="overflow-x-auto rounded-md shadow-sm">
//         <table className="min-w-full table-auto border-collapse">
//           <thead className="bg-gray-100">
//             <tr className="text-left text-sm text-gray-700">
//               <th className="px-4 py-2">Voucher Id</th>
//               <th className="px-4 py-2">Department</th>
//               <th className="px-4 py-2">Amount</th>
//               <th className="px-4 py-2">Date</th>
//               <th className="px-4 py-2">Status</th>
//               <th className="px-4 py-2">Submitted by</th>
//               <th className="px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {vouchers.map((voucher, index) => (
//               <tr key={index} className="border-b text-sm hover:bg-gray-50">
//                 <td className="px-4 py-3 font-medium text-gray-900">{voucher.id}</td>
//                 <td className="px-4 py-3">{voucher.department}</td>
//                 <td className="px-4 py-3">{voucher.amount}</td>
//                 <td className="px-4 py-3">{voucher.date}</td>
//                 <td className="px-4 py-3">
//                   <span
//                     className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[voucher.status]}`}
//                   >
//                     {voucher.status}
//                   </span>
//                 </td>
//                 <td className="px-4 py-3">{voucher.submittedBy}</td>
//                 <td className="px-4 py-3 flex items-center gap-3 text-lg text-gray-600">
//                   <button className="hover:text-blue-600">
//                     <FiExternalLink />
//                   </button>
//                   <button className="hover:text-green-600">
//                     <FiDownload />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Voucherrecords;
