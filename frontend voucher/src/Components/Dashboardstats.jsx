import React from 'react'
import Displaynumbers from './Displaynumbers'

// Dashboardstats.jsx
import React from 'react';
import DisplayNumbers from './Displaynumbers'; 

const Dashboardstats = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      
      {/* Implement DisplayNumbers component */}
      <DisplayNumbers />
      
      {/* Other dashboard content can go here */}
      <div className="mt-8">
        {/* Your additional components */}
      </div>
    </div>
  );
};

export default Dashboardstats;