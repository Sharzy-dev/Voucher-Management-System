import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { MdInsertPageBreak } from 'react-icons/md';
import QuickActions from './Quickactions';

function Quickactionscomponents() {
  return (
    <div className="h-[28.06rem] bg-white shadow p-4 space-y-4">
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
