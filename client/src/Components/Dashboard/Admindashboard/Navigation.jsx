import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {

  return (
    <div className="navigation">
      <ul>
        
        <li>
          <a href="/">
            
            <span className="title">home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="title">Available Doctors</span>
          </a>
        </li>
        <li>
          <Link to="/Admindashboard/ManageDoctor">
            
            <span className="title">Add/Remove Doctor</span>
            </Link>
        </li>
        <li>
         
          <Link to='/'>
            <span className="title">Allocation of Doctors</span>
            </Link>
        </li>
        <li>
         
            <Link to ='/Admindashboard/AdminMessaging'>
            <span className="title">Message</span>
            </Link>
        </li>
        
        <li>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
