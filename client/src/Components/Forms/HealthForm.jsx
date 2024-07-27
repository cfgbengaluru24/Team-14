import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import SectionA from './SectionA';
import SectionB from './SectionB';
import SectionC from './SectionC';

const HealthForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    bloodGroup: '',
    contact: '',
    address: '',
    images: null,
    files: null,
    plague: 'yes',
    dentalCavity: 'yes',
    diabetesRisk: 'yes',
    anaemiaRisk: 'yes',
    dentalHealth: '',
    diagnosis: '',
    medicines: ''
  });
    
    const handleVisibility = (newVisibility) => {
        setVisibilty(newVisibility);
  }
    
  const [visibility, setVisibilty] = useState('a');

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    console.log("formData",formData);

    try {
      const response = await fetch('/patientInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data successfully submitted');
      } else {
        console.error('Error submitting data');
      }
    } catch (error) {
      console.error('Error submitting data', error);
    }
  };
  
  const navigate = useNavigate();
    

  return (
    <>
          {visibility === 'a' ? <SectionA formData={formData} setFormData={setFormData} visibility={visibility} setVisibility={handleVisibility} /> : null};
          {visibility === 'b' ? <SectionB formData={formData} setFormData={setFormData} visibility={visibility} setVisibility={handleVisibility} /> : null};
          {visibility === 'c' ? <SectionC formData={formData} setFormData={setFormData} handleFinalSubmit={handleFinalSubmit} visibility={visibility} setVisibility={handleVisibility} /> : null};
    </>
  );
};

export default HealthForm;
