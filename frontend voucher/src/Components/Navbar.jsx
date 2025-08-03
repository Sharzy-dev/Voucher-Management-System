import React from 'react'
import Logo from '../assets/logo.png'
import { IoMdSettings } from "react-icons/io";

import { FaCloudUploadAlt, FaQrcode, FaCheckCircle, FaTachometerAlt, FaUpload, FaListAlt, FaMobileAlt, FaCog, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { AiOutlineFileDone } from "react-icons/ai";
import { HiOutlineDocumentAdd } from "react-icons/hi";
function Navbar() {
  return (
    <div className=' min-h-screen bg-white shadow-md md:w-[239px]'>

      <div className='flex flex-col justify-between items-center pt-10 gap-20 '> 

        <img src={Logo} alt="logo"  className='w-[75px] h-[75px]' />

        <nav>
            <ul className='space-y-5 ' > 
              <li className='border-l-2 pl-5 border-[#F24B09] flex items-center gap-2'> <FaTachometerAlt />Dashboard</li>
              <li className='border-l-2 pl-5 flex items-center gap-2'> <FaUpload /> Upload Voucher</li>
              <li className='border-l-2 pl-5 flex items-center gap-2'> <FaListAlt /> Vouchers</li>
              <li className='border-l-2 pl-5 flex items-center gap-2'> <FaMobileAlt />Mobile Scanner</li>
              <li className='border-l-2 pl-5 flex items-center gap-2'> <FaCog /> Settings</li>
            </ul>
        </nav> 

          <ul className='space-y-3'>  
            <li className='flex items-center gap-2'><FaQuestionCircle />Help & Support</li>
            <li className='flex items-center gap-2'><FaSignOutAlt /> Logout</li>
            </ul>
             
      </div>
        

    </div>
  )
}

export default Navbar