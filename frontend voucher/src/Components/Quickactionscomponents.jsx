import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { MdInsertPageBreak } from 'react-icons/md';
import QuickActions from './Quickactions';

function Quickactionscomponents() {
  return (
    <div className="w-[316px] h-[440px] bg-white shadow p-4 space-y-4">
      <h3 className="text-gray-800 font-semibold text-sm">Quick Actions</h3>

      <div className="space-y-4">
        <QuickActions
          icon={FaCloudUploadAlt}
          text="Upload Voucher"
          onClick={() => {
            console.log('Upload Voucher clicked');
          }}
        />

        <QuickActions
          icon={MdInsertPageBreak}
          text="Mobile scanner"
          onClick={() => {
            console.log('Mobile scanner clicked');
          }}
        />
      </div>
    </div>
  );
}

export default Quickactionscomponents;




// import React from 'react'
// import { FaCloudUploadAlt } from 'react-icons/fa'
// import { MdInsertPageBreak } from "react-icons/md";
// import Quickactions from './Quickactions';


// function Quickactionscomponents() {
//   return (
//     <div className="w-[316px] h-[440px] bg-white shadow p-4 space-y-4">
//       <h3 className="text-gray-800 font-semibold text-sm">Quick Actions</h3>

//       <div className="space-y-4">
//         {/* Upload Voucher */}
//         <div className="border-2 border-dashed border-gray-300 rounded-lg py-15 flex flex-col items-center justify-center hover:border-orange-500 cursor-pointer transition">
          
//           <FaCloudUploadAlt className="text-teal-600 text-2xl mb-2" />
//           <span className="text-teal-600 font-medium text-sm">
//             {/* <input type="file" name="" id="" placeholder='' /> */}
//             Upload Voucher</span>
//         </div>

//         {/* Mobile Scanner */}
//         <div className="border-2 border-dashed border-gray-300 rounded-lg py-15 flex flex-col items-center justify-center hover:border-orange-500 cursor-pointer transition">
//           <MdInsertPageBreak className="text-teal-600 text-2xl mb-2" />
//           <span className="text-teal-600 font-medium text-sm">Mobile scanner</span>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Quickactionscomponents

