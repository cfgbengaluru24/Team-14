import React from 'react';
import '../../../styles/styles.css';
import Navigation from './Navigation';
import AdminMessaging from './AdminMessaging';

const AdminDashboard = () => {
  return (
    <div className="container">
      <Navigation />
     
      <div className="main">
      <AdminMessaging/>
        <div className="details">
         
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
