import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import { MdInsertPageBreak } from 'react-icons/md';

import React from 'react'
import { BiUpload } from 'react-icons/bi';
import Uploadherebox from '../Components/Uploadherebox';
import QuickActions from '../Components/Quickactions';
import Voucherinformation from '../Components/Voucherinformation';

function Adminuploadvoucher() {
  return (
    <div className="flex bg-gray-50 w-full min-h-screen">
      <Sidebar type="admin" />

      <div className="flex-1 ml-[239px] px-6 py-2 space-y-6">
        <div>
          <Navbar
            title="Upload Voucher"
            fullName=" Agu na ech mba"
            position="staff"
          />
          <div className="flex justify-center items-start gap-8">
            <div>
              <div className="my-8">
                <Uploadherebox />
              </div>

              <QuickActions
                icon={MdInsertPageBreak}
                text="Mobile scanner"
                onClick={() => {
                  console.log("Mobile scanner clicked");
                }}
              />
            </div>
            
            <div>
              <Voucherinformation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminuploadvoucher