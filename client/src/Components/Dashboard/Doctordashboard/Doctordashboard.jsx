import React from 'react';
import DoctorMessaging from './DoctorMessaging';
import '../../../styles/styles.css';
import Navigation from './Navigation';

function Doctordashboard  ({ doctorName }) {
  return (
    <div style={{ height: 'calc(99vh - 10px)' }}>
    <div className="container-dashboard">
      <Navigation/>
     
      <div className="main">
      <DoctorMessaging/>
        <div className="details">
         
        </div>
      </div>
    </div>
    </div>
  );
};

export default Doctordashboard;
