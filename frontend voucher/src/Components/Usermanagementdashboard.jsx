import React, { useState } from 'react';
import User1 from '.src/assets/user1.jpg';
import User2 from '.src/assets/user2.jpg';
import User3 from '.src/assets/user3.jpg';
import User4 from '.src/assets/user4.jpg';

const UsersDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');
  
  // Sample user data
  const users = [
    {
      id: 1,
      name: 'Mfon Bassey',
      email: 'mfon.bassey@gmail.com',
      role: 'Auditor',
      status: 'Active',
      created: '2024-01-15',
      image: User1
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarahjohnson@gmail.com',
      role: 'Accountant',
      status: 'Inactive',
      created: '2024-02-10',
      image: User2
    },
    {
      id: 3,
      name: 'David Kim',
      email: 'david.kim@yahoo.com',
      role: 'Accountant',
      status: 'Active',
      created: '2024-02-20',
      image: User3
    },
    {
      id: 4,
      name: 'Anhun',
      email: 'anhun@example.com',
      role: 'Auditor',
      status: 'Inactive',
      created: '2024-01-30',
      image: User4
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Users</h1>
        
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'users' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('users')}
          >
            Users
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'items' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('items')}
          >
            Items
          </button>
        </div>
        
        {activeTab === 'users' ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full object-cover" src={user.image} alt={user.name} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.created}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {users.map((user) => (
              <div key={user.id} className="border rounded-lg p-4 flex items-center">
                <img className="h-12 w-12 rounded-full object-cover mr-4" src={user.image} alt={user.name} />
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.email}</p>
                  <p className="text-sm text-gray-500">{user.role}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersDashboard;