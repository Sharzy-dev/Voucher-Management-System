import React from 'react'
import myImage from '../assets/Dev.francis.jpg';
import Emedion from '../assets/Emedion.png'
import Mark from '../assets/mark.png'
function Recentactivities() {

const activities = [
 
  {
    id: 1,
    name: 'Sarah Idemudo ',
    photo: Emedion,
    time: '2 minutes ago',
    action: 'uploaded a voucher',
  },
  {
    id: 2,
    name: 'Mark Udo',
    photo: Mark,
    time: '2 hours ago',
    action: 'started a mobile session',
  },
   {
    id: 3,
    name: 'Dev.Ifeanyi',
    photo: myImage,
    time: '2 hours ago',
    action: 'uploaded a voucher',
  },
  {
    id: 4,
    name: 'Cyril Bassey',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    time: '10 minutes ago',
    action: 'uploaded a voucher',
  },
  {
    id: 5,
    name: 'Mike Johnson',
    photo: 'https://randomuser.me/api/portraits/men/65.jpg',
    time: '1 hour ago',
    action: 'started mobile session',
  },
];

  return (
    <div className=" flex flex-col max-w-150.75 h-auto gap-8 p-5  bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold ">Recent Activities</h2>
      <ul>
        {activities.map((activity) => (
          <li
            key={activity.id}
            className="flex justify-between items-center 
             space-x-4 mb-4  pb-2"
          >
            
            <div className='flex gap-2 items-center'> 
               <img
              src={activity.photo}
              alt={activity.name}
              className="w-10 h-10 rounded-full"
            />
            
             <div className='flex flex-col'>
              <p className="font-medium">
                {activity.name} <span className="text-gray-500 ">{activity.action}</span>
              </p>
            
                <p  className="text-gray-500 "> {activity.action}  </p>
                </div>
              </div>
                    <span className="text-sm text-gray-500 font-[400]">
                    {activity.time}
                    </span>

           
          </li>
        ))}
      </ul>
     
    </div>
  );
}
  
export default Recentactivities