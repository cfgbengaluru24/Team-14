import React from 'react';
import Lander from './Lander';
import { Link } from 'react-router-dom';
import Button_comp from './Button_comp';
import '../styles/Home.css';
import SuperAdmin from './SuperAdmin';
import '../styles/home.css';



export default function Home({ userDetails }) {
  return (
    <>
      <div className="home-container">
      
        <Lander />
      </div>
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
