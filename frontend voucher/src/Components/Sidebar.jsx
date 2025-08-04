// Sidebar.jsx
import React from 'react'
import Logo from '../assets/logo.png'
import { FaCloudUploadAlt, FaFileAlt, FaCog, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { MdInsertPageBreak } from "react-icons/md";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaUsers, FaUserShield } from "react-icons/fa";

const NavItem = ({ icon, text, active }) => (
  <li
    className={`
      flex items-center gap-2 pl-5 border-l-2 cursor-pointer
      ${active
        ? 'border-[#F24B09] text-[#F24B09]'
        : 'border-transparent text-gray-600 hover:text-orange-500 hover:border-orange-500'}
    `}
  >
    {icon} {text}
  </li>
);

function Sidebar({ type = "user", activeItem }) {
  // Shared menu
  const commonMenu = [
    { icon: <BsFillGrid1X2Fill />, text: 'Dashboard' },
    { icon: <FaCloudUploadAlt />, text: 'Upload Voucher' },
    { icon: <FaFileAlt />, text: 'Vouchers' },
    { icon: <MdInsertPageBreak />, text: 'Mobile Scanner' },
  ];

  // Extra menu for admin
  const adminMenu = [
    { icon: <FaUsers />, text: 'User management' },
    { icon: <FaUserShield />, text: 'Audit Logs' },
    { icon: <FaCog />, text: 'Settings' },
  ];

  // Extra menu for normal user
  const userMenu = [
    { icon: <FaCog />, text: 'Settings' },
  ];

  const menuItems = type === "admin"
    ? [...commonMenu, ...adminMenu]
    : [...commonMenu, ...userMenu];

  return (
    <div className='min-h-screen fixed bg-white shadow-md md:w-[239px] flex flex-col justify-between py-10'>
      {/* Top */}
      <div className='flex flex-col items-center gap-10'>
        <img src={Logo} alt="logo" className='w-[75px] h-[75px]' />
        <nav>
          <ul className='space-y-5'>
            {menuItems.map((item, i) => (
              <NavItem key={i} {...item} active={activeItem === item.text} />
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom */}
      <div className='flex flex-col items-center'>
        <ul className='space-y-3'>
          <li className='flex items-center gap-2 text-gray-600 hover:text-orange-500 cursor-pointer'>
            <FaQuestionCircle /> Help & Support
          </li>
          <li className='flex items-center gap-2 text-red-600 hover:text-red-700 cursor-pointer'>
            <FaSignOutAlt /> Logout
          </li>
        </ul>
      </div>
    </div>
  );
}



export default Sidebar;





// import React from 'react'
// import Logo from '../assets/logo.png'
// import { FaCloudUploadAlt, FaFileAlt, FaCog, FaQuestionCircle, FaSignOutAlt} from "react-icons/fa";
// import { MdInsertPageBreak } from "react-icons/md";
// import { BsFillGrid1X2Fill } from "react-icons/bs";
// // Reusable NavItem
// const NavItem = ({ icon, text, active = false }) => (
//   <li
//     className={`
//       flex items-center gap-2 pl-5 border-l-2 cursor-pointer
//       ${active ? 'border-[#F24B09] text-[#F24B09]' : 'border-transparent text-gray-600 hover:text-orange-500 hover:border-orange-500'}
//     `}
//   >
//     {icon} {text}
//   </li>
// )

// function Sidebar() {
//   return (
//     <div className='min-h-screen bg-white shadow-md md:w-[239px] flex flex-col justify-between py-10'>

//       {/* Top Section: Logo + Nav */}
//       <div className='flex flex-col items-center gap-10'>
//         <img src={Logo} alt="logo" className='w-[75px] h-[75px]' />

//         <nav>
//           <ul className='space-y-5'>
//             <NavItem icon={<BsFillGrid1X2Fill />} 
//             text='Dashboard' active />


            
//             <NavItem icon={<FaCloudUploadAlt />} text='Upload Voucher' />
//             <NavItem icon={<FaFileAlt />} text='Vouchers' />
//             <NavItem icon={<MdInsertPageBreak />} text='Mobile Scanner' />
//             <NavItem icon={<FaCog />} text='Settings' />
//           </ul>
//         </nav>
//       </div>

//       {/* Bottom Section: Support + Logout */}
//       <div className='flex flex-col items-center'>
//       <ul className='space-y-3 '>
//         <li className='flex items-center gap-2 text-gray-600 hover:text-orange-500 cursor-pointer'>
//           <FaQuestionCircle /> Help & Support
//         </li>
//         <li className='flex items-center gap-2 text-red-600 hover:text-red-700 cursor-pointer'>
//           <FaSignOutAlt /> Logout
//         </li>
//       </ul>
//       </div>

//     </div>
//   )
// }



// export default Sidebar
