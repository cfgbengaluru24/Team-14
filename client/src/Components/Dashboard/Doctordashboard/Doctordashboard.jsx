import React from 'react';
import DoctorMessaging from './DoctorMessaging';
import '../../../styles/styles.css';
import Navigation from './Navigation';

function Doctordashboard  ({ doctorName }) {
  return (
    <div className="container">
      <Navigation/>
     
      <div className="main">
      <DoctorMessaging/>
        <div className="details">
         
        </div>
      </div>
    </div>
  );
};

export default Doctordashboard;
