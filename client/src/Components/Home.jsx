<<<<<<< HEAD
import React from 'react'
import HealthForm from './Forms/HealthForm'

=======
import React from 'react';
import HealthForm from './Forms/HealthForm';
import { Link } from 'react-router-dom';
import Button_comp from './Button_comp';
import '../styles/Home.css';
import SuperAdmin from './SuperAdmin';
import PatientInfo from './PatientInfo';
>>>>>>> 9feb25ecf4cd0bfee9922989ad57462d209465f7

export default function Home({ userDetails }) {
  return (
    <>
<<<<<<< HEAD
      Home
=======
      {userDetails.isAdmin && (
        <div>
          <div className="button-container">
            <Link to="/rbsk">
              <Button_comp btn="+ Add Screening Location" type="submit"/>
            </Link>
          </div>
          <div>
            <SuperAdmin/>
          </div>
        </div>
        
        
      )}
>>>>>>> 9feb25ecf4cd0bfee9922989ad57462d209465f7
    </>
  );
}
