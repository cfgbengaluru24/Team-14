import React from 'react';
import {Link} from 'react-router-dom';



const Navigation = ({userDetails}) => {

  return (
    <div className="navigation">
      <ul>
        
        <li>
          <a href="#">
            
            <span className="title">home</span>
          </a>
        </li>
        <li>
          <a href="#">
            
            <Link to={`/doctorPortal/${userDetails.name}`}>
              <button>
                Show Appointments
              </button>
            </Link>
          </a>
        </li>
        
        <li>
         
          <Link to='/locationanalysis'>
            <span className="title">Location Based Analysis</span>
            </Link>
        </li>
        <li>
         
            <Link to ='/Doctordashboard/DoctorMessaging'>
            <span className="title">Message</span>
            </Link>
        </li>
        <li>
            <Link to ='/Form/LocationSelection'>
            <span className="title">Location Choice</span>
            </Link>
        </li>
        <li>
          <a href="#">
           
            <span className="title">Settings</span>
          </a>
        </li>
        <li>
          <a href="#">
            
            <span className="title">Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
