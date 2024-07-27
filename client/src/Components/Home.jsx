import React from 'react';
import HealthForm from './Forms/HealthForm';
import { Link } from 'react-router-dom';
import Button_comp from './Button_comp';
import '../styles/Home.css';
import SuperAdmin from './SuperAdmin';
import PatientInfo from './PatientInfo';

export default function Home({ userDetails }) {
  return (
    <>
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
    </>
  );
}
