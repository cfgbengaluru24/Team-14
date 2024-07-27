import React from 'react';
import '../../../styles/styles.css';
import Navigation from './Navigation';
import AdminMessaging from './AdminMessaging';

const AdminDashboard = () => {
  return (
    <div style={{ height: 'calc(99vh - 10px)' }}>
      <div className="container-dashboard">
        <Navigation />
      
        <div className="main">
        <AdminMessaging/>
          
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
